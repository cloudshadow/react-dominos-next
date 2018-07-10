import React from 'react';
import PropTypes from 'prop-types';
import './order.scss';

export default class OrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="col-sm-9 order-wrapper">
        orders
      </div>
    );
  }
}

OrderComponent.propTypes = {
};