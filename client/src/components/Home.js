/* eslint-disable class-methods-use-this */
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
import TopNav from './TopNav';
import SideNav from './SideNav';
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
      <div>
        <p>HELLO WORLD!</p>
      </div>
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
        <div>
          <TopNav logout={this.logout} />
          <SideNav logout={this.logout} />
          {this.homePage()}
        </div>
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
