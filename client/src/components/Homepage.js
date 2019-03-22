/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Axios from 'axios';


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
              {/* <th scope="col">Lead/Investment</th>
              <th scope="col">Transaction YTD</th> */}
            </tr>
          </thead>
          <tbody>
            {agents.map((elem, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td><b>{elem.name}</b></td>
                <td className={elem.goal === elem.transactions ? 'text-success' : elem.goal > elem.transactions ? 'text-danger' : 'text-success'}><b>{elem.transactions}</b></td>
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
                <td className={elem.priceYearly > elem.grossIncome ? 'text-danger' : 'text-success'}><b>{`$${elem.grossIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</b></td>
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
