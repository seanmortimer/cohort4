import React, { Component } from 'react';

class Notification extends Component {
  render() {
    return (
      <div id="idNotify">
        <p role="status" id="idDialog">
          {/* <p role="status" id="idDialog" style={{color: 'blue'}}> */}
          {this.props.message}
        </p>
      </div>
    );
  }
}

export default Notification;
