import React, { Component } from 'react';
import Banking from './Banking';

class DepositWithdraw extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const label = 'Deposit or Withdraw:';
    return (
      <div>
        <h3 role="heading">{label}</h3>
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