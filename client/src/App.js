import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ContractSelect from './screens/ContractSelect';
//import Wizard from './screens/Wizard';
import ContractWiz from './screens/contractwiz/stepone';
import ContractWizTwo from './screens/contractwiz/steptwo';
import ContractWizThree from './screens/contractwiz/stepthree';
import Checkout from './screens/contractwiz/checkout';
import ContractVerify from './screens/ContractVerify';
import ContractSign from './screens/ContractSign';
import MyContracts from './screens/MyContracts';

import ContractCreate from './screens/contractwiz/checkout';

class App extends Component {

  render() {
    const routesInfo = [
      {
        path: '/index.html',
        component: ContractSelect,
        key: 'contractselect'
      },
      {
        path: '/create',
        component: Checkout,
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
      },
      {
        path: '/index.html',
        component: MyContracts,
        key: 'contractselect'
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
