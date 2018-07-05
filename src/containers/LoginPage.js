import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import LoginComponent from '../components/Login/LoginComponent';

export class LoginPage extends React.Component {
  render() {
    return (
      <LoginComponent
        login={this.props.userActions.login}
        signup={this.props.userActions.signup}
        userState={this.props.userState}
      />
    );
  }
}

LoginPage.propTypes = {
  userActions: PropTypes.object.isRequired,
  userState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    userState: state.userState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);