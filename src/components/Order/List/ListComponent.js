import React from 'react';
import PropTypes from 'prop-types';
import './list.scss';

export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
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

  render() {
    let numberCounter = 0;
    let priceCounter = 0;
    this.props.items.forEach(item => {
      numberCounter += item.number;
      priceCounter += (item.price * item.number);
    });
    return (
      <div className="list-container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2 col-12">
            <div className="row form-wrapper">
              <div className="col-sm-12 title">
                Items List
              </div>
              <div className="col-sm-3 header-title">
                Name
              </div>
              <div className="col-sm-5 header-title">
              </div>
              <div className="col-sm-1 header-title">
                Price
              </div>
              <div className="col-sm-1 header-title">
                Number
              </div>
              <div className="col-sm-2 header-title">
                Total
              </div>
              {
                this.props.items.map(item => {
                  return (
                    <div className="col-sm-12 item-wrapper" key={item.id + item.t}>
                      <div className="row">
                        <div className="col-sm-3 name">
                          {item.name}
                        </div>
                        <div className="col-sm-5 detail">
                          <div className="addition">
                            {
                              item.type === 'pizza' ? this.renderAdditionInfo(item) : ''
                            }
                          </div>
                        </div>
                        <div className="col-sm-1 price">
                          {item.price}
                        </div>
                        <div className="col-sm-1 number">
                          <span className="count">{item.number}</span>
                        </div>
                        <div className="col-sm-2 total">
                          {item.price * item.number}
                        </div>
                      </div>
                    </div>
                  );
                })
              }

              <div className="col-sm-5 offset-sm-7 counter">
                <span>Items: {numberCounter}</span>
                <span>Total Price: {priceCounter} RMB</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

ListComponent.propTypes = {
  items: PropTypes.array.isRequired,
  menuState: PropTypes.object.isRequired,
};