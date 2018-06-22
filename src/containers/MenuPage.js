import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from '../actions/menuActions';
import MenuComponent from '../components/Menu/MenuComponent';

export class MenuPage extends React.Component {
  render() {
    return (
      <MenuComponent
        menuState={this.props.menuState}
        getPizzaMenu={this.props.menuActions.getPizzaMenu}
        getPizzaOptions={this.props.menuActions.getPizzaOptions}
        getPizzaDetail={this.props.menuActions.getPizzaDetail}
        controlPizzaDialog={this.props.menuActions.controlPizzaDialog}
        getRiceMenu={this.props.menuActions.getRiceMenu}
        getSideMenu={this.props.menuActions.getSideMenu}
        getDessertMenu={this.props.menuActions.getDessertMenu}
        getDrinkMenu={this.props.menuActions.getDrinkMenu}
        getSoupMenu={this.props.menuActions.getSoupMenu}
        getComboMenu={this.props.menuActions.getComboMenu}
      />
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