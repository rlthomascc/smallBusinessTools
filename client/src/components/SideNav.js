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
  sideNav() {
    return (
      <nav id="sidenav" className="navbar navbar-dark col-md-2 bg-dark rounded-0">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <p className="h3 text-warning">
              <FaKey size={50} />
            </p>
            <li className="nav-item">
              <a className="nav-link text-warning" href="#">
                <FaHome size={20} />
                {' '}
        Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" data-toggle="dropdown" href="#/home" role="button" aria-haspopup="true" aria-expanded="false">
                <FaAddressBook size={20} id="icon" className="text-secondary" />
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
              <a className="nav-link dropdown-toggle text-light" data-toggle="dropdown" href="#/home" role="button" aria-haspopup="true" aria-expanded="false">
                <FaLandmark size={20} id="icon" className="text-secondary" />
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
              <a className="nav-link text-light" href="#/home">
                <FaHandHoldingUsd size={30} id="icon" className="text-secondary" />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light" href="#/home">
                <FaUserPlus size={30} id="icon" className="text-secondary" />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light" href="#/home">
                <FaMoneyBillAlt size={30} id="icon" className="text-secondary" />
              </a>
            </li>

            <li className="nav-item">
              {/* <a className="nav-link text-danger" href="#" onClick={this.props.logout.bind(this)}>
        Log Out
              </a> */}
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
