import React from 'react';
import PropTypes from 'prop-types';
import './address.scss';

export default class AddressComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      model: 'delivery',
      selectedAddress: null,
    };
  }

  componentDidMount() {
    this.props.getAddressBook(this.props.userState.user);
  }

  handleTabClick(model) {
    this.setState({ model });
  }

  handleAddressClick(selectedAddress) {
    this.setState({ selectedAddress });
  }

  renderAddressBookList() {
    let selectedAddress = this.state.selectedAddress || this.props.userState.addressBook.find(address => {
      return address.default;
    });

    return (
      <div>
        <div className="row">
          <div className="col-sm-12 title">
            Customer Info
          </div>
        </div>
        {this.props.userState.addressBook.map(address => {
          return (
            <div className="row address-row" key={address.id}>
              <div className={'col-sm-2 name' + (selectedAddress.id === address.id ? ' selected' : '')} onClick={this.handleAddressClick.bind(this, address)}>
                {address.name}
              </div>
              <div className="col-sm-6 address">
                {address.city + ' ' + address.district + ' ' + address.road + ' ' + address.address + ' '}
              </div>
              <div className="col-sm-4 option">
                {address.default ? '' : <span className="option-btn">Set Default</span>}
                <span className="option-btn">Edit</span>
                <span className="option-btn">Delete</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  renderEmptyAddressBook() {

  }

  render() {
    return (
      <div className="row address-container">
        <div className="col-sm-8 offset-sm-2 col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item delivery-tab" onClick={this.handleTabClick.bind(this, 'delivery')}>
              <span className={this.state.model === 'delivery' ? 'nav-link active' : 'nav-link'}>Delivery</span>
            </li>
            <li className="nav-item carry-out-tab" onClick={this.handleTabClick.bind(this, 'carryout')}>
              <span className={this.state.model === 'carryout' ? 'nav-link active' : 'nav-link'}>Carry Out</span>
            </li>
          </ul>
          <div className="form-wrapper">
            {this.props.userState.addressBook && this.props.userState.addressBook.length > 0 ? this.renderAddressBookList() : this.renderEmptyAddressBook()}
          </div>
        </div>

      </div>
    );
  }
}

AddressComponent.propTypes = {
  getAddressBook: PropTypes.func.isRequired,
  userState: PropTypes.object.isRequired,
};