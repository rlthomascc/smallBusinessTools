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
      <nav id="topnav" className="navbar navbar-dark bg-dark rounded-0 border border-secondary">
        <ul className="navbar-nav px-5 ml-auto text-light">
          <li className="nav-item text-nowrap">
        Logo Here
          </li>

        </ul>
        <p className="h5 justify-content-left text-light">
          {' '}
          <b>
            <img src="/uploads/image-1553127084803.jpg" width="50" className="rounded-circle" />
            {' '}
          </b>
        </p>
        {/* <input className="form-control form-control-light" type="text" placeholder="Search" aria-label="Search" /> */}
        <ul className="navbar-nav px-5">
          <li className="nav-item text-nowrap">
            <a className="btn btn-outline-danger text-warning" href="#" onClick={this.props.logout.bind(this)}>
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
