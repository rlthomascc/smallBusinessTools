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
    };
  }


  componentWillMount() {
    Axios.get('/agent')
      .then((res) => {
        console.log(res.data);
        this.setState({
          agents: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    Axios.get('/investment')
      .then((res) => {
        console.log(res.data);
        this.setState({
          leads: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  totalTable() {
    const { agents, leads } = this.state;
    const totalTransactions = () => agents.reduce((total, trans) => total + trans.transactions, 0);
    const totalGross = () => agents.reduce((total, gross) => total + gross.grossIncome, 0);
    const totalGoals = () => agents.reduce((total, goals) => total + goals.goal, 0);
    const totalInvested = () => leads.reduce((total, gross) => total + gross.priceYearly, 0);
    return (
      <div id="total-container" className="col-lg-3 bg-light border border-default alert alert-light container">
        <div className="row">

          <div id="lefttop" className="col-sm border-bottom border-default text-center">
            <p id="headingComp" className="font-weight-bold text-secondary">Total Transactions</p>
            <br />
            <p className={totalTransactions() < totalGoals() ? 'h4 text-danger font-weight-bold' : 'h4 text-success font-weight-bold'}>{totalTransactions()}</p>
            <br />
          </div>

          <div id="righttop" className="col-sm text-center">
            <br />
            <p id="headingComp" className="font-weight-bold text-secondary">Total Gross</p>
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
      <div className="container">
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
                <td><b>{elem.name}</b></td>
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
      <div className="container">
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
                <td><b>{elem.company}</b></td>
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
    return (
      <div id="homePage">
        <DashboardChart />
        {this.totalTable()}
        {this.agentTable()}
        {this.leadTable()}
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
