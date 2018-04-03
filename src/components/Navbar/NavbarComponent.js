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
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Promotion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Story</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Stores</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Member</a>
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