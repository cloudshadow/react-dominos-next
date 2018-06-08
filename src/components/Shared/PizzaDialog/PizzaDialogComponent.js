import React from 'react';
import PropTypes from 'prop-types';
import './pizzaDialog.scss';

export default class PizzaDialogComponent extends React.Component {
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
      currentDefaultToppings: {

      },
      currentAdditionalToppings: {

      }
    };
  }

  handleSizeClick(pizzaSize, sizePrice) {
    this.setState({
      currentSize: { pizzaSize, sizePrice },
      currentCrust: { pizzaCrust: this.props.pizza[pizzaSize].crusts[0], crustPrice: this.props.pizzaOptions[pizzaSize].crusts[this.props.pizza[pizzaSize].crusts[0]].price },
    });
  }

  handleCrustClick(pizzaCrust, crustPrice) {
    this.setState({
      currentCrust: { pizzaCrust, crustPrice },
    });
  }

  handleDefaultToppingsClick() {

  }

  handleAdditionalToppingsClick() {

  }

  render() {
    return (
      <div className={(this.props.showPizzaDialog ? '' : 'pizza-dialog-hide ') + 'pizza-dialog-container'}>
        <div className="pizza-dialog container-fluid">
          <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col-12 pic">
                  <img src={this.props.pizza.image} />
                </div>
                <div className="col-12 name">
                  {this.props.pizza.name}
                </div>
                <div className="col-12 desc">
                  {this.props.pizza.desc}
                </div>
                <div className="col-12 price">
                  <span className="name">价格</span><span className="value">￥{this.state.currentSize.sizePrice + this.state.currentCrust.crustPrice}</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row size">
                <div className="col-12 title">
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
            <div className="col-4">
              <div className="row topping">
                <div className="col-12 title">
                  Default Topping
                </div>
                {this.props.pizza[this.state.currentSize.pizzaSize].default.toppings.map(pizzaTopping => {
                  return (
                    <div className="col-2 box" key={pizzaTopping.name}>
                      <div className="container">
                        <img src={this.props.pizzaOptions[this.state.currentSize.pizzaSize].toppings[pizzaTopping.name].image} />
                        <span className="topping-text">{this.props.pizzaOptions[this.state.currentSize.pizzaSize].toppings[pizzaTopping.name].name}</span>
                        <span className="oi oi-plus" /><span className="count">{pizzaTopping.number}</span><span className="oi oi-minus" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row topping">
                <div className="col-12 title">
                  Topping
                </div>
                {this.props.pizza[this.state.currentSize.pizzaSize].toppings.map(pizzaTopping => {
                  return (
                    <div className="col-2 box" key={pizzaTopping}>
                      <div className="container">
                        <img src={this.props.pizzaOptions[this.state.currentSize.pizzaSize].toppings[pizzaTopping].image} />
                        <span className="topping-text">{this.props.pizzaOptions[this.state.currentSize.pizzaSize].toppings[pizzaTopping].name}</span>
                        <span className="oi oi-plus" /><span className="count">0</span><span className="oi oi-minus" />
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
  showPizzaDialog: PropTypes.bool.isRequired,
};