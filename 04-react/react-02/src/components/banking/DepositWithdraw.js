import React, { Component } from 'react';

class DepositWithdraw extends Component {
  render() {
    const label = 'Deposit or Withdraw:';
    return (
      <div>
        <h3>{label}</h3>
        <form>
          <label>Choose an account:</label>
          <input label="actSelect" type="select" placeholder="Please select an account" />
          <input label="amnt" type="text" placeholder="enter amount" />
          <p>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </p>
        </form>
      </div>
    );
  }
}

export default DepositWithdraw;
