import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../actions/orderActions';
import OrderComponent from '../components/Order/OrderComponent';

export class OrderPage extends React.Component {
  render() {
    return (
      <OrderComponent />
    );
  }
}

OrderPage.propTypes = {
  orderActions: PropTypes.object.isRequired,
  orderState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    orderState: state.orderState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    orderActions: bindActionCreators(orderActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPage);