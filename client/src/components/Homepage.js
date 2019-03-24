/* eslint-disable prefer-const */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Axios from 'axios';
import DashboardChart from './DashboardChart';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agents: [],
      leads: [],
      chartData: [],
    };
  }


  componentWillMount() {
    Axios.get('/agent')
      .then((res) => {
        this.setState({
          agents: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.get('/investment')
      .then((res) => {
        this.setState({
          leads: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        // const { agents } = this.state;
        const agents = [
          { timestamp: 'Jan', transactions: 1 },
          { timestamp: 'Fed', transactions: 5 },
          { timestamp: 'Mar', transactions: 2 },
          { timestamp: 'Apr', transactions: 10 },
          { timestamp: 'May', transactions: 3 },
          { timestamp: 'Jun', transactions: 1 },
          { timestamp: 'Jul', transactions: 12 },
          { timestamp: 'Aug', transactions: 3 },
          { timestamp: 'Sep', transactions: 6 },
          { timestamp: 'Oct', transactions: 2 },
          { timestamp: 'Nov', transactions: 12 },
          { timestamp: 'Dec', transactions: 0 },
        ];
        let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let jan = 0;
        let feb = 0;
        let mar = 0;
        let apr = 0;
        let may = 0;
        let jun = 0;
        let jul = 0;
        let aug = 0;
        let sep = 0;
        let oct = 0;
        let nov = 0;
        let dec = 0;
        agents.map((agent) => {
          if (agent.timestamp.includes('Jan')) {
            jan += agent.transactions;
          }
          if (agent.timestamp.includes('Feb')) {
            feb += agent.transactions;
          }
          if (agent.timestamp.includes('Mar')) {
            mar += agent.transactions;
          }
          if (agent.timestamp.includes('Apr')) {
            apr += agent.transactions;
          }
          if (agent.timestamp.includes('May')) {
            may += agent.transactions;
          }
          if (agent.timestamp.includes('Jun')) {
            jun += agent.transactions;
          }
          if (agent.timestamp.includes('Jul')) {
            jul += agent.transactions;
          }
          if (agent.timestamp.includes('Aug')) {
            aug += agent.transactions;
          }
          if (agent.timestamp.includes('Sep')) {
            sep += agent.transactions;
          }
          if (agent.timestamp.includes('Oct')) {
            oct += agent.transactions;
          }
          if (agent.timestamp.includes('Nov')) {
            nov += agent.transactions;
          }
          if (agent.timestamp.includes('Dec')) {
            dec += agent.transactions;
          }
        });
        data[0] = jan;
        data[1] = feb;
        data[2] = mar;
        data[3] = apr;
        data[4] = may;
        data[5] = jun;
        data[6] = jul;
        data[7] = aug;
        data[8] = sep;
        data[9] = oct;
        data[10] = nov;
        data[11] = dec;
        this.setState({
          chartData: data,
        });
      });
  }

  totalTable() {
    const { agents, leads } = this.state;
    const totalTransactions = () => agents.reduce((total, trans) => total + trans.transactions, 0);
    const totalGross = () => agents.reduce((total, gross) => total + gross.grossIncome, 0);
    const totalGoals = () => agents.reduce((total, goals) => total + goals.goal, 0);
    const totalInvested = () => leads.reduce((total, gross) => total + gross.priceYearly, 0);
    return (
      <div id="total-container" className="bg-light border border-default alert alert-light container">
        <div className="row">

          <div id="lefttop" className="col-sm border-bottom border-default text-center">
            <p id="headingComp" className="font-weight-bold text-secondary">Transactions YTD</p>
            <br />
            <p className={totalTransactions() < totalGoals() ? 'h4 text-danger font-weight-bold' : 'h4 text-success font-weight-bold'}>{totalTransactions()}</p>
            <br />
          </div>

          <div id="righttop" className="col-sm text-center">
            <br />
            <p id="headingComp" className="font-weight-bold text-secondary">Total Gross (YTD)</p>
            <br />
            <p className={totalGross() < totalInvested() ? 'h4 text-danger font-weight-bold' : 'h4 text-success font-weight-bold'}>
              $
              {totalGross().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}

            </p>
          </div>
        </div>
      </div>

    );
  }

  agentTable() {
    const { agents } = this.state;
    return (
      <div id="table-container" className="container">
        <table className="table table-striped border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Agent</th>
              <th scope="col">Transactions YTD</th>
              <th scope="col">Total Gross</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((elem, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td><b><a className="text-dark" href="#/home">{elem.name}</a></b></td>
                <td className={elem.goal === elem.transactions ? 'text-warning' : elem.goal > elem.transactions ? 'text-danger' : 'text-success'}><b>{elem.transactions}</b></td>
                <td><b>{`$${elem.grossIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</b></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  leadTable() {
    const { leads } = this.state;
    return (
      <div id="table-container" className="container">
        <table className="table table-striped border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Lead / Investment</th>
              <th scope="col">Transactions YTD</th>
              <th scope="col">Total Gross</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((elem, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td><a className="text-dark" href="#/home"><b>{elem.company}</b></a></td>
                <td><b>{elem.transactions}</b></td>
                <td className={elem.priceYearly === elem.grossIncome ? 'text-warning' : elem.priceYearly > elem.grossIncome ? 'text-danger' : 'text-success'}><b>{`$${elem.grossIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</b></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  homePage() {
    const { chartData } = this.state;
    return (
      <div id="homePage">
        <div className="topFlex">
          <div className="chart">
            <DashboardChart chartData={chartData} />
          </div>
          <div className="totalsTable">
            <div className="totalsafety">
              {this.totalTable()}
            </div>
          </div>
        </div>

        <div className="tableFlex">
          {this.agentTable()}
          {this.leadTable()}
        </div>
      </div>
    );
  }


  render() {
    return (
      this.homePage()
    );
  }
}

export default Homepage;
