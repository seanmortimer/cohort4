import React, { Component } from 'react';

class DepositWithdraw extends Component {
  constructor(props) {
    super(props);
    this.onDep = this.onDep.bind(this);
    this.onWd = this.onWd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  onDep() {
    let amnt = this.amnt.value;
    const act = this.props.accounts.find((a) => a.actName === this.act.value);
    if (!act || !amnt) return;
    if (!amnt.match(/^[0-9.]+$/)) {
      this.props.onDW(act, null);
      return;
    }
    amnt = Number(amnt);
    this.props.onDW(act, amnt);
    this.amnt.value = '';
  }

  onWd() {
    const amnt = this.amnt.value;
    const act = this.props.accounts.find((a) => a.actName === this.act.value);
    if (!act || !amnt) return;
    if (!this.validate(amnt)) {
      this.props.onDW(act, null);
      return;
    }
    this.props.onDW(act, amnt * -1);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  validate() {
    if (!this.amnt.value.match(/^[0-9.]+$/)) {
      this.props.onDW(null, 'nan');
      return false;
    }
    return true;
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
        <form onSubmit={this.onSubmit}>
          <label htmlFor="idActSelect">
            Choose an account:
            <select
              id="idActSelect"
              ref={(act) => { this.act = act; }}
              placeholder="Please select an account"
              defaultValue="Please select an account"
            >
              {acts}
              {/* {acts.length
                ? acts
                : <option key="0">Please select an account</option>} */}
            </select>
            <input
              label="amount"
              ref={(amnt) => { this.amnt = amnt; }}
              name="amnt"
              type="text"
              placeholder="enter amount"
              onChange={this.validate}
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
