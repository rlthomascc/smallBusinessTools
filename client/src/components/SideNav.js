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
    };
  }

  setActive(e) {
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

  popUp() {
    console.log('pop up');
    return (
      <div>
        <p>TESTING</p>
      </div>
    );
  }

  sideNav() {
    const { active } = this.state;
    return (
    // <nav id="sidenav" className="navbar navbar-dark col-md-2 bg-dark rounded-0">
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
            <a className={`nav-link dropdown-toggle ${active === 'Agents' ? 'text-danger' : 'text-secondary'}`} data-toggle="dropdown" href="#/home" role="button" aria-haspopup="true" aria-expanded="false" onClick={() => this.setActive('Agents')}>
              <FaAddressBook size={20} id="icon" className={active === 'Agents' ? 'text-danger' : 'text-secondary'} />
              {' '}
        Agents
            </a>
            <div className="dropdown-menu bg-light">
              <a className="dropdown-item text-secondary" href="#/home">Overview</a>
              <a className="dropdown-item text-secondary" href="#/home">Item 2</a>
              <a className="dropdown-item text-secondary" href="#/home">Item 3</a>
              <a className="dropdown-item text-secondary" href="#/home">Item 4</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item text-secondary" href="#/home">Seperate</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle ${active === 'InvestmentDrop' ? 'text-danger' : 'text-secondary'}`} data-toggle="dropdown" href="#/home" role="button" aria-haspopup="true" aria-expanded="false" onClick={() => this.setActive('InvestmentDrop')}>
              <FaLandmark size={20} id="icon" className={active === 'InvestmentDrop' ? 'text-danger' : 'text-secondary'} />
              {' '}
        Investments
            </a>
            <div className="dropdown-menu bg-light">
              <a className="dropdown-item text-secondary" href="#/home">Overview</a>
              <a className="dropdown-item text-secondary" href="#/home">Item 2</a>
              <a className="dropdown-item text-secondary" href="#/home">Item 3</a>
              <a className="dropdown-item text-secondary" href="#/home">Item 4</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item text-secondary" href="#/home">Seperate</a>
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
          <div>
            <Transaction />
            <a onClick={() => this.closeTransaction()}>Close</a>
          </div>
        </Modal>

        <Modal
          visible={this.state.agentModal}
          effect="fadeInUp"
          onClickAway={() => this.closeAgent()}
        >
          <div>
            <Agent />
            <a onClick={() => this.closeAgent()}>Close</a>
          </div>
        </Modal>

        <Modal
          visible={this.state.investmentModal}
          effect="fadeInUp"
          onClickAway={() => this.closeInvestment()}
        >
          <div>
            <Investment />
            <a onClick={() => this.closeInvestment()}>Close</a>
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
