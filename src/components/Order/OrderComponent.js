import React from 'react';
import PropTypes from 'prop-types';
import AddressComponent from './Address/AddressComponent';
import './order.scss';

export default class OrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderAddressComponent() {
    return (
      <AddressComponent
        getAddressBook={this.props.getAddressBook}
        userState={this.props.userState}
      />
    );
  }

  render() {
    return (
      <div className="container-fluid order-container">
        {this.props.userState && this.props.userState.user ? this.renderAddressComponent() : ''}
      </div>
    );
  }
}

OrderComponent.propTypes = {
  // cartActions: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
  getAddressBook: PropTypes.func.isRequired,
  userState: PropTypes.object.isRequired,
};