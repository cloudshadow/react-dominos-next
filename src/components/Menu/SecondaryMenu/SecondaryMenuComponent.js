import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './secondaryMenu.scss';

export default class SecondaryMenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  activeMenu(pathname) {
    return window.location.pathname.includes(pathname) ? 'menu active' : 'menu';
  }

  render() {
    return (
      <div className="secondary-menu-container">
        <div className="menus-bg" />
        <div className="menus">
          <Link to="/menu/pizza"><span className={this.activeMenu('/menu/pizza')}>Pizza</span></Link>
          <Link to="/menu/rice"><span className={this.activeMenu('/menu/rice')}>Rice</span></Link>
          <Link to="/menu/sidefood"><span className={this.activeMenu('/menu/sidefood')}>SideFood</span></Link>
          <Link to="/menu/dessert"><span className={this.activeMenu('/menu/dessert')}>Dessert</span></Link>
          <Link to="/menu/drink"><span className={this.activeMenu('/menu/drink')}>Drink</span></Link>
          <Link to="/menu/soup"><span className={this.activeMenu('/menu/soup')}>Soup</span></Link>
          <Link to="/menu/combo"><span className={this.activeMenu('/menu/combo')}>Combo</span></Link>
        </div>
      </div>
    );
  }
}

SecondaryMenuComponent.propTypes = {
};