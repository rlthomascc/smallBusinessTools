/* eslint-disable no-unused-expressions */
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
import { Redirect, Route, HashRouter } from 'react-router-dom';
import axios from 'axios';
import TopNav from './TopNav';
import SideNav from './SideNav';
import Homepage from './Homepage';
import AgentPage from './AgentPage';
import { getFromStorage } from '../../utils/storage';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      agents: [],
      leads: [],
      transactions: [],
      view: 'Home',
    };
  }

  componentWillMount() {
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
    axios.get('/agent')
      .then((res) => {
        this.setState({
          agents: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get('/transaction')
      .then((res) => {
        this.setState({
          transactions: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get('/investment')
      .then((res) => {
        this.setState({
          leads: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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

  changeView(e) {
    console.log(e, 'RENDER VIEW');
    this.setState({
      view: e,
    });
    // const newPath = e.replace(/ /g, '_');
    // return <Redirect to={`/${newPath}`} />;
  }

  renderView() {
    const {
      isLoading, token, agents, leads, transactions, view,
    } = this.state;
    const newPath = view.replace(/ /g, '_');
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
      if (view === 'Home') {
        return (
          <div id="container-fluid">
            <SideNav logout={this.logout} changeView={this.changeView.bind(this)} />
            <TopNav logout={this.logout} token={token} changeView={this.changeView.bind(this)} />
            <Homepage className="text-center" agents={agents} leads={leads} changeView={this.changeView.bind(this)} />
          </div>
        );
      }
    }
    return (
      // <Redirect to={`/${newPath}`} />
      <Redirect to="/login" />
    );
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
