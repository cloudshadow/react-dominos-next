import React from 'react';
import PropTypes from 'prop-types';
import ListComponent from './List/ListComponent';
import './order.scss';

export default class OrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      model: 'carryout', //delivery
      time: 'now',
      selectedAddress: null,
      deliveryTime: new Date().getTime() + 30 * 60 * 1000,
    };
  }

  componentDidMount() {
    this.props.getAddressBook(this.props.userState.user);
    this.props.getCart();
  }

  handleTabClick(model) {
    this.setState({ model });
  }

  handleAddressClick(selectedAddress) {
    this.setState({ selectedAddress });
  }

  handleTimeChange(event) {
    this.setState(
      {
        time: event.target.value
      }
    );
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

  renderCarryOut() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <label >City</label>
          <select className="form-control">
            <option value="shanghai">shanghai</option>
          </select>
        </div>
        <div className="col-sm-12">
          <label >District</label>
          <select className="form-control">
            <option value="huangpu">huangpu</option>
          </select>
        </div>
        <div className="col-sm-12">
          <label >Shop</label>
          <select className="form-control">
            <option value="mengzi">mengzi</option>
          </select>
        </div>
        <div className="col-sm-6">
          <label >Name</label>
          <input className="form-control" type="text" placeholder="Name" />
        </div>
        <div className="col-sm-6">
          <label >Phone</label>
          <input className="form-control" type="number" placeholder="Phone" />
        </div>
      </div>
    );
  }

  renderAddressComponent() {
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
          {this.state.model === 'delivery' ?
            <div className="form-wrapper">
              {this.props.userState.addressBook && this.props.userState.addressBook.length > 0 ? this.renderAddressBookList() : this.renderEmptyAddressBook()}
            </div>
            :
            <div className="form-wrapper">
              {this.renderCarryOut()}
            </div>
          }
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid order-container">
        {this.props.userState.addressBook ? this.renderAddressComponent() : ''}
        <div className="row time-wrapper">
          <div className="col-sm-8 offset-sm-2 col-12">
            <div className="row form-wrapper">
              <div className="col-sm-12 title">
                Order Time
              </div>
              <div className="col-sm-2">
                <select className="form-control" value={this.state.time} onChange={this.handleTimeChange.bind(this)}>
                  <option value="now">Now</option>
                  <option value="reserve">Reserve</option>
                </select>
              </div>
              {
                this.state.time === 'now'
                  ?
                  <div className="col-sm-10 message">
                    You will get your food before {(new Date(this.state.deliveryTime).getHours() + 1) + ':' + new Date(this.state.deliveryTime).getMinutes()}
                  </div>
                  :
                  <div className="col-sm-10">
                    <div className="row">
                      <div className="col-sm-4">
                        <select className="form-control">
                          <option value="2018-08-01">2018-08-01</option>
                          <option value="2018-08-02">2018-08-02</option>
                          <option value="2018-08-03">2018-08-03</option>
                          <option value="2018-08-04">2018-08-04</option>
                          <option value="2018-08-05">2018-08-05</option>
                          <option value="2018-08-06">2018-08-06</option>
                        </select>
                      </div>
                      <div className="col-sm-3">
                        <select className="form-control" >
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                        </select>
                      </div>
                      <div className="col-sm-3">
                        <select className="form-control">
                          <option value="00">00</option>
                          <option value="15">15</option>
                          <option value="30">30</option>
                          <option value="45">45</option>
                        </select>
                      </div>
                    </div>
                  </div>
              }
            </div>
          </div>
        </div>
        {
          this.props.cartState.items && this.props.cartState.items.length > 0
            ?
            <ListComponent items={this.props.cartState.items} menuState={this.props.menuState} />
            :
            ''
        }
        <div className="row">
          <div className="col-sm-8 offset-sm-2 col-12 submit-wrapper">
            <button className="btn btn-large">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

OrderComponent.propTypes = {
  // cartActions: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
  getAddressBook: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired,
  userState: PropTypes.object.isRequired,
  menuState: PropTypes.object.isRequired,
};