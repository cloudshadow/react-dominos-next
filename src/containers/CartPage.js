import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cartActions';
import * as menuActions from '../actions/menuActions';
import CartComponent from '../components/Cart/CartComponent';

export class CartPage extends React.Component {
  render() {
    return (
      <CartComponent
        getCart={this.props.cartActions.getCart}
        addItem={this.props.cartActions.addItem}
        updateCart={this.props.cartActions.updateCart}
        deleteItem={this.props.cartActions.deleteItem}
        cleanCart={this.props.cartActions.cleanCart}
        getSuggestionItems={this.props.cartActions.getSuggestionItems}
        cartState={this.props.cartState}
        menuState={this.props.menuState}
      />
    );
  }
}

CartPage.propTypes = {
  cartActions: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
  menuActions: PropTypes.object.isRequired,
  menuState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    cartState: state.cartState,
    menuState: state.menuState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch),
    menuActions: bindActionCreators(menuActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);