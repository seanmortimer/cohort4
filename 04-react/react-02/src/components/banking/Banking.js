import React, { Component } from 'react';
import Title from './Title';
import DepositWithdraw from './DepositWithdraw';
import './Banking.css';

class Banking extends Component {
  render() {
    return (
      <main>
        <Title />
        <DepositWithdraw />
        {/* <ActCreator></ActCreator> */}
        {/* <Messages></Messages> */}
        {/* <ActContainer></ActContainer> // This might not be neccessary? */}
      </main>
    );
  }
}

export default Banking;
