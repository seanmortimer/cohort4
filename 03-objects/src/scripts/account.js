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
      return this.balance.toFixed(2);
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
    // const tempArray = this.accounts.filter(acct => acct.actName != 'Sean');
    this.accounts = this.accounts.filter(acct => acct.actName != delAct);
    return this.accounts;
  }
}

export  {Account, AccountController};