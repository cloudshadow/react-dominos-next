import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';
import * as menuActions from '../actions/menuActions';
import * as cartActions from '../actions/cartActions';
import NavbarComponent from '../components/Navbar/NavbarComponent';

export class NavbarPage extends React.Component {
  render() {
    return (
      <NavbarComponent
        authState={this.props.authState}
        reloadAuth={this.props.authActions.reloadAuth}
        logout={this.props.authActions.logout}
        menuState={this.props.menuState}
        getPizzaOptions={this.props.menuActions.getPizzaOptions}
        cartState={this.props.cartState}
      />
    );
  }
}

NavbarPage.propTypes = {
  authActions: PropTypes.object.isRequired,
  authState: PropTypes.object.isRequired,
  menuActions: PropTypes.object.isRequired,
  menuState: PropTypes.object.isRequired,
  cartActions: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    authState: state.authState,
    menuState: state.menuState,
    cartState: state.cartState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    menuActions: bindActionCreators(menuActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarPage);