import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';
import MessageDialogComponent from '../../Shared/MessageDialog/MessageDialogComponent';
import './soup.scss';

export default class SoupComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getSoupMenu();
  }

  handelAddClick(item) {
    let addedItem = objectAssign({}, item);
    addedItem.t = new Date().getTime();
    addedItem.price = item.promoPrice || item.originPrice;
    addedItem.number = 1;
    this.props.addItem(addedItem);
  }

  renderSoupList() {
    return (
      <div>
        {
          this.props.menuState.soupMenu.map(itemList => {
            return (
              <div key={itemList.category} className="row">
                <div className="col-sm-12 category-name">
                  {itemList.category}
                </div>
                {
                  itemList.list.map(item => {
                    return (
                      <div key={item.id} className="col-sm-3 col-6">
                        <div className="card item-box">
                          <img className="card-img-top" src={item.image} alt={item.image} />
                          <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <div className="card-text promo-text">{item.promotionInfo ? <span>{item.promotionInfo}</span> : ''}</div>
                            <div className="card-text price">{item.promoPrice ? <div>￥{item.promoPrice} <span className="expired-price">￥{item.originPrice}</span></div> : '￥' + item.originPrice}</div>
                            <a href="javascript:;" className="btn btn-primary btn-cart" onClick={this.handelAddClick.bind(this, item)}>Add to Cart</a>
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
        {
          this.props.cartState.showMessageDialog ? <MessageDialogComponent type={this.props.cartState.showMessageDialogType} hideFunc={this.props.hideMessageDialog} /> : ''
        }
      </div>
    );
  }
}

SoupComponent.propTypes = {
  menuState: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
  hideMessageDialog: PropTypes.func.isRequired,
  getSoupMenu: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};
