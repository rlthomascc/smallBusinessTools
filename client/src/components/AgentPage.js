/* eslint-disable prefer-const */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import AgentChart from '../charts/AgentChart';


class AgentPage extends Component {
  constructor(props) {
    super(props);
  }

  agentTop() {
    console.log(this.props, 'AGENT');
    const { agents, transactions } = this.props;
    const getImage = () => (agents.length > 0 ? agents[0].image.substring(11) : []);
    const getName = () => (agents.length > 0 ? agents[0].name : []);
    const getTransactions = () => (agents.length > 0 ? agents[0].transactions : []);
    const getSplit = () => (agents.length > 0 ? `${agents[0].split}%` : []);
    const getYTD = () => {
      let ytd = 0;
      if (transactions.length > 0) {
        transactions.map((trans, i) => {
          if (trans.agent === 'Carlos') {
            ytd += trans.commission;
          }
        });
        return `$${ytd.toLocaleString()}`;
      }
    };
    console.log(getYTD(), 'ytd');
    return (
      <div id="homePage">
        <div className="d-flex flex-row">
          <div className="p-2">
            <img alt="portrait" src={getImage()} width="150" className="rounded-circle" />
          </div>
          <div className="p-2">
            <br />
            <p className="font-weight-bold h4">{getName()}</p>
            <br />
            <p className="font-weight-bold h5">
            YTD:
              {' '}
              {getYTD()}
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
      </div>
    );
  }

  agent() {
    const { chartData } = this.state;
    return (
      <div className="agentPage" id="homePage">
        <AgentChart chartData={chartData} />
        {/* {this.agentTop} */}
      </div>
    );
  }

  render() {
    return (
      this.agentTop()
    );
  }
}

export default AgentPage;
