import React, { Component } from 'react';

class Investment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }

  investment() {
    return (
      <div>
        <p className="h1">Investment FORM HERE</p>
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
