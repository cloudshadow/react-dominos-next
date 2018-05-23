import React from 'react';
import PropTypes from 'prop-types';
import './rice.scss';

export default class RiceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  // componentWillMount() {

  // }
  componentDidMount() {
    this.props.getRiceMenu();
  }

  renderRiceList() {
    return (
      <div>
        {
          this.props.menuState.riceMenu.map(riceList => {
            return (
              <div key={riceList.category} className="row">
                <div className="col-12 category-name">
                  {riceList.category}
                </div>
                {
                  riceList.list.map(rice => {
                    return (
                      <div key={rice.id} className="col-3">
                        <div className="card item-box">
                          <img className="card-img-top" src={rice.image} />
                          <div className="card-body">
                            <h5 className="card-title">{rice.name}</h5>
                            <div className="card-text promo-text">{rice.promotionInfo ? <span>{rice.promotionInfo}</span> : ''}</div>
                            <div className="card-text price">{rice.promoPrice ? <div>￥{rice.promoPrice} <span className="expired-price">￥{rice.originPrice}</span></div> : '￥' + rice.originPrice}</div>
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
      <div className="container-fluid rice-container">
        {
          this.props.menuState.riceMenu ? this.renderRiceList() : ''
        }
      </div>
    );
  }
}

RiceComponent.propTypes = {
  menuState: PropTypes.object.isRequired,
  getRiceMenu: PropTypes.func.isRequired,
};
