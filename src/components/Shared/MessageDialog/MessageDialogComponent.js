import React from 'react';
import PropTypes from 'prop-types';
import './messageDialog.scss';

export default class MessageDialogComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.msgTip = document.getElementsByClassName('message-dialog-container')[0];
    setTimeout(() => {
      this.props.hideFunc();
    }, 500);
  }


  render() {
    let messageImage = '', messageText = '';
    if (this.props.type === 'addCartSuccess') {
      messageImage = 'oi oi-circle-check success';
      messageText = 'Added cart success';
    }
    return (
      <div className="message-dialog-container">
        <span className={messageImage} />
        <span className="message-text">{messageText}</span>
      </div>
    );
  }
}

MessageDialogComponent.propTypes = {
  type: PropTypes.string.isRequired,
  // pizzaOptions: PropTypes.object.isRequired,
  // controlPizzaDialog: PropTypes.func.isRequired,
  hideFunc: PropTypes.func.isRequired,
};