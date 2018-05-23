import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
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
          <Route path="/menu/pizza" render={() => <PizzaComponent menuState={this.props.menuState} getPizzaMenu={this.props.getPizzaMenu} getPizzaOptions={this.props.getPizzaOptions} getPizzaDetail={this.props.getPizzaDetail} controlPizzaDialog={this.props.controlPizzaDialog} />} />
          <Route path="/menu/rice" render={() => <RiceComponent menuState={this.props.menuState} getRiceMenu={this.props.getRiceMenu} />} />
        </Switch>
      </div>
    );
  }
}

MenuComponent.propTypes = {
  menuState: PropTypes.object.isRequired,
  getPizzaMenu: PropTypes.func.isRequired,
  getPizzaOptions: PropTypes.func.isRequired,
  getPizzaDetail: PropTypes.func.isRequired,
  controlPizzaDialog: PropTypes.func.isRequired,
  getRiceMenu: PropTypes.func.isRequired,
};