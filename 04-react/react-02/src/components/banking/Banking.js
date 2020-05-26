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
      notif: { action: 'welco', actName: '', amnt: null },
    };
    this.handleActCreate = this.handleActCreate.bind(this);
    this.handleActDelete = this.handleActDelete.bind(this);
    this.handleDepWithdraw = this.handleDepWithdraw.bind(this);
  }

  handleActCreate(newAct) {
    if (!newAct) return;
    const accounts = this.state.accounts.slice();
    const dupe = accounts.filter((act) => (newAct === act.actName));
    if (dupe.length > 0) {
      this.setState(() => ({ notif: { action: 'actExists', actName: newAct } }));
      return;
    }
    accounts.push({ actName: newAct, key: newAct, balance: 0 });
    this.setState(() => ({
      accounts,
      notif: { action: 'newAct', actName: newAct },
    }));
  }

  handleActDelete(delAct) {
    const accounts = this.state.accounts.filter((act) => delAct !== act.key);
    this.setState(() => ({ accounts }));
  }

  handleDepWithdraw(act, amnt) {
    const { actName } = act;
    if (amnt === null) {
      this.setState(() => ({ notif: { action: 'nan' } }));
      return;
    }
    // console.log('this.state.accounts :>> ', this.state.accounts);
    const accounts = this.state.accounts.map((a) => {
      if (actName === a.actName) {
        return { actName, key: actName, balance: a.balance + amnt };
      }
      return a;
    });
    if (amnt > 0) {
      this.setState(() => ({
        accounts,
        notif: { action: 'dep', actName, amnt },
      }));
    }
    if (amnt < 0) {
      this.setState(() => ({
        accounts,
        notif: { action: 'wd', actName, amnt: amnt * -1 },
      }));
    }
  }

  render() {
    const acts = this.state.accounts.map((act) =>
      <ActCard key={act.actName} act={act} onDel={this.handleActDelete} />);

    return (
      <main>
        <Title />
        <DepositWithdraw accounts={this.state.accounts} onDW={this.handleDepWithdraw} />
        <ActCreator onNewAct={this.handleActCreate} />
        <Notification notif={this.state.notif} />
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
