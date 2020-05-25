import React, { Component } from 'react';

class DepositWithdraw extends Component {
  constructor(props) {
    super(props);
    this.onDep = this.onDep.bind(this);
    this.onWd = this.onWd.bind(this);
  }

  onDep() {
    const amnt = this.amnt.value;
    const act = this.props.accounts.find((a) => a.actName === this.act.value);
    if (!act || !amnt) return;
    // this.props.onDW(act, Number(amnt));
    this.props.onDW(act, amnt);
  }

  onWd() {
    const amnt = this.amnt.value;
    const act = this.props.accounts.find((a) => a.actName === this.act.value);
    // this.props.onDW(act, Number(amnt));
    this.props.onDW(act, amnt);
  }

  render() {
    const label = 'Deposit or Withdraw:';
    let acts = [
      <option key="0" disabled hidden>Please select an account</option>];
    acts = acts.concat(this.props.accounts.map((act) =>
      <option key={act.actName}>{act.actName}</option>));

    return (
      <div id="idDepWd">
        <h3>{label}</h3>
        <form>
          <label htmlFor="idActSelect">
            Choose an account:
            <select
              id="idActSelect"
              ref={(act) => { this.act = act; }}
              placeholder="Please select an account"
              defaultValue="Please select an account"
            >
              {acts.length
                ? acts
                : <option key="0">Please select an account</option>}
            </select>
            <input
              label="amount"
              ref={(amnt) => { this.amnt = amnt; }}
              name="amnt"
              type="text"
              placeholder="enter amount"
            />
          </label>
          <p>
            <button name="deposit" type="button" onClick={this.onDep}>Deposit</button>
            <button name="withdraw" type="button" onClick={this.onWd}>Withdraw</button>
          </p>
        </form>
      </div>
    );
  }
}

export default DepositWithdraw;
