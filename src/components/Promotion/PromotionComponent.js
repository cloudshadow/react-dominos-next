import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './promotion.scss';

export default class PromotionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getPromotions();
  }

  renderPage() {
    return (
      <div>
        {this.props.promotionState.promotions.map(promotion => {
          return (
            <div key={promotion.id} className="row">
              <div className="col-12">
                <div className="promotion-wrapper">
                  <div className="picture">
                    <img src={promotion.image} />
                  </div>
                  <div className="title">
                    {promotion.title}
                  </div>
                  <div className="desc">
                    {promotion.desc}
                  </div>
                  <div className="link">
                    <Link to={promotion.link}>
                      <button className="btn btn-primary">Go!</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="container promotion-container" >
        {this.props.promotionState.promotions ? this.renderPage() : ''}
      </div>
    );
  }
}

PromotionComponent.propTypes = {
  getPromotions: PropTypes.func.isRequired,
  promotionState: PropTypes.object.isRequired,
};