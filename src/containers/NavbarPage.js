import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';
import NavbarComponent from '../components/Navbar/NavbarComponent';

export class NavbarPage extends React.Component {
  render() {
    return (
      <NavbarComponent
        authState={this.props.authState}
        reloadAuth={this.props.authActions.reloadAuth}
        logout={this.props.authActions.logout}
      />
    );
  }
}

NavbarPage.propTypes = {
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
)(NavbarPage);