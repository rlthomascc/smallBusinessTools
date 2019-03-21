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
        <img src="/uploads/image-1553127084803.jpg" width="200" />
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
