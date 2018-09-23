import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ContractSelect from './screens/ContractSelect';
import Wizard from './screens/Wizard';
import ContractWiz from './screens/contractwiz/stepone';
import ContractWizTwo from './screens/contractwiz/steptwo';
import ContractWizThree from './screens/contractwiz/stepthree';
import Checkout from './screens/contractwiz/checkout';
import ContractVerify from './screens/ContractVerify';


class App extends Component {

  render() {
    const routesInfo = [
      {
        path: '/',
        component: ContractSelect,
        key: 'contractselect'
      },
      {
        path: '/wizard',
        component: Checkout,
        key: 'wizard'
      },
      {
        path: '/wizarded',
        component: Wizard,
        key: 'wizard'
      },
      {
        path: '/verify',
        component: ContractVerify,
        key: 'verify'
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
