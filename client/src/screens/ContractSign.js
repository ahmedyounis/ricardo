import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


export default class ContractSign extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signed: false
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
          Assign Signatures
        </div>
        <div className="content">
        <form>
          <label>
            <ul>
              <li><input
                type="checkbox"
                name="signed"
                value={this.state.field2}
                onChange={this.handleInputChange}
              /> CreatedBy</li>
            </ul>
          </label>
          <label>
            <ul>
              <li><input
                type="checkbox"
                name="signed"
                disabled={true}
              /> Agent 2</li>
            </ul>
            <ul>
              <li><input
                type="checkbox"
                name="signed"
                disabled={true}
              /> Agent 3</li>
            </ul>
            </label>

          <br/><br/>
        </form>
          <Link to="/contracts">Next</Link>
        </div>
      </div>
    );
  }
}
