class Account {
  constructor(actName, balance) {
      this.actName = actName;
      this.balance = balance;
  }

  deposit (amount) {
    this.balance = Math.round((this.balance + amount) * 100) / 100;
     return this.balance;
  }

  withdraw (amount) {
      this.balance = Math.round((this.balance - amount) * 100) / 100;
      return this.balance;
  }

  showBalance () {
      return this.balance;
  }

}

class AccountController {
  constructor(accounts) {
    this.accounts = accounts;
  }

  newAccount (actName, startBalance) {
    const act =  new Account(actName, startBalance);
    this.accounts.push(act);
    return this.accounts;
  }

  deleteAccount (delAct) {
    this.accounts = this.accounts.filter(acct => acct.actName != delAct);
    return this.accounts;
  }
  
  accountTotal () {
    const total = this.accounts.reduce((
      accum, account) => accum + account.balance, 0);
    return total.toFixed(2);
  }

  deposit (name, amount) {
   const acct = this.accounts.find(acct => acct.actName === name);
    acct.deposit(amount);
    return acct.balance.toFixed(2);
  }

  withdraw (name, amount) {
    const acct = this.accounts.find(acct => acct.actName === name);
     acct.withdraw(amount);
     return acct.balance.toFixed(2);
   }

  getBalance (name) {
    const acct = this.accounts.find(acct => acct.actName === name);
    return acct.showBalance().toFixed(2);
  }

  getHighest () {
    const acct = this.accounts.reduce((accum, account) => {
        if (accum.balance < account.balance) return account;
        return accum;
      }, this.accounts[0]);

    return acct;
  }

  getLowest () {
    const acct = this.accounts.reduce((accum, account) => {
        if (accum.balance > account.balance) return account;
        return accum;
      }, this.accounts[0]);

    return acct;
  }

}

export  {Account, AccountController};