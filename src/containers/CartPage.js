import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cartActions';
import * as menuActions from '../actions/menuActions';
import * as userActions from '../actions/userActions';
import CartComponent from '../components/Cart/CartComponent';

export class CartPage extends React.PureComponent {
  render() {
    return (
      <CartComponent
        getCart={this.props.cartActions.getCart}
        addItem={this.props.cartActions.addItem}
        updateCart={this.props.cartActions.updateCart}
        deleteItem={this.props.cartActions.deleteItem}
        cleanCart={this.props.cartActions.cleanCart}
        getSuggestionItems={this.props.cartActions.getSuggestionItems}
        goLogin={this.props.userActions.goLogin}
        cartState={this.props.cartState}
        menuState={this.props.menuState}
        userState={this.props.userState}
      />
    );
  }
}

CartPage.propTypes = {
  userActions: PropTypes.object.isRequired,
  userState: PropTypes.object.isRequired,
  cartActions: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
  menuActions: PropTypes.object.isRequired,
  menuState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    userState: state.userState,
    cartState: state.cartState,
    menuState: state.menuState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch),
    menuActions: bindActionCreators(menuActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);