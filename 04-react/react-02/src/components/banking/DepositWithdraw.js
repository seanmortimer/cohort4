import React, { Component } from 'react';

class DepositWithdraw extends Component {
  render() {
    const acts = [];
    const label = 'Deposit or Withdraw:';

    this.props.accounts.forEach((act) => {
      acts.push(
        <option key={act.actName}>{act.actName}</option>,
      );
    });

    return (
      <div id="idDepWd">
        <h3>{label}</h3>
        <form>
          <label htmlFor="idActSelect">
            Choose an account:
            <select
              id="idActSelect"
              placeholder="Please select an account"
              defaultValue="Please select an account"
            >
              {acts.length
                ? acts
                : <option key="0">Please select an account</option>}
            </select>
            <input label="amnt" type="text" placeholder="enter amount" />
          </label>
          <p>
            <button type="button">Deposit</button>
            <button type="button">Withdraw</button>
          </p>
        </form>
      </div>
    );
  }
}

export default DepositWithdraw;
