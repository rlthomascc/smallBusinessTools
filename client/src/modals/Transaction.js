/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import axios from 'axios';

const FormData = require('form-data');

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agents: [],
      leads: [],
    };
  }

  componentDidMount() {
    axios.get('/agent')
      .then((res) => {
        this.setState({
          agents: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get('/investment')
      .then((res) => {
        this.setState({
          leads: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  fileUploadHandler(e) {
    const { close } = this.props;
    e.preventDefault();
    const photo = e.target.property.files[0];
    const address = e.target.address.value;
    const price = e.target.price.value;
    const commission = e.target.commission.value;
    const typeOf = e.target.typeOf.value;
    const agent = e.target.agent.value;
    const leadSource = e.target.leadSource.value;
    const lender = e.target.lender.value;
    const tcFee = e.target.tcFee.value;
    const closeDate = e.target.closeDate.value;

    console.log(photo, address, price, commission, typeOf, agent, leadSource, lender, tcFee, closeDate);

    console.log(photo, 'PHOTO');
    const formData = new FormData();
    formData.append('image', photo, photo.name);
    formData.append('address', address);
    formData.append('price', price);
    formData.append('commission', commission);
    formData.append('typeOf', typeOf);
    formData.append('agent', agent);
    formData.append('leadSource', leadSource);
    formData.append('lender', lender);
    formData.append('tcFee', tcFee);
    formData.append('closeDate', closeDate);

    axios.post('/transaction', formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.patch('/agent', { agent, price })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.patch('/investment', { leadSource, price })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    close();
  }

  transaction() {
    const { agents, leads } = this.state;
    return (
      <div className="container" id="modalContainer">
        <form onSubmit={this.fileUploadHandler.bind(this)}>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" name="address" placeholder="1234 Main St. Sacramento, CA" required />
          </div>
          <div className="input-group mb-3 col-sm-4">
            <label htmlFor="price">Price</label>
            <div className="input-group-prepend">
              <span className="input-group-text" id="price">$</span>
              <input type="number" step="0.01" className="form-control" name="price" placeholder="500000" required />
            </div>
          </div>
          <div className="input-group mb-3 col-sm-4">
            <label htmlFor="commission">Commission</label>
            <div className="input-group-prepend">
              <input type="number" step="0.01" className="form-control" name="commission" placeholder="3.5" required />
              <span className="input-group-text" id="commission">%</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="typeOf">Type</label>
            <select className="form-control" id="typeOf" required>
              <option>Choose One...</option>
              <option>Buyer</option>
              <option>Seller</option>
              <option>Multi</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="agent">Agent</label>
            <select className="form-control" id="agent" required>
              <option>Choose One...</option>
              {agents.map((elem, i) => <option key={i}>{elem.name}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="leadSource">Lead Source</label>
            <select className="form-control" id="leadSource">
              <option>Choose One...</option>
              {leads.map((elem, i) => <option key={i}>{elem.company}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="lender">Lender Associated (If any)</label>
            <input type="text" className="form-control" id="lender" name="lender" placeholder="Jane Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="file" name="property" id="property" />
          </div>
          <div className="input-group mb-3 col-sm-4">
            <label htmlFor="tcFee">TC Fee</label>
            <div className="input-group-prepend">
              <span className="input-group-text" id="tcFee">$</span>
              <input type="number" step="0.01" className="form-control" name="tcFee" placeholder="5000" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="closeDate">Close Date</label>
            <input type="date" className="form-control" id="closeDate" name="closeDate" required />
          </div>
          <br />
          <div className="form-group text-center">
            <input className="btn btn-primary btn-block" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      this.transaction()
    );
  }
}

export default Transaction;
