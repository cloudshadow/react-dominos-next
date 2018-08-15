import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    // console.log(1)
    // console.log(error)
    // console.log(2)
    // console.log(info)
  }

  render() {
    // if (this.state.hasError) {
    //   // You can render any custom fallback UI
    //   return <h1>Something went wrong.</h1>;
    // }
    return this.props.children;
  }
}

ErrorBoundaryComponent.propTypes = {
  children: PropTypes.object,
};