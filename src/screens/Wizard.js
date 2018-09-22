import React, { Component } from 'react';
import '../App.css';

export default class ContractSelect extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          Wizard
        </div>
        <div className="content">
          <strong>Select a contract</strong>
          <form onSubmit={this.submitHandler}>
            <label>
              wejldlksjfldskj sjdlkfjs;ld lskdjf;lsd
              <input type="text" name="name" />
              lksjf;ds slkd jfls; lskdj fl;sjdlkfjs
              <input type="text" name="name" />
              s;fldkjflds slkjf;sd skljf;s d
            </label>
            <br/><br/>
            <input type="submit" value="Next" />
          </form>
        </div>
      </div>
    );
  }
}
