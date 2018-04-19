import React from 'react';
import PropTypes from 'prop-types';
import './pizza.scss';

export default class PizzaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  // componentWillMount() {

  // }
  componentDidMount() {
    this.props.getPizzaMenu();
  }

  renderPizzaList() {
    return (
      <div>
        {
          this.props.menuState.pizzaMenu.map(pizzaList => {
            return (
              <div key={pizzaList.category} className="row">
                <div className="col-12 category-name">
                  {pizzaList.category}
                </div>
                {
                  pizzaList.list.map(pizza => {
                    return (
                      <div key={pizza.id} className="col-3">
                        <div className="card pizza-box">
                          <img className="card-img-top" src={pizza.image} />
                          <div className="card-body">
                            <h5 className="card-title">{pizza.name}</h5>
                            <div className="card-text promo-text">{pizza.promotionInfo}</div>
                            <div className="card-text">9'' ￥{pizza.nineInchOriginPrice}</div>
                            <div className="card-text">12'' ￥{pizza.twelveInchOriginPrice}</div>
                            <a href="#" className="btn btn-primary btn-cart">Add Cart</a>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  }


  render() {
    return (
      <div className="container-fluid pizza-container">
        {
          this.props.menuState.pizzaMenu ? this.renderPizzaList() : ''
        }
      </div>
    );
  }
}

PizzaComponent.propTypes = {
  menuState: PropTypes.object.isRequired,
  getPizzaMenu: PropTypes.func.isRequired,
};