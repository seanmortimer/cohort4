import React, { Component } from 'react';

class ActCard extends Component {
  constructor(props) {
    super(props);
    this.handleDelAct = this.handleDelAct.bind(this);
  }

  prettyBalance(amnt) {
    let a = amnt.toFixed(2).toString();
    a = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    return a;
  }

  handleDelAct() {
    const delAct = this.props.act.key;
    this.props.onDel(delAct);
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
        <button type="button" onClick={this.handleDelAct}>Delete Account</button>
      </div>
    );
  }
}

export default ActCard;
