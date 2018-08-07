import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../actions/homeActions';
import HomeComponent from '../components/Home/HomeComponent';

export class HomePage extends React.PureComponent {
  render() {
    return (
      <HomeComponent
        getHomeInfo={this.props.homeActions.getHomeInfo}
        homeState={this.props.homeState}
      />
    );
  }
}

HomePage.propTypes = {
  homeActions: PropTypes.object.isRequired,
  homeState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    homeState: state.homeState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);