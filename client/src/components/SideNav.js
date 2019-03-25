/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  FaUserPlus, FaHome, FaTags, FaMoneyBillAlt, FaLandmark, FaHandHoldingUsd, FaDollarSign, FaDonate, FaCog, FaChevronDown, FaCaretDown, FaAngleDown, FaAddressBook, FaKey,
} from 'react-icons/fa';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import Transaction from '../modals/Transaction';
import Agent from '../modals/Agent';
import Investment from '../modals/Investment';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      transactionModal: false,
      agentModal: false,
      investmentModal: false,
      agents: [],
      investment: [],
    };
  }

  componentWillMount() {
    axios.get('/agent')
      .then((res) => {
        this.setState({
          agents: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get('/investment')
      .then((res) => {
        this.setState({
          investment: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setActive(e) {
    this.setState({
      active: e,
    });
  }

  setActiveDrop(e) {
    this.setState({
      active: e,
    });
  }

  openAgent(e) {
    console.log('open');
    this.setState({
      agentModal: true,
      active: e,
    });
  }

  closeAgent() {
    console.log('close');
    this.setState({ agentModal: false });
  }

  openTransaction(e) {
    console.log('open');
    this.setState({
      transactionModal: true,
      active: e,
    });
  }

  closeTransaction() {
    console.log('close');
    this.setState({ transactionModal: false });
  }

  openInvestment(e) {
    console.log('open');
    this.setState({
      investmentModal: true,
      active: e,
    });
  }

  closeInvestment() {
    console.log('close');
    this.setState({ investmentModal: false });
  }

  sideNav() {
    const { active, agents, investment } = this.state;
    return (
      <div className="sidenav sidebar-sticky navbar navbar-light rounded-0 border">

        <ul className="nav flex-column">
          <li className="nav-item">
            <a className={`nav-link ${active === 'Home' ? 'text-danger' : 'text-secondary'}`} href="#/home" onClick={() => this.setActive('Home')}>
              <FaHome size={22} id="icon" className={active === 'Home' ? 'text-danger' : 'text-secondary'} />
              {' '}
      Home
            </a>
          </li>

          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle ${active === 'Agents' ? 'text-danger' : 'text-secondary'}`} data-toggle="dropdown" href="#/home" role="button" aria-haspopup="true" aria-expanded="false" onClick={() => this.setActiveDrop('Agents')}>
              <FaAddressBook size={20} id="icon" className={active === 'Agents' ? 'text-danger' : 'text-secondary'} />
              {' '}
        Agents
            </a>
            <div className="dropdown-menu bg-light">
              <a className="dropdown-item text-secondary" href="#/home">Overview</a>
              {agents.map((elem, i) => <a className="dropdown-item text-secondary" key={i} href={`#/${elem.name.replace(/ /g, '_')}`} onClick={() => changeView(elem.name)}>{elem.name}</a>)}
              {/* <div className="dropdown-divider" />
              <a className="dropdown-item text-secondary" href="#/home">Seperate</a> */}
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle ${active === 'InvestmentDrop' ? 'text-danger' : 'text-secondary'}`} data-toggle="dropdown" href="#/home" role="button" aria-haspopup="true" aria-expanded="false" onClick={() => this.setActiveDrop('InvestmentDrop')}>
              <FaLandmark size={20} id="icon" className={active === 'InvestmentDrop' ? 'text-danger' : 'text-secondary'} />
              {' '}
        Investments
            </a>
            <div className="dropdown-menu bg-light">
              <a className="dropdown-item text-secondary" href="#/home">Overview</a>
              {investment.map((elem, i) => <a className="dropdown-item text-secondary" key={i} href="#/home" onClick={() => changeView(elem.company)}>{elem.company}</a>)}
            </div>
          </li>

          <li className="nav-item">
            <a className={`nav-link ${active === 'Investment' ? 'text-danger' : 'text-secondary'}`} href="#/home" onClick={() => this.openInvestment('Investment')}>
              <FaHandHoldingUsd id="icon" size={25} id="icon" className={active === 'Investment' ? 'text-danger' : 'text-secondary'} />
              {' '}
              Add Investment
            </a>
          </li>

          <li className="nav-item">
            <a className={`nav-link ${active === 'New Agent' ? 'text-danger' : 'text-secondary'}`} href="#/home" onClick={() => this.openAgent('New Agent')}>
              <FaUserPlus id="icon" size={25} id="icon" className={active === 'New Agent' ? 'text-danger' : 'text-secondary'} />
              {' '}
              Add Agent
            </a>
          </li>

          <li className="nav-item">
            <a className={`nav-link ${active === 'Transaction' ? 'text-danger' : 'text-secondary'}`} href="#/home" onClick={() => this.openTransaction('Transaction')}>
              <FaMoneyBillAlt id="icon" size={25} id="icon" className={active === 'Transaction' ? 'text-danger' : 'text-secondary'} />
              {' '}
              Add Transaction
            </a>
          </li>

          <li className="nav-item" />
        </ul>
        <Modal
          visible={this.state.transactionModal}
          effect="fadeInUp"
          onClickAway={() => this.closeTransaction()}
        >
          <div id="Modal">
            <Transaction close={this.closeTransaction.bind(this)} />
            <a className="text-center text-danger" onClick={() => this.closeTransaction()}>Close</a>
          </div>
        </Modal>

        <Modal
          visible={this.state.agentModal}
          effect="fadeInUp"
          onClickAway={() => this.closeAgent()}
        >
          <div id="Modal">
            <Agent close={this.closeAgent.bind(this)} />
            <a className="text-center text-danger" onClick={() => this.closeAgent()}>Close</a>
          </div>
        </Modal>

        <Modal
          visible={this.state.investmentModal}
          effect="fadeInUp"
          onClickAway={() => this.closeInvestment()}
        >
          <div id="Modal">
            <Investment close={this.closeTransaction.bind(this)} />
            <a className="text-center text-danger" onClick={() => this.closeInvestment()}>Close</a>
          </div>
        </Modal>
      </div>
    );
  }

  render() {
    return (
      this.sideNav()
    );
  }
}

export default SideNav;
