import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.logo = require('../../assets/images/logo.png');
    this.state = {
      dropDownShow: false,
      mobileMenuShow: false,
      current: window.location.pathname,
    };
  }

  componentDidMount() {
    !this.props.userState.user && localStorage.user ? this.props.reloadAuth() : '';
    !this.props.menuState.pizzaOptions ? this.props.getPizzaOptions() : '';
  }

  activeMenu(pathname) {
    this.setState({
      current: pathname
    });
  }

  handleDropDownClick() {
    this.setState({
      dropDownShow: !this.state.dropDownShow
    });
  }

  handleMobileMenuClick() {
    this.setState({
      mobileMenuShow: !this.state.mobileMenuShow
    });
  }

  handleSignOutClick() {
    this.props.logout();
  }

  handleGoLoginClick() {
    this.props.goLogin('/member/home');
  }

  renderPage() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <img className="navbar-logo d-inline-block align-top" src={this.logo} />
          &nbsp;<span className="logo-text-red">Domino's</span> <span className="logo-text-blue">Pizza</span>
        </Link>
        <button className="navbar-toggler" type="button" onClick={this.handleMobileMenuClick.bind(this)} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className={'collapse navbar-collapse ' + (this.state.mobileMenuShow ? 'show' : '')} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={this.state.current === '/' ? 'nav-item active' : 'nav-item'} onClick={this.activeMenu.bind(this, '/')}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={this.state.current.includes('/menu') ? 'nav-item active' : 'nav-item'} onClick={this.activeMenu.bind(this, '/menu')}>
              <Link className="nav-link" to="/menu/pizza">Menu</Link>
            </li>
            <li className={this.state.current === '/promotion' ? 'nav-item active' : 'nav-item'} onClick={this.activeMenu.bind(this, '/promotion')}>
              <Link className="nav-link" to="/promotion">Promotion</Link>
            </li>
            {/*
            <li className={this.activeMenu('/story')}>
              <Link className="nav-link" to="/story">Story</Link>
            </li>
            <li className={this.activeMenu('/stores')}>
              <Link className="nav-link" to="/stores">Stores</Link>
            </li>
            */}
            <li className={this.state.current === '/member/home' ? 'nav-item active' : 'nav-item'} onClick={this.activeMenu.bind(this, '/member/home')}>
              {this.props.userState.user ? <Link className="nav-link" to="/member/home">Member</Link> : <a href="javascript:;" className="nav-link" onClick={this.handleGoLoginClick.bind(this)}>Order</a>}
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <span className="oi oi-cart" />
                <span className="cart-count">{this.props.cartState.items && this.props.cartState.items.length > 0 ? this.props.cartState.items.length : ''}</span>
              </Link>
            </li>
            {
              this.props.userState.user
                ?
                <li className={'nav-item dropdown ' + (this.state.dropDownShow ? 'show' : '')}>
                  <a className="nav-link dropdown-toggle" href="javascript:;" onClick={this.handleDropDownClick.bind(this)} role="button" aria-haspopup="true" aria-expanded={this.state.dropDownShow ? 'true' : 'false'}>
                    {this.props.userState.user.name}
                  </a>
                  <div className={'dropdown-menu dropdown-menu-right ' + (this.state.dropDownShow ? 'show' : '')} onClick={this.handleDropDownClick.bind(this)} aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/member/home">Member</Link>
                    <a className="dropdown-item" href="javascript:;" onClick={this.handleSignOutClick.bind(this)}>Sign Out</a>
                  </div>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
            }
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
  userState: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
  menuState: PropTypes.object.isRequired,
  goLogin: PropTypes.func.isRequired,
  reloadAuth: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  getPizzaOptions: PropTypes.func.isRequired,
};