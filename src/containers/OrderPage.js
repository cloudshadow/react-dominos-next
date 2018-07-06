import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cartActions';
import * as userActions from '../actions/userActions';
import OrderComponent from '../components/Order/OrderComponent';

export class OrderPage extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.userState.user ?
            <OrderComponent
              cartState={this.props.cartState}
              getCart={this.props.cartActions.getCart}
              userState={this.props.userState}
              getAddressBook={this.props.userActions.getAddressBook}
              menuState={this.props.menuState}
            />
            :
            ''
        }
      </div>
    );
  }
}

OrderPage.propTypes = {
  cartActions: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  userState: PropTypes.object.isRequired,
  menuState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    cartState: state.cartState,
    userState: state.userState,
    menuState: state.menuState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPage);