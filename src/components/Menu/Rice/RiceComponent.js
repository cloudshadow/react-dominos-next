import React from 'react';
import PropTypes from 'prop-types';
import './rice.scss';

export default class RiceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        rice
      </div>
    );
  }
}

RiceComponent.propTypes = {
};