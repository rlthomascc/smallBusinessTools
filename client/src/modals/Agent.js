/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';

const FormData = require('form-data');


class Agent extends Component {
  constructor(props) {
    super(props);
  }


  fileUploadHandler(e) {
    const { close } = this.props;
    e.preventDefault();
    const photo = e.target.portrait.files[0];
    const fullName = e.target.fullName.value;
    const jobTitle = e.target.jobTitle.value;
    const typeOf = e.target.typeOf.value;
    const split = e.target.split.value;
    const costPerYear = e.target.costPerYear.value;
    const goal = e.target.goal.value;
    const formData = new FormData();
    formData.append('image', photo, photo.name);
    formData.append('fullName', fullName);
    formData.append('jobTitle', jobTitle);
    formData.append('typeOf', typeOf);
    formData.append('split', split);
    formData.append('costPerYear', costPerYear);
    formData.append('goal', goal);
    axios.post('/agent', formData)
      .then((res) => {
        console.log(res);
      });
    close();
  }

  agent() {
    return (
      <div className="container" id="modalContainer">
        <form onSubmit={this.fileUploadHandler.bind(this)}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" className="form-control" id="fullName" name="fullName" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" className="form-control" id="jobTitle" name="jobTitle" placeholder="Realtor®" required />
          </div>
          <div className="form-group">
            <label htmlFor="typeOf">Type</label>
            <select className="form-control" id="typeOf" required>
              <option>Choose One...</option>
              <option>Buyers Agent</option>
              <option>Sellers Agent</option>
              <option>Multi</option>
            </select>
          </div>
          <div className="input-group mb-3 col-sm-4">
            <label htmlFor="split">Split</label>
            <div className="input-group-prepend">
              <input type="number" step="0.01" className="form-control" name="split" placeholder="50" required />
              <span className="input-group-text" id="split">%</span>
            </div>
          </div>
          <div className="input-group mb-3 col-sm-4">
            <label htmlFor="image">Cost Per Year</label>
            <div className="input-group-prepend">
              <span className="input-group-text" id="costPerYear">$</span>
              <input type="number" step="0.01" className="form-control" name="costPerYear" placeholder="30000" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="goal">Transaction Goal</label>
            <input type="number" step="0.01" className="form-control" id="goal" name="goal" placeholder="30" />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="file" name="portrait" id="portrait" required />
          </div>
          <br />
          <div className="form-group text-center">
            {/* change this.props.close to be moved to another location */}
            <input className="btn btn-primary btn-block" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      this.agent()
    );
  }
}

export default Agent;
