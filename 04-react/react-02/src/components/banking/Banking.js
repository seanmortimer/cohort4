import React, { Component } from 'react';
import Title from './Title';
import DepositWithdraw from './DepositWithdraw';
import Notification from './Notification';
import ActCreator from './ActCreator';
import './Banking.css';
import ActContainer from './ActContainer';


const ACCOUNTS = [
  { actName: 'Chequing', balance: 500 },
  { actName: 'Savings', balance: 1000 },
  { actName: 'Vacation', balance: 2000 },
  { actName: 'Napkins', balance: 3000 },
  { actName: 'Sauce', balance: 5000 },
];

const MESSAGE = 'Welcome! Please create an account.'

class Banking extends Component {
  render() {
    return (
      <main>
        <Title />
        <DepositWithdraw accounts={ACCOUNTS} />
        <ActCreator />
        <Notification message={MESSAGE} />
        <ActContainer account={ACCOUNTS} />
      </main>
    );
  }
}



export default Banking;
