import React from 'react';
import PropTypes from 'prop-types';
import './drink.scss';

export default class DrinkComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  // componentWillMount() {

  // }
  componentDidMount() {
    this.props.getDrinkMenu();
  }

  renderDrinkList() {
    return (
      <div>
        {
          this.props.menuState.drinkMenu.map(drinkList => {
            return (
              <div key={drinkList.category} className="row">
                <div className="col-12 category-name">
                  {drinkList.category}
                </div>
                {
                  drinkList.list.map(drink => {
                    return (
                      <div key={drink.id} className="col-3">
                        <div className="card item-box">
                          <img className="card-img-top" src={drink.image} />
                          <div className="card-body">
                            <h5 className="card-title">{drink.name}</h5>
                            <div className="card-text promo-text">{drink.promotionInfo ? <span>{drink.promotionInfo}</span> : ''}</div>
                            <div className="card-text price">{drink.promoPrice ? <div>￥{drink.promoPrice} <span className="expired-price">￥{drink.originPrice}</span></div> : '￥' + drink.originPrice}</div>
                            <a href="#" className="btn btn-primary btn-cart">Add to Cart</a>
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
      <div className="container-fluid drink-container">
        {
          this.props.menuState.drinkMenu ? this.renderDrinkList() : ''
        }
      </div>
    );
  }
}

DrinkComponent.propTypes = {
  menuState: PropTypes.object.isRequired,
  getDrinkMenu: PropTypes.func.isRequired,
};
