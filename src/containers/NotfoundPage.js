import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as notfoundActions from '../actions/notfoundActions';
import NotfoundComponent from '../components/Notfound/NotfoundComponent';

export class NotfoundPage extends React.PureComponent {
  render() {
    return (
      <NotfoundComponent />
    );
  }
}

NotfoundPage.propTypes = {
  // notfoundActions: PropTypes.object.isRequired,
  // notfoundState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    notfoundState: state.notfoundState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    notfoundActions: bindActionCreators(notfoundActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotfoundPage);