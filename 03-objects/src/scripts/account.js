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



export default Account;