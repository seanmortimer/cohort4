class Account {
  constructor(actName, balance) {
      this.actName = actName;
      this.balance = balance;
  }

  deposit (amount) {
    this.balance = Math.round((this.balance * 100 + amount * 100) ) / 100;
     return this.balance;
  }

  withdraw (amount) {
      this.balance = Math.round((this.balance * 100 - amount * 100)) / 100;
      return this.balance;
  }

  showBalance () {
      return this.balance;
  }

}

class AccountController {
  constructor() {
    this.accounts = [];
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

const htmlFunctions = {
  
  newAccount: (actName) => {
    const card = document.createElement('DIV');
    card.className = 'clCard';

    const h3 = document.createElement('H3');
    h3.appendChild(document.createTextNode(actName)); 
    h3.className = 'clActName';
    card.appendChild(h3);


    const p1 = document.createElement('P');
    p1.appendChild(document.createTextNode('Balance:'))
    card.appendChild(p1);
    const balance = document.createElement('SPAN');
    balance.id = 'id' + actName;
    p1.appendChild(balance);

    const p2 = document.createElement('P');
    const delBtn = document.createElement('button');
    delBtn.id = 'idDelBtn';
    delBtn.appendChild(document.createTextNode('Delete Account'));
    

    p2.appendChild(delBtn);
    card.appendChild(p2);

    return card;
  },

  delAct: (card) => {
    card.remove();
    
  },

  newActListItem: (actName) => {
    // Take in account name, return option item
    const actItem = document.createElement('OPTION')
    
    actItem.value = actName;
    actItem.id = 'idList' + actName;
    actItem.textContent = actName;
    return actItem;
  },

  delListItem: (item) => {
    item.remove();
    
  }

};

export  {Account, AccountController, htmlFunctions};