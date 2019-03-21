/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import axios from 'axios';

const FormData = require('form-data');

class Transaction extends Component {
  constructor(props) {
    super(props);
  }


  fileUploadHandler(e) {
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
      });
  }

  transaction() {
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
              <input type="text" className="form-control" name="price" placeholder="500000" required />
            </div>
          </div>
          <div className="input-group mb-3 col-sm-4">
            <label htmlFor="commission">Commission</label>
            <div className="input-group-prepend">
              <input type="text" className="form-control" name="commission" placeholder="3.5" required />
              <span className="input-group-text" id="commission">%</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="typeOf">Type</label>
            <select className="form-control" id="typeOf" required>
              <option>Choose One...</option>
              <option>Buyer</option>
              <option>Seller</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="agent">Agent</label>
            <select className="form-control" id="agent" required>
              <option>Choose One...</option>
              <option>Agent 1</option>
              <option>Agent 2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="leadSource">Lead Source</label>
            <select className="form-control" id="leadSource">
              <option>Choose One...</option>
              <option>Lead Source 1</option>
              <option>Lead Source 2</option>
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
              <input type="text" className="form-control" name="tcFee" placeholder="5000" />
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
