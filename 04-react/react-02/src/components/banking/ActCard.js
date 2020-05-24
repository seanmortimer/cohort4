import React, { Component } from 'react';

class ActCard extends Component {
  prettyBalance(amnt) {
    let a = amnt.toFixed(2).toString();
    a = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    return a;
  }

  render() {
    const { actName, balance } = this.props.act;
    return (
      <div className="clCard">
        <h3>{actName}</h3>
        <p>
          Balance:
          <span>$ {this.prettyBalance(balance)}</span>
        </p>
        <button type="button">Delete Account</button>
      </div>
    );
  }
}

export default ActCard;
