import React, { Component } from 'react';

class ActTotals extends Component {
  getHighest(acts) {
    return (
      acts.reduce((acc, act) => {
        if (acc.balance < act.balance) return act;
        return acc;
      }, acts[0])
    );
  }

  getLowest(acts) {
    return (
      acts.reduce((acc, act) => {
        if (acc.balance > act.balance) return act;
        return acc;
      }, acts[0])
    );
  }

  total(acts) {
    let total = acts.reduce((acc, cur) => acc + cur.balance, 0);
    // console.log('total :>> ', total);
    total = this.prettyBalance(total);
    return total;
  }

  prettyBalance(amnt) {
    let a = amnt.toFixed(2).toString();
    a = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    return a;
  }

  render() {
    const { accounts } = this.props;
    const highest = this.getHighest(accounts);
    const lowest = this.getLowest(accounts);
    return (
      <div id="idActTotals">
        <h3>Detailed Information</h3>
        <p>
          Total balance:
          <span>$ {this.total(accounts)}</span>
        </p>
        <h4>Highest balance account:</h4>
        <p>
          {highest.actName}:
          <span>$ {this.prettyBalance(highest.balance)}</span>
        </p>
        <h4>Lowest balance account:</h4>
        <p>
          {lowest.actName}:
          <span>$ {this.prettyBalance(lowest.balance)}</span>
        </p>
      </div>
    );
  }
}

export default ActTotals;
