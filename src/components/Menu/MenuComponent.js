import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import SecondaryMenuComponent from './SecondaryMenu/SecondaryMenuComponent'
import PizzaComponent from './Pizza/PizzaComponent';
import RiceComponent from './Rice/RiceComponent';
import SideComponent from './Side/SideComponent';
import DessertComponent from './Dessert/DessertComponent';
import DrinkComponent from './Drink/DrinkComponent';
import SoupComponent from './Soup/SoupComponent';
import ComboComponent from './Combo/ComboComponent';
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
          <Route path="/menu/pizza" render={() =>
            <PizzaComponent
              menuState={this.props.menuState}
              getPizzaMenu={this.props.getPizzaMenu}
              getPizzaOptions={this.props.getPizzaOptions}
              getPizzaDetail={this.props.getPizzaDetail}
              controlPizzaDialog={this.props.controlPizzaDialog}
            />}
          />
          <Route path="/menu/rice" render={() =>
            <RiceComponent
              menuState={this.props.menuState}
              getRiceMenu={this.props.getRiceMenu}
            />}
          />
          <Route path="/menu/sidefood" render={() =>
            <SideComponent
              menuState={this.props.menuState}
              getSideMenu={this.props.getSideMenu}
            />}
          />
          <Route path="/menu/dessert" render={() =>
            <DessertComponent
              menuState={this.props.menuState}
              getDessertMenu={this.props.getDessertMenu}
            />}
          />
          <Route path="/menu/drink" render={() =>
            <DrinkComponent
              menuState={this.props.menuState}
              getDrinkMenu={this.props.getDrinkMenu}
            />}
          />
          <Route path="/menu/soup" render={() =>
            <SoupComponent
              menuState={this.props.menuState}
              getSoupMenu={this.props.getSoupMenu}
            />}
          />
          <Route path="/menu/combo" render={() =>
            <ComboComponent
              menuState={this.props.menuState}
              getComboMenu={this.props.getComboMenu}
            />}
          />
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
  getSideMenu: PropTypes.func.isRequired,
  getDessertMenu: PropTypes.func.isRequired,
  getDrinkMenu: PropTypes.func.isRequired,
  getSoupMenu: PropTypes.func.isRequired,
  getComboMenu: PropTypes.func.isRequired,
};