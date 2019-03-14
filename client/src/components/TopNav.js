/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import $ from 'jquery';

class TopNav extends Component {
  componentDidMount() {
    console.log('welcome');
  }


  topNav() {
    return (
      <nav id="topnav" className="navbar navbar-light bg-white flex-md-nowrap align-self-start">
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
        Logo Here
          </li>
        </ul>
        <p className="h5 justify-content-left"> Welcome USER NAME HERE </p>
        {/* <input className="form-control form-control-light" type="text" placeholder="Search" aria-label="Search" /> */}
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link text-danger" href="#" onClick={this.props.logout.bind(this)}>
        Log Out
            </a>
          </li>
        </ul>
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
