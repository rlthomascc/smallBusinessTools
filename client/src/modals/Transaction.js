/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  transaction() {
    return (
      <div>
        <h1>TRANSACTION FORM HERE</h1>
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
