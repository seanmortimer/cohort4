import React, { Component } from 'react';

class ActTotals extends Component {
  getHighest(acts) {
    const highest = acts.reduce((acc, act) => {
      if (acc.balance < act.balance) return act;
      return acc;
    }, acts[0]);
    return highest;
  }

  getLowest(acts) {
    const lowest = acts.reduce((acc, act) => {
      if (acc.balance > act.balance) return act;
      return acc;
    }, acts[0]);
    return lowest;
  }

  total(acts) {
    return acts.reduce((acc, cur) => acc + cur.balance, 0);
  }

  prettyBalance(amnt) {
    let a = Number(amnt).toFixed(2).toString();
    a = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    return `$ ${a}`;
  }

  render() {
    const { accounts } = this.props;
    let total = '';
    let highest = { actname: '', balance: null };
    let lowest = { actname: '', balance: '' };
    if (accounts.length > 0) {
      total = this.total(accounts);
      highest = this.getHighest(accounts);
      lowest = this.getLowest(accounts);
    }
    return (
      <div id="idActTotals">
        <h3>Detailed Information</h3>
        <p>
          Total balance:
          <span>{this.prettyBalance(total)}</span>
        </p>
        <h4>Highest balance account:</h4>
        <p>
          {highest.actName}
          <span>{this.prettyBalance(highest.balance)}</span>
        </p>
        <h4>Lowest balance account:</h4>
        <p>
          {lowest.actName}
          <span>{this.prettyBalance(lowest.balance)}</span>
        </p>
      </div>
    );
  }
}

export default ActTotals;
