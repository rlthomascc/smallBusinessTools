/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Axios from 'axios';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agents: [{ name: 'Randy Thomas' }],
    };
  }

  // componentWillMount() {
  //   Axios.get('/agent')
  //     .then((res) => {
  //       console.log(res, 'ROUTER!');
  //       this.setState({
  //         agents: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }


  render() {
    const { agents } = this.props;
    return (
      <HashRouter>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/home" exact component={Home} />
          {agents.map((agent, i) => <Route key={i} path={`/${agent.name.replace(/ /g, '_')}`} component={Home} />)}
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
