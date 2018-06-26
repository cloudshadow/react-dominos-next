import React from 'react';
import PropTypes from 'prop-types';
import './side.scss';

export default class SideComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  // componentWillMount() {

  // }
  componentDidMount() {
    this.props.getSideMenu();
  }

  renderSideList() {
    return (
      <div>
        {
          this.props.menuState.sideMenu.map(sideList => {
            return (
              <div key={sideList.category} className="row">
                <div className="col-12 category-name">
                  {sideList.category}
                </div>
                {
                  sideList.list.map(side => {
                    return (
                      <div key={side.id} className="col-3">
                        <div className="card item-box">
                          <img className="card-img-top" src={side.image} />
                          <div className="card-body">
                            <h5 className="card-title">{side.name}</h5>
                            <div className="card-text promo-text">{side.promotionInfo ? <span>{side.promotionInfo}</span> : ''}</div>
                            <div className="card-text price">{side.promoPrice ? <div>￥{side.promoPrice} <span className="expired-price">￥{side.originPrice}</span></div> : '￥' + side.originPrice}</div>
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
      <div className="container-fluid side-container">
        {
          this.props.menuState.sideMenu ? this.renderSideList() : ''
        }
      </div>
    );
  }
}

SideComponent.propTypes = {
  menuState: PropTypes.object.isRequired,
  getSideMenu: PropTypes.func.isRequired,
};
