import React, { Component } from 'react';

class Agent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }

  agent() {
    return (
      <div>
        <p className="h1">Agent FORM HERE</p>
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
