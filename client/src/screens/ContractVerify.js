import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


export default class ContractVerify extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          Verify Your Contract
        </div>
        <div className="content">
          <div>Image goes here.</div>
          <Link to="/">Next</Link>
        </div>
      </div>
    );
  }
}
