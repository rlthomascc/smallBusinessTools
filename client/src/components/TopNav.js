/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  FaKey,
} from 'react-icons/fa';

class TopNav extends Component {
  topNav() {
    return (
      <nav id="topnav" className="navbar navbar-light bg-white flex-md-nowrap align-self-start">
        <a className="flex-md-nowrap text-warning" href="#"><FaKey size={40} /></a>
        <input className="form-control form-control-light" type="text" placeholder="Search" aria-label="Search" />
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
