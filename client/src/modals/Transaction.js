import React, { Component } from 'react';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }

  transaction() {
    return (
      <div>
        <p className="h1">TRANSACTION FORM HERE</p>
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
