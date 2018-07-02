import React from 'react';
import PropTypes from 'prop-types';
import CarouselMultipleComponent from '../Shared/Carousel/CarouselMultipleComponent';
import './cart.scss';

export default class CartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getCart();
    this.props.getSuggestionItems();
  }

  handleCleanCartClick() {
    this.props.cleanCart();
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
    )
  }

  renderCartList() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-2">
            <button className="btn" onClick={this.handleCleanCartClick.bind(this)}>Remove All</button>
          </div>
          <div className="col-sm-6">
            Name
          </div>
          <div className="col-sm-1">
            Price
          </div>
          <div className="col-sm-2">
            Number
          </div>
          <div className="col-sm-1">
            Total Price
          </div>
        </div>
        {
          this.props.cartState.items.map(item => {
            return (
              <div className="row item-wrapper" key={item.id + item.t}>
                <div className="col-sm-2 image">
                  <img src={item.image} />
                </div>
                <div className="col-sm-6 detail">
                  <div className="name">
                    {item.name}
                  </div>
                  <div className="addition">
                    {item.type === 'pizza' ? this.renderAdditionInfo(item) : ''}
                  </div>
                </div>
                <div className="col-sm-1 price">
                  {item.price}
                </div>
                <div className="col-sm-2 number">
                  {item.number}
                </div>
                <div className="col-sm-1 total-price">
                  {item.price * item.number}
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }

  renderEmptyCart() {

  }

  renderPage() {
    return (
      <div className="container-fluid cart-container">
        {this.props.cartState.items ? this.renderCartList() : this.renderEmptyCart()}
        <div className="row">
          <div className="col-sm-12">
            <div className="suggestion-title">
              Suggestion
            </div>
          </div>
        </div>
        <CarouselMultipleComponent
          suggestionItems={this.props.cartState.suggestionItems}
          number={4}
        />
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
  cleanCart: PropTypes.func.isRequired,
  getSuggestionItems: PropTypes.func.isRequired,
  cartState: PropTypes.object.isRequired,
  menuState: PropTypes.object.isRequired,
};