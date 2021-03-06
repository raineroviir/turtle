import React, { Component, PropTypes } from 'react';
var socket = io();
export default class MessageListItem extends Component {

  static propTypes = {
    message: PropTypes.object.isRequired
  }


  render() {
    const  { message, actions } = this.props;

    return (
      <li className="message-list-item">
      <h5 className="message-text">{message.text}</h5>
      </li>
    );
  }
}
