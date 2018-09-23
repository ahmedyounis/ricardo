#include "ricado.hpp"

using namespace eosio;
using std::string;

class ricardo : public contract
{
  // blog class inherits the “contract” smart contract and use its constructor below
  using contract::contract;
public:
  // contract constructor
  explicit ricardo(account_name self) : contract(self) {}

  // mark with @abi action so that eosiocpp will add this as an action to the ABI

  //@abi action
  void createricardo(const uint64_t timestamp, const account_name author, const string &field1, const string &field2, const string &field3, const string &field4, const string &field5)
  {
    // check if authorized for account to sign action
    // if you are not authorized then this action will be aborted
    // and the transaction will by rolled back - any modifications will be reset
    require_auth(author);

    uint128_t skey = static_cast<uint128_t>(author) << 64 | timestamp; 
    // post_table is our multi_index
    // multi_index is how you store persistant data across actions in EOSIO
    // each action has a new action context which is a clean working memory with no prior working state from other action executions
    ricardo_table ricardostable(_self, _self); // code, scope

    // add a record to our multi_index table poststable
    // const_iterator emplace( unit64_t payer, Lambda&& constructor )
    ricardostable.emplace(author, [&](auto &ricardo) {
      ricardo.pkey = ricardostable.available_primary_key();
      ricardo.skey = skey;
      ricardo.author = author;
    });
  }

  //@abi action
  void editricardo(const uint64_t timestamp, const account_name author, const string &field1, const string &field2, const string &field3, const string &field4, const string &field5)
  {
    ricardo_table ricardostable(_self, _self);

    // get object by secondary key
    auto ricardos = ricardostable.get_index<N(getbyskey)>();
    uint128_t skey = static_cast<uint128_t>(author) << 64 | timestamp; 
    auto ricardo = ricardos.find(skey);
    eosio_assert(ricardo != ricardos.end(), "Ricardo for hash could not be found");

    // check if authorized to update post
    require_auth(ricardo->author);
  }


  //@abi action
  void deletericardo(const uint64_t timestamp, const account_name author)
  {
    ricardo_table ricardostable(_self, _self);

    auto ricardos = ricardostable.get_index<N(getbyskey)>();
    uint128_t skey = static_cast<uint128_t>(author) << 64 | timestamp; 

    auto ricardo = ricardos.find(skey);
    eosio_assert(ricardo != ricardos.end(), "Ricardo for hash could not be found");

    // check if authorized to delete post
    require_auth(ricardo->author);

    auto toDeleteRicardo = ricardostable.find(ricardo->pkey);
    ricardostable.erase(toDeleteRicardo);
  }

private:
  // mark with @abi table so that eosiocpp will add this as a multi_index to the ABI with an index of type i64

  //@abi table posts i64
  struct ricardo_struct
  {
    uint64_t pkey;
    uint64_t author;
    uint128_t skey;

    // primary key
    uint64_t primary_key() const { return pkey; }

    // secondary key
    uint128_t get_by_skey() const { return skey; }

    // call macro
    EOSLIB_SERIALIZE(ricardo_struct, (pkey)(author)(skey))
  };

  // typedef multi_index<N(table_name), object_template_to_use, other_indices> multi_index_name;
  typedef eosio::multi_index<N(ricardos), ricardo_struct,
                      indexed_by<N(getbyskey), const_mem_fun<ricardo_struct, uint128_t, &ricardo_struct::get_by_skey>>>
      post_table;
};

EOSIO_ABI(ricardo, (createricardo)(deletericardo)(editricardo))