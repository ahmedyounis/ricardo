import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';


export default class ContractSelect extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          Contracts
        </div>
        <div className="content">
          <strong>Select a contract</strong>
          <form onSubmit={this.submitHandler}>
            <select name="Contract">
              <option value="Marriage">Marriage</option>
              <option value="AutoLoan">Auto Loan</option>
              <option value="Mortgage">Mortgage</option>
              <option value="Separation">Separation Agreement</option>
              <option value="Will">Last Will</option>
            </select>
            <Button variant="contained" input type="submit" color="primary"> Select</Button>
          </form>
        </div>
      </div>
    );
  }
}


