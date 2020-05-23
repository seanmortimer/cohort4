import React, { Component } from 'react';

class DepositWithdraw extends Component {
  render() {
    const label = 'Deposit or Withdraw:';
    return (
      <div>
        <h3>{label}</h3>
        <form>
          <label htmlFor="idActSelect">
            Choose an account:
            <select
              id="idActSelect"
              placeholder="Please select an account"
              defaultValue="Please select an account"
            >
              <option
                value="Please select an account"
                disabled
              >
                Please select an account
              </option>
            </select>
          </label>
          <input label="amnt" type="text" placeholder="enter amount" />
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
