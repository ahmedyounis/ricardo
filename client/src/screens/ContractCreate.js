import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


export default class ContractCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractID: '',
      createdDateTime: '',
      createdBy: '',
      field1: '',
      field2: '',
      field3: '',
      field4: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state)
  }


  render() {
    return (
      <div className="container">
        <div className="title">
          Wizard
        </div>
        <div className="content">
        <form>
          <label>
            Created By:
            <input
              type="text"
              name="createdBy"
              value={this.state.createdBy}
              onChange={this.handleInputChange}
            /><br/>
            Created Date:
            <input
              type="date"
              name="createdDateTime"
              value={this.state.createdDateTime}
              onChange={this.handleInputChange}
            /><br/>
            Between
            <input
              type="text"
              name="field1"
              value={this.state.field1}
              onChange={this.handleInputChange}
            />
            with
            <input
              type="text"
              name="field2"
              value={this.state.field2}
              onChange={this.handleInputChange}
            />
            in
            <input
              type="text"
              name="field3"
              value={this.state.field3}
              onChange={this.handleInputChange}
            />
          </label>
          <br/><br/>
        </form>

        <Link to="/verify">Next</Link>
        </div>
      </div>
    );
  }
}
