/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: '',
    };
  }

  table() {
    return (
      <div className="container">
        <table className="table table-striped border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Randy</td>
              <td>Andy</td>
              <td>Daniel</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Don</td>
              <td>Joseph</td>
              <td>Carlos</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  homePage() {
    return (
      <div id="homePage">
        {this.table()}
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
