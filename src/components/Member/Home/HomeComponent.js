import React from 'react';
// import PropTypes from 'prop-types';
import './home.scss';

export default class HomeComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="col-sm-9 home-wrapper">
        home
      </div>
    );
  }
}

HomeComponent.propTypes = {
};