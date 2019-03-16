/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  FaUserPlus, FaHome, FaTags, FaMoneyBillAlt, FaLandmark, FaHandHoldingUsd, FaDollarSign, FaDonate, FaCog, FaChevronDown, FaCaretDown, FaAngleDown, FaAddressBook, FaKey,
} from 'react-icons/fa';


class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
    };
  }

  setActive(e) {
    this.setState({
      active: e,
    });
  }

  sideNav() {
    const { active } = this.state;
    return (
      <nav id="sidenav" className="navbar navbar-dark col-md-2 bg-dark rounded-0">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className={`nav-link ${active === 'Home' ? 'text-warning' : 'text-light'}`} href="#/home" onClick={() => this.setActive('Home')}>
                <FaHome size={20} />
                {' '}
        Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle ${active === 'Agents' ? 'text-warning' : 'text-light'}`} data-toggle="dropdown" href="#/home" role="button" aria-haspopup="true" aria-expanded="false" onClick={() => this.setActive('Agents')}>
                <FaAddressBook size={20} id="icon" className={active === 'Agents' ? 'text-warning' : 'text-secondary'} />
                {' '}
          Agents
              </a>
              <div className="dropdown-menu bg-dark">
                <a className="dropdown-item text-light" href="#/home">Overview</a>
                <a className="dropdown-item text-light" href="#/home">Item 2</a>
                <a className="dropdown-item text-light" href="#/home">Item 3</a>
                <a className="dropdown-item text-light" href="#/home">Item 4</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item text-light" href="#/home">Seperate</a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle ${active === 'InvestmentDrop' ? 'text-warning' : 'text-light'}`} data-toggle="dropdown" href="#/home" role="button" aria-haspopup="true" aria-expanded="false" onClick={() => this.setActive('InvestmentDrop')}>
                <FaLandmark size={20} id="icon" className={active === 'InvestmentDrop' ? 'text-warning' : 'text-secondary'} />
                {' '}
          Investments
              </a>
              <div className="dropdown-menu bg-dark">
                <a className="dropdown-item text-light" href="#/home">Overview</a>
                <a className="dropdown-item text-light" href="#/home">Item 2</a>
                <a className="dropdown-item text-light" href="#/home">Item 3</a>
                <a className="dropdown-item text-light" href="#/home">Item 4</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item text-light" href="#/home">Seperate</a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#/home" onClick={() => this.setActive('Investment')}>
                <FaHandHoldingUsd size={30} id="icon" className={active === 'Investment' ? 'text-warning' : 'text-secondary'} />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#/home" onClick={() => this.setActive('New Agent')}>
                <FaUserPlus size={30} id="icon" className={active === 'New Agent' ? 'text-warning' : 'text-secondary'} />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#/home" onClick={() => this.setActive('Transaction')}>
                <FaMoneyBillAlt size={30} id="icon" className={active === 'Transaction' ? 'text-warning' : 'text-secondary'} />
              </a>
            </li>

            <li className="nav-item" />
          </ul>
        </div>
      </nav>
    );
  }

  render() {
    return (
      this.sideNav()
    );
  }
}

export default SideNav;
