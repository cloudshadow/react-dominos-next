import React from 'react';
// import PropTypes from 'prop-types';
import './notfound.scss';

export default class NotfoundComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        Not found this page
      </div>
    );
  }
}

NotfoundComponent.propTypes = {
};