import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as promotionActions from '../actions/promotionActions';
import PromotionComponent from '../components/Promotion/PromotionComponent';

export class PromotionPage extends React.PureComponent {
  render() {
    return (
      <PromotionComponent getPromotions={this.props.promotionActions.getPromotions} promotionState={this.props.promotionState} />
    );
  }
}

PromotionPage.propTypes = {
  promotionActions: PropTypes.object.isRequired,
  promotionState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    promotionState: state.promotionState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    promotionActions: bindActionCreators(promotionActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromotionPage);