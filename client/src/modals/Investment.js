/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import axios from 'axios';

class Investment extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const company = e.target.company.value;
    const costPerYear = e.target.costPerYear.value;
    const costPerMonth = e.target.costPerMonth.value;
    axios.post('/investment', {
      company,
      costPerYear,
      costPerMonth,
    })
      .then((res) => {
        console.log(res);
      });
  }

  investment() {
    return (
      <div className="container" id="investmentModal">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" className="form-control" id="company" name="company" placeholder="Zillow" required />
          </div>
          <div className="input-group mb-3 col-sm-4">
            <label htmlFor="costPerYear">Cost Per Year</label>
            <div className="input-group-prepend">
              <span className="input-group-text" id="costPerYear">$</span>
              <input type="number" className="form-control" name="costPerYear" placeholder="30000" />
            </div>
          </div>
          <div className="input-group mb-3 col-sm-4">
            <label htmlFor="costPerMonth">Cost Per Month</label>
            <div className="input-group-prepend">
              <span className="input-group-text" id="costPerMonth">$</span>
              <input type="number" className="form-control" name="costPerMonth" placeholder="1000" />
            </div>
          </div>
          <br />
          <div className="form-group text-center">
            <input className="btn btn-primary btn-block" type="submit" value="Submit" onClick={this.props.close} />
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      this.investment()
    );
  }
}

export default Investment;
