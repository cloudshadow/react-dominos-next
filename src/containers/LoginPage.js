import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';
import LoginComponent from '../components/Login/LoginComponent';

export class LoginPage extends React.Component {
  render() {
    return (
      <LoginComponent
        login={this.props.authActions.login}
        signup={this.props.authActions.signup}
        authState={this.props.authState}
      />
    );
  }
}

LoginPage.propTypes = {
  authActions: PropTypes.object.isRequired,
  authState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    authState: state.authState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);