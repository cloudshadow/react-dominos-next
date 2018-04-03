import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as menuActions from '../actions/menuActions';
import MenuComponent from '../components/Menu/MenuComponent';

export class MenuPage extends React.Component {
  render() {
    return (
      <MenuComponent />
    );
  }
}

MenuPage.propTypes = {
  menuActions: PropTypes.object.isRequired,
  menuState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    menuState: state.menuState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    menuActions: bindActionCreators(menuActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuPage);