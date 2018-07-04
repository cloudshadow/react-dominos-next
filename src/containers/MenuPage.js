import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from '../actions/menuActions';
import * as cartActions from '../actions/cartActions';
import MenuComponent from '../components/Menu/MenuComponent';

export class MenuPage extends React.Component {
  render() {
    return (
      <MenuComponent
        menuState={this.props.menuState}
        cartState={this.props.cartState}
        getPizzaMenu={this.props.menuActions.getPizzaMenu}
        getPizzaOptions={this.props.menuActions.getPizzaOptions}
        getPizzaDetail={this.props.menuActions.getPizzaDetail}
        controlPizzaDialog={this.props.menuActions.controlPizzaDialog}
        getRiceMenu={this.props.menuActions.getRiceMenu}
        getSideMenu={this.props.menuActions.getSideMenu}
        getDessertMenu={this.props.menuActions.getDessertMenu}
        getDrinkMenu={this.props.menuActions.getDrinkMenu}
        getSoupMenu={this.props.menuActions.getSoupMenu}
        getComboMenu={this.props.menuActions.getComboMenu}
        addItem={this.props.cartActions.addItem}
        hideMessageDialog={this.props.cartActions.hideMessageDialog}
      />
    );
  }
}

MenuPage.propTypes = {
  menuActions: PropTypes.object.isRequired,
  menuState: PropTypes.object.isRequired,
  cartActions: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    menuState: state.menuState,
    cartState: state.cartState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    menuActions: bindActionCreators(menuActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuPage);