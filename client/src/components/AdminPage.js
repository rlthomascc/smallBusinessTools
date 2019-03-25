/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import SideNav from './SideNav';
import TopNav from './TopNav';


class AdminPage extends Component {
  constructor(props) {
    super(props);
  }


  logout() {
    const token = getFromStorage('token');
    this.setState({
      redirect: 'login',
      token: '',
    });
    $.ajax({
      method: 'PATCH',
      url: '/logout',
      data: {
        token,
      },
      success: (data) => {
        console.log(data, 'data in patch');
      },
      error: (err) => {
        console.log(err, 'err');
      },
    });
  }

  admin() {
    return (
      <div id="homePage">

        <h1>HELLO WORLD</h1>
      </div>
    );
  }

  render() {
    return (
      <div>
        <SideNav logout={this.logout} />
        <TopNav logout={this.logout} />
        {this.admin()}
      </div>
    );
  }
}

export default AdminPage;
