import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.logo = require('../../assets/images/logo.png');
  }

  componentDidMount() {
  }

  activeMenu(pathname) {
    if (pathname === '/') {
      return window.location.pathname === pathname ? 'nav-item active' : 'nav-item';
    } else {
      return window.location.pathname.includes(pathname) ? 'nav-item active' : 'nav-item';
    }
  }

  renderPage() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <img className="navbar-logo d-inline-block align-top" src={this.logo} />
          &nbsp;<span className="logo-text-red">Domino's</span> <span className="logo-text-blue">Pizza</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={this.activeMenu('/')}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={this.activeMenu('/menu')}>
              <Link className="nav-link" to="/menu/pizza">Menu</Link>
            </li>
            <li className={this.activeMenu('/promotion')}>
              <Link className="nav-link" to="/promotion">Promotion</Link>
            </li>
            <li className={this.activeMenu('/story')}>
              <Link className="nav-link" to="/story">Story</Link>
            </li>
            <li className={this.activeMenu('/stores')}>
              <Link className="nav-link" to="/stores">Stores</Link>
            </li>
            <li className={this.activeMenu('/member')}>
              <Link className="nav-link" to="/member">Member</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#"><span className="oi oi-cart" /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Join / Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

NavbarComponent.propTypes = {
  // getTitle: PropTypes.func.isRequired,
  // homeState: PropTypes.object.isRequired,
};