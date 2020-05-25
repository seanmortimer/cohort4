import React, { Component } from 'react';

class Notification extends Component {
  render() {
    const { action, actName } = this.props.notif;
    let { amnt } = this.props.notif;
    // if (amnt) amnt = amnt.toFixed(2);
    let msg = null;
    // console.log('actions :>> ', action);
    switch (action) {
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
        msg = <p>$ {amnt} has been deposited to {actName}.</p>;
        break;
      case 'wd':
        msg = <p>$ {amnt} has been withdrawm from {actName}.</p>;
        break;
      case 'nan':
        msg = <p className="clWarn">I generally find it easier to work with numbers.</p>;
        break;
      case 'del':
        msg = (<p>Account{actName}has been deleted.</p>);
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
