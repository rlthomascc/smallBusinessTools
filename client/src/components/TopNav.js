/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import $ from 'jquery';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    const { token } = this.props;
    $.ajax({
      method: 'GET',
      url: '/user',
      data: {
        token,
      },
      success: (data) => {
        console.log(data, 'Success');
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
      <nav id="topnav" className="navbar navbar-light bg-white flex-md-nowrap align-self-start">
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
        Logo Here
          </li>
        </ul>
        <p className="h5 justify-content-left">
          {' '}
          <b>
            {' '}
Welcome
            {' '}
            {userName.charAt(0).toUpperCase() + userName.slice(1)}
            {' '}
          </b>
        </p>
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
