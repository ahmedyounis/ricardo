import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ContractSelect from './screens/ContractSelect';
import ContractCreate from './screens/contractwiz/checkout';
import ContractVerify from './screens/ContractVerify';
import ContractSign from './screens/ContractSign';
import MyContracts from './screens/MyContracts';

class App extends Component {

  render() {
    const routesInfo = [
      {
        path: '/',
        component: ContractSelect,
        key: 'contractselect'
      },
      {
        path: '/create',
        component: ContractCreate,
        key: 'create'
      },
      {
        path: '/verify',
        component: ContractVerify,
        key: 'verify'
      },
      {
        path: '/sign',
        component: ContractSign,
        key: 'sign'
      },
      {
        path: '/contracts',
        component: MyContracts,
        key: 'contracts'
      }
    ];

    const routes = routesInfo.map( route => {
      return(
        <Route exact
          path = {route.path}
          render = {(props) => <route.component {...props} /> }
          key = {route.key}
        />
      )
    })
    return (
      <Router>
        <div>
          {routes}
        </div>
      </Router>
    );
  }
}



export default App;
