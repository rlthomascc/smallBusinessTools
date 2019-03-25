/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Redirect, Route, HashRouter } from 'react-router-dom';
import $ from 'jquery';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentWillMount() {
    const { token } = this.props;
    $.ajax({
      method: 'GET',
      url: '/user',
      data: {
        token,
      },
      success: (data) => {
        this.setState({
          userName: data,
        });
      },
      error: (err) => {
        console.log(err, 'ERR');
      },
    });
  }


  topNav() {
    const { userName } = this.state;
    return (
      <nav id="topnav" className="navbar navbar-dark bg-dark rounded-0 border border-secondary">
        <ul className="navbar-nav px-5 ml-auto text-light">
          <li className="nav-item text-nowrap">
      Logo Here
          </li>

        </ul>
        <li className="photo-dropdown nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#/home" id="photoDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={userName.image} width="50" className="rounded-circle" />
            {' '}
            {' '}
            {userName.username}
          </a>
          <div id="topnav-drop" className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a id="topnav-drop" className="dropdown-item" href="#/admin_page">My Profile</a>
            <a id="topnav-drop" className="dropdown-item" href="#/login" onClick={this.props.logout.bind(this)}>Log Out</a>
          </div>
        </li>
      </nav>
    );
  }

  render() {
    return (
      this.topNav()
    );
  }
}

export default TopNav;
