import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


export default class MyContracts extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          Contract Signed! <br/>
          My Contracts
        </div>
        <div className="content">
          <div>Contract 1</div>
          <div>Contract 2</div>
          <Link to="/">Create Another Contract</Link>
        </div>
      </div>
    );
  }
}
