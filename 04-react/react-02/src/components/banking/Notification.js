import React, { Component } from 'react';

class Notification extends Component {
  render() {
    const welcoMsg = 'Welcome! Please create an account.';
    const { msg } = this.props.msg;
    return (
      <div id="idNotify">
        <p role="status">
          {/* <p role="status" id="idDialog" style={{color: 'blue'}}> */}
          {msg.length ? msg : welcoMsg}
        </p>
      </div>
    );
  }
}

export default Notification;
