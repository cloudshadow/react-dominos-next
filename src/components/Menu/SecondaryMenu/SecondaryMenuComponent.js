import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './secondaryMenu.scss';

export default class SecondaryMenuComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      currentMenu: '/menu/pizza'
    };
  }

  activeMenu(currentMenu) {
    this.setState({
      currentMenu
    });
  }

  render() {
    return (
      <div className="secondary-menu-container">
        <div className="menus-bg" />
        <div className="menus">
          <Link to="/menu/pizza" onClick={this.activeMenu.bind(this, '/menu/pizza')}>
            <span className={this.state.currentMenu === '/menu/pizza' ? 'menu active' : 'menu'}>Pizza</span>
          </Link>
          <Link to="/menu/rice" onClick={this.activeMenu.bind(this, '/menu/rice')}>
            <span className={this.state.currentMenu === '/menu/rice' ? 'menu active' : 'menu'}>Rice</span>
          </Link>
          <Link to="/menu/sidefood" onClick={this.activeMenu.bind(this, '/menu/sidefood')}>
            <span className={this.state.currentMenu === '/menu/sidefood' ? 'menu active' : 'menu'}>Side</span>
          </Link>
          <Link to="/menu/dessert" onClick={this.activeMenu.bind(this, '/menu/dessert')}>
            <span className={this.state.currentMenu === '/menu/dessert' ? 'menu active' : 'menu'}>Dessert</span>
          </Link>
          <Link to="/menu/drink" onClick={this.activeMenu.bind(this, '/menu/drink')}>
            <span className={this.state.currentMenu === '/menu/drink' ? 'menu active' : 'menu'}>Drink</span>
          </Link>
          <Link to="/menu/soup" onClick={this.activeMenu.bind(this, '/menu/soup')}>
            <span className={this.state.currentMenu === '/menu/soup' ? 'menu active' : 'menu'}>Soup</span>
          </Link>
          {
            //<Link to="/menu/combo"><span className={this.activeMenu('/menu/combo')}>Combo</span></Link>
          }
        </div>
      </div>
    );
  }
}

SecondaryMenuComponent.propTypes = {
};