import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CarouselMultipleComponent from '../Shared/Carousel/CarouselMultipleComponent';
import objectAssign from 'object-assign';
import './cart.scss';

export default class CartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      allCartItemsNumber: 0,
      allCartItemsPrice: 0,
    };
  }

  componentDidMount() {
    this.props.getCart();
    this.props.getSuggestionItems();
  }

  handleNumberClick(item, option) {
    let updatedItem = objectAssign([], item);
    updatedItem.number += option;
    this.props.updateCart(updatedItem);
  }

  handleDeleteClick(item) {
    this.props.deleteItem(item);
  }
  handleCleanCartClick() {
    this.props.cleanCart();
  }
  handleGoLoginClick() {
    this.props.goLogin('/cart');
  }

  renderAdditionInfo(item) {
    let sizeName = '';
    let defaultToppingsName = '';
    let additionalToppingsName = '';
    if (item.size.pizzaSize === 'msize') {
      sizeName = '9 Inch';
    } else if (item.size.pizzaSize === 'lsize') {
      sizeName = '12 Inch';
    }
    item.defaultToppings.forEach(t => {
      if (t.number > 0) {
        defaultToppingsName += this.props.menuState.pizzaOptions[item.size.pizzaSize].toppings[t.name].name + 'x' + t.number + ', ';
      }
    });
    item.additionalToppings ? item.additionalToppings.forEach(t => {
      if (t.number > 0) {
        additionalToppingsName += this.props.menuState.pizzaOptions[item.size.pizzaSize].toppings[t.name].name + 'x' + t.number + ' ';
      }
    }) : '';
    return (
      <div>
        <div className="other">
          {sizeName + ' ' + this.props.menuState.pizzaOptions[item.size.pizzaSize].crusts[item.crust.pizzaCrust].name}
        </div>
        <div className="default-topping">
          {'DefaultToppings: ' + defaultToppingsName}
        </div>
        <div className="addition-topping">
          {additionalToppingsName ? ('AdditionToppings: ' + additionalToppingsName) : ''}
        </div>
      </div>
    );
  }

  renderCartList() {
    let numberCounter = 0;
    let priceCounter = 0;
    this.props.cartState.items.forEach(item => {
      numberCounter += item.number;
      priceCounter += (item.price * item.number);
    });
    return (
      <div>
        <div className="row header">
          <div className="col-sm-2 col-12 remove-btn-wrapper">
            <div className="remove-all-btn" onClick={this.handleCleanCartClick.bind(this)}>Remove All</div>
          </div>
          <div className="col-sm-5 d-none d-sm-block header-title-left">
            Name
          </div>
          <div className="col-sm-1 d-none d-sm-block header-title">
            Price
          </div>
          <div className="col-sm-2 d-none d-sm-block header-title">
            Number
          </div>
          <div className="col-sm-1 d-none d-sm-block header-title">
            Total
          </div>
          <div className="col-sm-1 d-none d-sm-block header-title" />
        </div>
        {
          this.props.cartState.items.map(item => {
            return (
              <div className="row item-wrapper" key={item.id + item.t}>
                <div className="col-sm-2 col-12 image">
                  <img src={item.image} />
                </div>
                <div className="col-sm-5 col-12 detail">
                  <div className="name">
                    {item.name}
                  </div>
                  <div className="addition">
                    {item.type === 'pizza' ? this.renderAdditionInfo(item) : ''}
                  </div>
                </div>
                <div className="col-sm-1 col-6 price">
                  <span className="d-sm-none">Price: </span>{item.price}
                </div>
                <div className="col-sm-2 col-6 number">
                  <span className="oi oi-plus" onClick={this.handleNumberClick.bind(this, item, 1)} />
                  <span className="count">{item.number}</span>
                  <span className="oi oi-minus" onClick={this.handleNumberClick.bind(this, item, -1)} />
                </div>
                <div className="col-sm-1 col-6 total">
                  <span className="d-sm-none">Total: </span>{item.price * item.number}
                </div>
                <div className="col-sm-1 col-6 option">
                  <span className="delete" onClick={this.handleDeleteClick.bind(this, item)}>Delete</span>
                </div>
              </div>
            );
          })
        }
        <div className="row order-wrapper">
          <div className="col-sm-8 col-5 number-counter">
            Items: {numberCounter}
          </div>
          <div className="col-sm-3 col-7 price-counter">
            Total Price: {priceCounter}
          </div>
          <div className="col-sm-1 col-12 order">
            {this.props.userState.user ? <Link to="/order">Order</Link> : <a href="javascript:;" onClick={this.handleGoLoginClick.bind(this)}>Order</a>}
          </div>
        </div>
      </div>
    );
  }

  renderEmptyCart() {
    return (
      <div className="row">
        <div className="col-sm-12 empty-cart-text">
          Cart is empty.
        </div>
        <div className="col-sm-4 offset-sm-4">
          <img className="empty-cart" src="http://static-test.dominos.com.cn/000/empty.png" />
        </div>

      </div>
    );
  }

  renderPage() {
    return (
      <div className="container cart-container">
        <div className="row">
          <div className="col-sm-12 title">
            Shopping Cart
          </div>
        </div>
        {this.props.cartState.items && this.props.cartState.items.length > 0 ? this.renderCartList() : this.renderEmptyCart()}
        <div className="suggestion-wrapper">
          <div className="row">
            <div className="col-sm-12 suggestion-title">
              Suggestion
            </div>
          </div>
          <CarouselMultipleComponent
            className="d-none d-sm-block"
            suggestionItems={this.props.cartState.suggestionItems}
            number={5}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.cartState.suggestionItems ? this.renderPage() : ''}
      </div>
    );
  }
}

CartComponent.propTypes = {
  getCart: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  cleanCart: PropTypes.func.isRequired,
  getSuggestionItems: PropTypes.func.isRequired,
  goLogin: PropTypes.func.isRequired,
  cartState: PropTypes.object.isRequired,
  menuState: PropTypes.object.isRequired,
  userState: PropTypes.object.isRequired,
};