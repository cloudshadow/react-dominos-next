import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';
import SecondaryMenuComponent from './SecondaryMenu/SecondaryMenuComponent'
import PizzaComponent from './Pizza/PizzaComponent';
import RiceComponent from './Rice/RiceComponent';
import './menu.scss';

export default class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <SecondaryMenuComponent />
        <Switch>
          <Route path="/menu/pizza" render={() => <PizzaComponent menuState={this.props.menuState} getPizzaMenu={this.props.getPizzaMenu} />} />
          <Route path="/menu/rice" render={() => <RiceComponent />} />
        </Switch>
      </div>
    );
  }
}

MenuComponent.propTypes = {
  menuState: PropTypes.object.isRequired,
  getPizzaMenu: PropTypes.func.isRequired,
};