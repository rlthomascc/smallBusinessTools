/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';
import { IoIosHome, IoMdPersonAdd, IoIosCash } from 'react-icons/io';
import {
  FaUserPlus, FaHome, FaTags, FaMoneyBillAlt, FaLandmark, FaHandHoldingUsd, FaDollarSign, FaDonate, FaCog, FaChevronDown, FaCaretDown, FaAngleDown, FaAddressBook, FaKey,
} from 'react-icons/fa';
import { getFromStorage } from '../../utils/storage';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
    };
  }

  componentDidMount() {
    const token = getFromStorage('token');
    // const token = this.props.location.state.token
    if (token.length > 1) {
      // verify the token
      $.ajax({
        method: 'GET',
        url: '/verify',
        data: {
          token,
        },
        success: (data) => {
          this.setState({
            token,
            isLoading: false,
          });
        },
        error: (err) => {
          this.setState({
            isLoading: false,
          });
          console.log(err, 'error');
          return <Redirect to="/login" />;
        },
      });
    }
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

  homePage() {
    return (
      <nav id="sidenav" className="bg-light col-md-2 d-none d-md-block sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column text-center">
            <p className="h3 text-center text-warning">
              <FaKey size={50} />
            </p>
            <li className="nav-item">
              <a className="nav-link active text-primary" href="#">
                <FaHome size={20} />
                {' '}
        Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-secondary" data-toggle="dropdown" href="#/home" role="button" aria-haspopup="true" aria-expanded="false">
                <FaAddressBook size={20} />
                {' '}
          Agents
              </a>
              <div className="dropdown-menu text-center bg-light">
                <a className="dropdown-item" href="#/home">Overview</a>
                <a className="dropdown-item" href="#/home">Item 2</a>
                <a className="dropdown-item" href="#/home">Item 3</a>
                <a className="dropdown-item" href="#/home">Item 4</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#/home">Seperate</a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-secondary" data-toggle="dropdown" href="#/home" role="button" aria-haspopup="true" aria-expanded="false">
                <FaLandmark size={20} />
                {' '}
          Investments
              </a>
              <div className="dropdown-menu text-center bg-light">
                <a className="dropdown-item" href="#/home">Overview</a>
                <a className="dropdown-item" href="#/home">Item 2</a>
                <a className="dropdown-item" href="#/home">Item 3</a>
                <a className="dropdown-item" href="#/home">Item 4</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#/home">Seperate</a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link text-secondary" href="#/home">
                <FaHandHoldingUsd size={30} />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-secondary" href="#/home">
                <FaUserPlus size={30} />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-secondary" href="#/home">
                <FaMoneyBillAlt size={30} />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-danger" href="#" onClick={(this.logout.bind(this))}>
        Log Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  renderView() {
    const { isLoading, token } = this.state;
    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    if (!token) {
      return <Redirect to="/signup" />;
    }
    if (token) {
      return (
        this.homePage()
      );
    }
    console.log('ERROR');
  }

  render() {
    const { redirect } = this.state;
    if (redirect === 'login') {
      location.reload();
      return <Redirect to="/login" />;
    }
    if (redirect === '') {
      location.reload();
      return <Redirect to="/login" />;
    }
    return (
      this.renderView()
    );
  }
}

export default Home;
