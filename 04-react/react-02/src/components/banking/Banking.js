import React, { Component } from 'react';
import Title from './Title';
import DepositWithdraw from './DepositWithdraw';
import Notification from './Notification';
import ActCreator from './ActCreator';
import ActCard from './ActCard';
import ActTotals from './ActTotals';
import './Banking.css';

// const ACCOUNTS = [
//   { actName: 'Chequing', balance: 500.01 },
//   { actName: 'Savings', balance: 1000.02 },
//   { actName: 'Vacation', balance: 2000 },
//   { actName: 'Napkins', balance: 3000 },
//   { actName: 'Sauce', balance: 5000 },
// ];

// const MESSAGE = 'Welcome! Please create an account.';

class Banking extends Component {
  constructor(props) {
    super(props);
    // const welcoMsg = 'Welcome! Please create an account.';
    this.state = {
      accounts: [],
      notif: { action: 'null', msg: '' },
    };
    this.handleActCreate = this.handleActCreate.bind(this);
  }

  handleActCreate(newAct) {
    const accounts = this.state.accounts.slice();
    accounts.push({ actName: newAct, balance: 0 });
    this.setState(() => ({ accounts }));
  }

  render() {
    const acts = this.state.accounts.map((act) =>
      <ActCard key={act.actName} act={act} />);

    return (
      <main>
        <Title />
        <DepositWithdraw accounts={this.state.accounts} />
        <ActCreator onNewAct={this.handleActCreate} />
        <Notification msg={this.state.notif} />
        <div>
          <h2>Your Accounts</h2>
          <div id="idActContainer">
            <div id="idCardContainer">
              {acts.length
                ? acts
                : <div id="idNoActs">You currently have no accounts to display</div>}
            </div>
            <ActTotals accounts={this.state.accounts} />
          </div>
        </div>
      </main>
    );
  }
}


export default Banking;
