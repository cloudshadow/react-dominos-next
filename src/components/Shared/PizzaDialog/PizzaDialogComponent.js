import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';
import './pizzaDialog.scss';

export default class PizzaDialogComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      currentSize: {
        pizzaSize: this.props.pizza.sizes[0],
        sizePrice: this.props.pizza[this.props.pizza.sizes[0]].basePrice
      },
      currentCrust: {
        pizzaCrust: this.props.pizza[this.props.pizza.sizes[0]].crusts[0],
        crustPrice: this.props.pizzaOptions[this.props.pizza.sizes[0]].crusts[this.props.pizza[this.props.pizza.sizes[0]].crusts[0]].price
      },
      currentDefaultToppings: objectAssign([], this.props.pizza[this.props.pizza.sizes[0]].default.toppings),
      currentAdditionalToppings: objectAssign([], this.props.pizza[this.props.pizza.sizes[0]].toppings),
      currentAdditionalToppingsPrice: 0,
    };
    this.calculateAdditionalToppingsPrice = this.calculateAdditionalToppingsPrice.bind(this);
  }

  handleCloseClick() {
    this.props.controlPizzaDialog();
  }

  handleSizeClick(pizzaSize, sizePrice) {
    this.setState({
      currentSize: { pizzaSize, sizePrice },
      currentCrust: { pizzaCrust: this.props.pizza[pizzaSize].crusts[0], crustPrice: this.props.pizzaOptions[pizzaSize].crusts[this.props.pizza[pizzaSize].crusts[0]].price },
      currentDefaultToppings: objectAssign([], this.props.pizza[pizzaSize].default.toppings),
      currentAdditionalToppings: objectAssign([], this.props.pizza[pizzaSize].toppings),
    });
  }

  handleCrustClick(pizzaCrust, crustPrice) {
    this.setState({
      currentCrust: { pizzaCrust, crustPrice },
    });
  }

  handleDefaultToppingsClick(changedTopping, number) {
    let topping = objectAssign({}, changedTopping);
    topping.number += number;
    topping.number = topping.number < 0 ? 0 : topping.number;
    topping.number = topping.number > topping.limit ? topping.limit : topping.number;
    this.setState({ currentDefaultToppings: this.updateTopping(this.state.currentDefaultToppings, topping) });

  }

  handleAdditionalToppingsClick(changedTopping, number) {
    let topping = objectAssign({}, changedTopping);
    topping.number += number;
    topping.number = topping.number < 0 ? 0 : topping.number;
    topping.number = topping.number > topping.limit ? topping.limit : topping.number;
    this.setState({ currentAdditionalToppings: this.updateTopping(this.state.currentAdditionalToppings, topping) });
    this.calculateAdditionalToppingsPrice();
    // console.log(this.props.pizza.msize.toppings);
  }

  handleAddCartClick() {
    // console.log(this.props.pizza.msize.toppings);
    this.props.addItem({
      id: this.props.pizza.id,
      t: new Date().getTime(),
      name: this.props.pizza.name,
      type: 'pizza',
      image: this.props.pizza.image,
      size: this.state.currentSize,
      crust: this.state.currentCrust,
      defaultToppings: this.state.currentDefaultToppings,
      additionalToppings: this.state.currentAdditionalToppings,
      price: (this.state.currentSize.sizePrice + this.state.currentCrust.crustPrice + this.state.currentAdditionalToppingsPrice),
      number: 1,
    });
    this.props.controlPizzaDialog();
  }

  updateTopping(toppingList, changedTopping) {
    let targetIndex = toppingList.findIndex(topping => topping.name === changedTopping.name);
    targetIndex < 0 ? toppingList.push(changedTopping) : toppingList.splice(targetIndex, 1, changedTopping);
    return toppingList;
  }

  calculateAdditionalToppingsPrice() {
    let currentAdditionalToppingsPrice = 0;
    this.state.currentAdditionalToppings.forEach(topping => {
      currentAdditionalToppingsPrice += (this.props.pizzaOptions[this.state.currentSize.pizzaSize].toppings[topping.name].price * topping.number);
    });
    this.setState({ currentAdditionalToppingsPrice });
  }

  render() {
    return (
      <div className="pizza-dialog-container">
        <span className="oi oi-x" onClick={this.handleCloseClick.bind(this)} />
        <div className="pizza-dialog container-fluid">
          <div className="row">
            <div className="col-sm-4 col-12">
              <div className="row">
                <div className="col-sm-12 pic">
                  <img src={this.props.pizza.image} />
                </div>
                <div className="col-sm-12 name">
                  {this.props.pizza.name}
                </div>
                <div className="col-sm-12 desc">
                  {this.props.pizza.desc}
                </div>
                <div className="co-sm-6 col-12 price">
                  <span className="name">价格</span>
                  <span className="value">￥{this.state.currentSize.sizePrice + this.state.currentCrust.crustPrice + this.state.currentAdditionalToppingsPrice}</span>
                </div>
                <div className="col-sm-6 col-12 cart">
                  <button className="btn btn-success" onClick={this.handleAddCartClick.bind(this)}><span className="oi oi-cart" /> Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-12">
              <div className="row size">
                <div className="col-sm-12 title">
                  Size
                </div>
                {this.props.pizza.sizes.map(pizzaSize => {
                  return (
                    <div
                      className={'col-4 box ' + (this.state.currentSize.pizzaSize === pizzaSize ? 'active' : '')}
                      key={pizzaSize}
                      onClick={this.handleSizeClick.bind(this, pizzaSize, this.props.pizza[pizzaSize].basePrice)}>
                      <div className="container">
                        <img src={this.props.pizza[pizzaSize].image} />
                        <span className="size-text">{this.props.pizza[pizzaSize].name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row crust">
                <div className="col-12 title">
                  Crust
                </div>
                {this.props.pizza[this.state.currentSize.pizzaSize].crusts.map(pizzaCrust => {
                  return (
                    <div
                      className={'col-4 box ' + (this.state.currentCrust.pizzaCrust === pizzaCrust ? 'active' : '')}
                      key={pizzaCrust}
                      onClick={this.handleCrustClick.bind(this, pizzaCrust, this.props.pizzaOptions[this.state.currentSize.pizzaSize].crusts[pizzaCrust].price)}>
                      <div className="container">
                        <img src={this.props.pizzaOptions[this.state.currentSize.pizzaSize].crusts[pizzaCrust].image} />
                        <span className="size-text">{this.props.pizzaOptions[this.state.currentSize.pizzaSize].crusts[pizzaCrust].name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-sm-4 col-12">
              <div className="row topping">
                <div className="col-12 title">
                  Default Topping
                </div>
                {this.state.currentDefaultToppings.map(pizzaTopping => {
                  return (
                    <div className="col-2 box" key={pizzaTopping.name}>
                      <div className="container">
                        <img src={this.props.pizzaOptions[this.state.currentSize.pizzaSize].toppings[pizzaTopping.name].image} />
                        <span className="topping-text">{this.props.pizzaOptions[this.state.currentSize.pizzaSize].toppings[pizzaTopping.name].name}</span>
                        <span className="oi oi-plus" onClick={this.handleDefaultToppingsClick.bind(this, pizzaTopping, 1)} />
                        <span className="count">{pizzaTopping.number}</span>
                        <span className="oi oi-minus" onClick={this.handleDefaultToppingsClick.bind(this, pizzaTopping, -1)} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row topping">
                <div className="col-12 title">
                  Topping
                </div>
                {this.state.currentAdditionalToppings.map(pizzaTopping => {
                  return (
                    <div className="col-2 box" key={pizzaTopping.name}>
                      <div className="container">
                        <img src={this.props.pizzaOptions[this.state.currentSize.pizzaSize].toppings[pizzaTopping.name].image} />
                        <span className="topping-text">{this.props.pizzaOptions[this.state.currentSize.pizzaSize].toppings[pizzaTopping.name].name}</span>
                        <span className="oi oi-plus" onClick={this.handleAdditionalToppingsClick.bind(this, pizzaTopping, 1)} />
                        <span className="count">{pizzaTopping.number}</span>
                        <span className="oi oi-minus" onClick={this.handleAdditionalToppingsClick.bind(this, pizzaTopping, -1)} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PizzaDialogComponent.propTypes = {
  pizza: PropTypes.object.isRequired,
  pizzaOptions: PropTypes.object.isRequired,
  controlPizzaDialog: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};