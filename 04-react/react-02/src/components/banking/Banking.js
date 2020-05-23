import React, { Component } from 'react';
import Title from './Title';
import DepositWithdraw from './DepositWithdraw';
import Notification from './Notification';
import ActCreator from './ActCreator';
import './Banking.css';
import ActContainer from './ActContainer';

class Banking extends Component {
  render() {
    return (
      <main>
        <Title />
        <DepositWithdraw />
        <ActCreator />
        <Notification />
        <ActContainer />
      </main>
    );
  }
}

export default Banking;
