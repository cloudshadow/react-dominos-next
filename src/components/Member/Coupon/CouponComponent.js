import React from 'react';
// import PropTypes from 'prop-types';
import './coupon.scss';

export default class CouponComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="col-sm-9 coupon-wrapper">
        coupons
      </div>
    );
  }
}

CouponComponent.propTypes = {
};