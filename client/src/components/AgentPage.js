/* eslint-disable prefer-const */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import axios from 'axios';
import TopNav from './TopNav';
import SideNav from './SideNav';
import { getFromStorage } from '../../utils/storage';
// import { timingSafeEqual } from 'crypto';
// import AgentChart from '../charts/AgentChart';


class AgentPage extends Component {
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

  agentTop() {
    const { agents, transactions } = this.state;
    // console.log(agents, 'AGENTS', transactions, 'TRANSACTIONS');
    const getImage = () => (agents.length > 0 ? agents[0].image.substring(11) : []);
    const getName = () => (agents.length > 0 ? agents[0].name : []);
    const getTransactions = () => (agents.length > 0 ? agents[0].transactions : []);
    const getSplit = () => (agents.length > 0 ? `${agents[0].split}%` : []);
    // const getYTD = () => {
    //   let ytd = 0;
    //   if (transactions.length > 0) {
    //     transactions.map((trans, i) => {
    //       if (trans.agent === 'Carlos') {
    //         ytd += trans.commission;
    //       }
    //     });
    //     return `$${ytd.toLocaleString()}`;
    //   }
    // };
    return (
      <div>
        <div className="d-flex flex-row">
          <div className="p-2">
            <img alt="portrait" src="https://randomuser.me/api/portraits/men/27.jpg" width="150" className="rounded-circle" />
            {/* <img alt="portrait" src={getImage()} width="150" className="rounded-circle" /> */}
          </div>
          <div className="p-2">
            <br />
            <p className="font-weight-bold h4">{getName()}</p>
            <br />
            <p className="font-weight-bold h5">
            YTD:
              {' '}
              $100,000
              {' '}
            | Transactions:
              {' '}
              {getTransactions()}
              {' '}
            | Split:
              {' '}
              {getSplit()}
            </p>
          </div>
        </div>
        <br />
        <div className="d-flex flex-row">
          <p>Brief description about the person goes here: </p>
        </div>
      </div>
    );
  }

  agentTable() {
    return (
      <div className="container col-sm-12">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Address</th>
              <th scope="col">Total Price</th>
              <th scope="col">To Self</th>
              <th scope="col">To DRG</th>
              <th scope="col">Side</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2099 Brennan Ln.</td>
              <td>$250,000</td>
              <td>$4000</td>
              <td>$4000</td>
              <td>Buyer</td>
              <td>Sun Mar 24 2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  totalAgent() {
    const { agents, transactions } = this.props;
    const getTransactions = () => (agents.length > 0 ? agents[0].transactions : []);
    const getYTD = () => {
      let ytd = 0;
      if (transactions.length > 0) {
        transactions.map((trans, i) => {
          if (trans.agent === 'Carlos') {
            ytd += trans.commission;
          }
        });
      }
    };
    return (
      <div className="bg-light border border-default alert alert-light col-sm-3">
        <h1>TEST</h1>
      </div>
    );
  }

  agent() {
    return (
      <div id="homePage" className="agentPage">
        {this.agentTop()}
        {this.agentTable()}
        {this.totalAgent()}
      </div>
    );
  }

  render() {
    return (
      <div>
        <SideNav logout={this.logout} />
        <TopNav logout={this.logout} />
        {this.agent()}
      </div>
    );
  }
}

export default AgentPage;
