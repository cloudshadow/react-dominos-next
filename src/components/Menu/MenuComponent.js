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
              cartState={this.props.cartState}
              getPizzaMenu={this.props.getPizzaMenu}
              getPizzaOptions={this.props.getPizzaOptions}
              getPizzaDetail={this.props.getPizzaDetail}
              controlPizzaDialog={this.props.controlPizzaDialog}
              addItem={this.props.addItem}
              hideMessageDialog={this.props.hideMessageDialog}
            />}
          />
          <Route path="/menu/rice" render={() =>
            <RiceComponent
              menuState={this.props.menuState}
              cartState={this.props.cartState}
              getRiceMenu={this.props.getRiceMenu}
              addItem={this.props.addItem}
              hideMessageDialog={this.props.hideMessageDialog}
            />}
          />
          <Route path="/menu/sidefood" render={() =>
            <SideComponent
              menuState={this.props.menuState}
              cartState={this.props.cartState}
              getSideMenu={this.props.getSideMenu}
              addItem={this.props.addItem}
              hideMessageDialog={this.props.hideMessageDialog}
            />}
          />
          <Route path="/menu/dessert" render={() =>
            <DessertComponent
              menuState={this.props.menuState}
              cartState={this.props.cartState}
              getDessertMenu={this.props.getDessertMenu}
              addItem={this.props.addItem}
              hideMessageDialog={this.props.hideMessageDialog}
            />}
          />
          <Route path="/menu/drink" render={() =>
            <DrinkComponent
              menuState={this.props.menuState}
              cartState={this.props.cartState}
              getDrinkMenu={this.props.getDrinkMenu}
              addItem={this.props.addItem}
              hideMessageDialog={this.props.hideMessageDialog}
            />}
          />
          <Route path="/menu/soup" render={() =>
            <SoupComponent
              menuState={this.props.menuState}
              cartState={this.props.cartState}
              getSoupMenu={this.props.getSoupMenu}
              addItem={this.props.addItem}
              hideMessageDialog={this.props.hideMessageDialog}
            />}
          />
          <Route path="/menu/combo" render={() =>
            <ComboComponent
              menuState={this.props.menuState}
              cartState={this.props.cartState}
              getComboMenu={this.props.getComboMenu}
              addItem={this.props.addItem}
              hideMessageDialog={this.props.hideMessageDialog}
            />}
          />
        </Switch>
      </div>
    );
  }
}

MenuComponent.propTypes = {
  menuState: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
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
  addItem: PropTypes.func.isRequired,
  hideMessageDialog: PropTypes.func.isRequired,
};