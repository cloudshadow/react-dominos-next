import React from 'react';
import PropTypes from 'prop-types';
import './dessert.scss';

export default class DessertComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  // componentWillMount() {

  // }
  componentDidMount() {
    this.props.getDessertMenu();
  }

  renderDessertList() {
    return (
      <div>
        {
          this.props.menuState.dessertMenu.map(dessertList => {
            return (
              <div key={dessertList.category} className="row">
                <div className="col-12 category-name">
                  {dessertList.category}
                </div>
                {
                  dessertList.list.map(dessert => {
                    return (
                      <div key={dessert.id} className="col-3">
                        <div className="card item-box">
                          <img className="card-img-top" src={dessert.image} />
                          <div className="card-body">
                            <h5 className="card-title">{dessert.name}</h5>
                            <div className="card-text promo-text">{dessert.promotionInfo ? <span>{dessert.promotionInfo}</span> : ''}</div>
                            <div className="card-text price">{dessert.promoPrice ? <div>￥{dessert.promoPrice} <span className="expired-price">￥{dessert.originPrice}</span></div> : '￥' + dessert.originPrice}</div>
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
      <div className="container-fluid dessert-container">
        {
          this.props.menuState.dessertMenu ? this.renderDessertList() : ''
        }
      </div>
    );
  }
}

DessertComponent.propTypes = {
  menuState: PropTypes.object.isRequired,
  getDessertMenu: PropTypes.func.isRequired,
};
