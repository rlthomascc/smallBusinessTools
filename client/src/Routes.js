/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AgentPage from './components/AgentPage';
import AdminPage from './components/AdminPage';


class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { agents } = this.props;
    return (
      <HashRouter>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/home" exact component={Home} />
          <Route path="/carlos_gutierrez" exact component={AgentPage} />
          <Route path="/admin_page" exact component={AdminPage} />
          {agents.map((agent, i) => <Route key={i} path={`/${agent.name.replace(/ /g, '_')}`} component={AgentPage} />)}
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
