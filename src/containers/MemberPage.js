import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import MemberComponent from '../components/Member/MemberComponent';

export class MemberPage extends React.PureComponent {
  render() {
    return (
      <MemberComponent
        userState={this.props.userState}
      />
    );
  }
}

MemberPage.propTypes = {
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
)(MemberPage);