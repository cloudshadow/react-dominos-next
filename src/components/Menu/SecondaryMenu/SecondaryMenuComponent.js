import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';
import './secondaryMenu.scss';

export default class SecondaryMenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="secondary-menu-container">
        <div className="menus-bg" />
        <div className="menus">
          <Link to="/menu/pizza"><span className="menu">Pizza</span></Link>
          <Link to="/menu/rice"><span className="menu">Rice</span></Link>
          <Link to="/menu/food"><span className="menu">SideFood</span></Link>
          <Link to="/menu/dessert"><span className="menu">Dessert</span></Link>
          <Link to="/menu/drink"><span className="menu">Drink</span></Link>
          <Link to="/menu/soup"><span className="menu">Soup</span></Link>
          <Link to="/menu/combo"><span className="menu">Combo</span></Link>
        </div>
      </div>
    );
  }
}

SecondaryMenuComponent.propTypes = {
};