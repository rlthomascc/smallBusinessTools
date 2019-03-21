import React, { Component } from 'react';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: '',
    };
  }

  homePage() {
    return (
      <div id="homePage">
        <p className="h2">HELLO WORLD</p>
      </div>
    );
  }


  render() {
    return (
      this.homePage()
    );
  }
}

export default Homepage;
