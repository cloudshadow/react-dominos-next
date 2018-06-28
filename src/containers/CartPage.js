import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cartActions';
import CartComponent from '../components/Cart/CartComponent';

export class CartPage extends React.Component {
  render() {
    return (
      <CartComponent
        getCart={this.props.cartActions.getCart}
        getSuggestionItems={this.props.cartActions.getSuggestionItems}
        cartState={this.props.cartState}
      />
    );
  }
}

CartPage.propTypes = {
  cartActions: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    cartState: state.cartState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);