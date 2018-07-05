import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import * as menuActions from '../actions/menuActions';
import * as cartActions from '../actions/cartActions';
import NavbarComponent from '../components/Navbar/NavbarComponent';

export class NavbarPage extends React.Component {
  render() {
    return (
      <NavbarComponent
        userState={this.props.userState}
        reloadAuth={this.props.userActions.reloadAuth}
        logout={this.props.userActions.logout}
        menuState={this.props.menuState}
        getPizzaOptions={this.props.menuActions.getPizzaOptions}
        cartState={this.props.cartState}
      />
    );
  }
}

NavbarPage.propTypes = {
  userActions: PropTypes.object.isRequired,
  userState: PropTypes.object.isRequired,
  menuActions: PropTypes.object.isRequired,
  menuState: PropTypes.object.isRequired,
  cartActions: PropTypes.object.isRequired,
  cartState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    userState: state.userState,
    menuState: state.menuState,
    cartState: state.cartState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    menuActions: bindActionCreators(menuActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarPage);