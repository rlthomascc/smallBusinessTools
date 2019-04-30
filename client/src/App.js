/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  Router, Route, Link, IndexRoute, hashHistory, browserHistory, Switch,
} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import $ from 'jquery';
import Axios from 'axios';
import Routes from './Routes';
import Login from './components/login';

// IMPLEMENT SSR ON THIS ENTIRE PROJECT!!!

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [],
    };
  }

  componentWillMount() {
    Axios.get('/agent')
      .then((res) => {
        this.setState({
          routes: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    const { routes } = this.state;
    return (

      <Routes agents={routes} />
    );
  }
}

export default App;
