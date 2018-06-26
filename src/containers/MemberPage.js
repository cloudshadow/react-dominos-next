import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as memberActions from '../actions/memberActions';
import MemberComponent from '../components/Member/MemberComponent';

export class MemberPage extends React.Component {
  render() {
    return (
      <MemberComponent />
    );
  }
}

MemberPage.propTypes = {
  memberActions: PropTypes.object.isRequired,
  memberState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    memberState: state.memberState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    memberActions: bindActionCreators(memberActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberPage);