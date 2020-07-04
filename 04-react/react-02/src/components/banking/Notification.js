import React, { Component } from 'react';

class Notification extends Component {
  prettyBalance(amnt) {
    let a = amnt.toFixed(2).toString();
    a = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    return a;
  }

  render() {
    const { action, actName, amnt } = this.props.notif;
    let msg = null;
    // console.log('actions :>> ', action);
    switch (action) {
      case 'clear':
        msg = <p />;
        break;
      case 'welco':
        msg = <p>Welcome! Please create an account.</p>;
        break;
      case 'newAct':
        msg = <p>Account {actName} has been created.</p>;
        break;
      case 'actExists':
        msg = <p className="clWarn">An account named {actName} already exists.</p>;
        break;
      case 'dep':
        msg = <p>$ {this.prettyBalance(amnt)} has been deposited to {actName}.</p>;
        break;
      case 'wd':
        msg = <p>$ {this.prettyBalance(amnt)} has been withdrawn from {actName}.</p>;
        break;
      case 'nan':
        msg = <p className="clWarn">I generally find it easier to work with numbers greater than zero.</p>;
        break;
      case 'del':
        msg = (<p>Account {actName} has been deleted.</p>);
        break;
      default: msg = '';
        break;
    }

    return (
      <div id="idNotify" role="status">
        {msg}
      </div>
    );
  }
}

export default Notification;
