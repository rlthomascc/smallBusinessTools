/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  FaUserPlus, FaHome, FaTags, FaMoneyBillAlt, FaLandmark, FaHandHoldingUsd, FaDollarSign, FaDonate, FaCog, FaChevronDown, FaCaretDown, FaAngleDown, FaAddressBook, FaKey,
} from 'react-icons/fa';


class SideNav extends Component {
  sideNav() {
    return (
      <nav id="sidenav" className="bg-light col-md-2 d-none d-md-block sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column text-center">
            <p className="h3 text-center text-warning">
              <FaKey size={50} />
            </p>
            <li className="nav-item">
              <a className="nav-link active text-primary" href="#">
                <FaHome size={20} />
                {' '}
        Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-secondary" data-toggle="dropdown" href="#/home" role="button" aria-haspopup="true" aria-expanded="false">
                <FaAddressBook size={20} />
                {' '}
          Agents
              </a>
              <div className="dropdown-menu text-center bg-light">
                <a className="dropdown-item" href="#/home">Overview</a>
                <a className="dropdown-item" href="#/home">Item 2</a>
                <a className="dropdown-item" href="#/home">Item 3</a>
                <a className="dropdown-item" href="#/home">Item 4</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#/home">Seperate</a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-secondary" data-toggle="dropdown" href="#/home" role="button" aria-haspopup="true" aria-expanded="false">
                <FaLandmark size={20} />
                {' '}
          Investments
              </a>
              <div className="dropdown-menu text-center bg-light">
                <a className="dropdown-item" href="#/home">Overview</a>
                <a className="dropdown-item" href="#/home">Item 2</a>
                <a className="dropdown-item" href="#/home">Item 3</a>
                <a className="dropdown-item" href="#/home">Item 4</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#/home">Seperate</a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link text-secondary" href="#/home">
                <FaHandHoldingUsd size={30} />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-secondary" href="#/home">
                <FaUserPlus size={30} />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-secondary" href="#/home">
                <FaMoneyBillAlt size={30} />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-danger" href="#" onClick={this.props.logout.bind(this)}>
        Log Out
              </a>
            </li>
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
