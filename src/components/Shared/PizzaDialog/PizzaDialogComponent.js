import React from 'react';
import PropTypes from 'prop-types';
import './pizzaDialog.scss';

export default class PizzaDialogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      defaultPrice: this.props.pizza[this.props.pizza.sizes[0]].basePrice,
      finalPrice: this.props.pizza[this.props.pizza.sizes[0]].basePrice,
      currentPizzaSize: this.props.pizza.sizes[0],
    };
  }

  render() {
    return (
      <div className={(this.props.showPizzaDialog ? '' : 'pizza-dialog-hide ') + 'pizza-dialog-container'}>
        <div className="pizza-dialog container-fluid">
          {console.log(this.props.pizza)}
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
                  <span className="name">价格</span><span className="value">￥{this.state.finalPrice}</span>
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
                    <div className="col-4 box" key={pizzaSize}>
                      <div className="conntainer">
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
                {this.props.pizza[this.state.currentPizzaSize].crusts.map(pizzaCrust => {
                  return (
                    <div className="col-4 box" key={pizzaCrust}>
                      <div className="conntainer">
                        <img src={this.props.pizzaOptions[this.state.currentPizzaSize].crusts[pizzaCrust].image} />
                        <span className="size-text">{this.props.pizzaOptions[this.state.currentPizzaSize].crusts[pizzaCrust].name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-4">

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