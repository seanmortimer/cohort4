import React, { Component } from 'react';
import Title from './Title';
import DepositWithdraw from './DepositWithdraw';
import Notification from './Notification';
import ActCreator from './ActCreator';
import './Banking.css';

class Banking extends Component {
  render() {
    return (
      <main>
        <Title />
        <DepositWithdraw />
        <ActCreator />
        <Notification />
        {/* <ActContainer></ActContainer> // This might not be neccessary? */}
      </main>
    );
  }
}

export default Banking;
