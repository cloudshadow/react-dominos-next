import React from 'react';
import PropTypes from 'prop-types';
import './soup.scss';

export default class SoupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  // componentWillMount() {

  // }
  componentDidMount() {
    this.props.getSoupMenu();
  }

  renderSoupList() {
    return (
      <div>
        {
          this.props.menuState.soupMenu.map(soupList => {
            return (
              <div key={soupList.category} className="row">
                <div className="col-12 category-name">
                  {soupList.category}
                </div>
                {
                  soupList.list.map(soup => {
                    return (
                      <div key={soup.id} className="col-3">
                        <div className="card item-box">
                          <img className="card-img-top" src={soup.image} />
                          <div className="card-body">
                            <h5 className="card-title">{soup.name}</h5>
                            <div className="card-text promo-text">{soup.promotionInfo ? <span>{soup.promotionInfo}</span> : ''}</div>
                            <div className="card-text price">{soup.promoPrice ? <div>￥{soup.promoPrice} <span className="expired-price">￥{soup.originPrice}</span></div> : '￥' + soup.originPrice}</div>
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
      <div className="container-fluid soup-container">
        {
          this.props.menuState.soupMenu ? this.renderSoupList() : ''
        }
      </div>
    );
  }
}

SoupComponent.propTypes = {
  menuState: PropTypes.object.isRequired,
  getSoupMenu: PropTypes.func.isRequired,
};
