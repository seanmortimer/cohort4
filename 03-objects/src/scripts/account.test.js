import {Account, AccountController} from './account.js';

let acct1;
let acct2;
let accounts;

beforeEach(() => {
    acct1 = new Account('Sean', 100);
    acct2 = new Account('Chequing', 295.48);
    accounts = new AccountController([acct1, acct2]);
    
});

test('test plumbing / class creation', () => {
    expect(acct1).toEqual({actName: 'Sean', balance: 100 });
    expect(acct2).toEqual({actName: 'Chequing', balance: 295.48 });
});


test('test deposit funciton', () => {
    expect(acct1.deposit(10)).toBe(110);
    expect(acct1.balance).toBe(110);
    expect(acct2.deposit(10)).toBe(305.48);
    expect(acct2.balance).toBe(305.48);

    expect(acct1.deposit(1000)).toBe(1110);
    expect(acct1.balance).toBe(1110);
    expect(acct2.deposit(1000)).toBe(1305.48);
    expect(acct2.balance).toBe(1305.48);


    expect(acct1.deposit(0)).toBe(1110);
    expect(acct1.balance).toBe(1110);
    expect(acct2.deposit(0)).toBe(1305.48);
    expect(acct2.balance).toBe(1305.48);

    expect(acct1.deposit(982.55)).toBe(2092.55);
    expect(acct1.balance).toBe(2092.55);
    expect(acct2.deposit(982.55)).toBe(2288.03);
    expect(acct2.balance).toBe(2288.03);
});


test('test withdraw function', () => {
    expect(acct1.withdraw(10)).toBe(90);
    expect(acct1.balance).toBe(90);
    expect(acct2.withdraw(10)).toBe(285.48);
    expect(acct2.balance).toBe(285.48);

    expect(acct1.withdraw(0)).toBe(90);
    expect(acct1.balance).toBe(90);
    expect(acct2.withdraw(0)).toBe(285.48);
    expect(acct2.balance).toBe(285.48);

    expect(acct1.withdraw(82.55)).toBe(7.45);
    expect(acct1.balance).toBe(7.45);
    expect(acct2.withdraw(82.55)).toBe(202.93);
    expect(acct2.balance).toBe(202.93);

    expect(acct1.withdraw(1000.01)).toBe(-992.56);
    expect(acct1.balance).toBe(-992.56);
    expect(acct2.withdraw(1000.01)).toBe(-797.08);
    expect(acct2.balance).toBe(-797.08);
});


test('test show balance function', () => {
    expect(acct1.showBalance()).toBe('100.00');
    expect(acct2.showBalance()).toBe('295.48');
    
    acct1.deposit(100.57);
    acct2.deposit(100.57);
    expect(acct1.showBalance()).toBe('200.57');
    expect(acct2.showBalance()).toBe('396.05');
});


test('test AccountController Import', () => {
    expect(accounts.accounts)
        .toEqual([
            {"actName": "Sean", "balance": 100}, 
            {"actName": "Chequing", "balance": 295.48}
        ]);
});

test('test account creation', () => {
    expect(accounts.newAccount('Savings', 1000))
        .toEqual([
            { "actName": "Sean", "balance": 100 },
            { "actName": "Chequing", "balance": 295.48 },
            { "actName": "Savings", "balance": 1000.00 },
        ]);
    expect(accounts.newAccount('Vacation', 2995.44))
        .toEqual([
            { "actName": "Sean", "balance": 100 },
            { "actName": "Chequing", "balance": 295.48 },
            { "actName": "Savings", "balance": 1000.00 },
            { "actName": "Vacation", "balance": 2995.44 },
        ]);
    expect(accounts.newAccount('Greek Yoghurt', 0))
        .toEqual([
            { "actName": "Sean", "balance": 100},
            { "actName": "Chequing", "balance": 295.48},
            { "actName": "Savings", "balance": 1000.00},
            { "actName": "Vacation", "balance": 2995.44},
            { "actName": "Greek Yoghurt", "balance": 0}
        ]);
});

test('test account deletion', () => {
    accounts.newAccount('Savings', 1000);
    accounts.newAccount('Vacation', 2995.44);
    expect(accounts.accounts)
    .toEqual([
        { "actName": "Sean", "balance": 100 },
        { "actName": "Chequing", "balance": 295.48 },
        { "actName": "Savings", "balance": 1000.00 },
        { "actName": "Vacation", "balance": 2995.44 },
    ]);

    expect(accounts.deleteAccount('Sean')) 
        .toEqual([
            { "actName": "Chequing", "balance": 295.48 },
            { "actName": "Savings", "balance": 1000.00 },
            { "actName": "Vacation", "balance": 2995.44 },
        ]);
    expect(accounts.deleteAccount('Savings')) 
        .toEqual([
            { "actName": "Chequing", "balance": 295.48 },
            { "actName": "Vacation", "balance": 2995.44 },
        ]);
});

test('test account total function', () => {
    expect(accounts.accountTotal()).toBe('395.48');
    expect(acct1.deposit(10)).toBe(110);
    expect(accounts.accountTotal()).toBe('405.48');

    accounts.newAccount('Savings', 1000);
    expect(accounts.accountTotal()).toBe('1405.48');
});


test('test account controller deposits', () => {
    expect(accounts.deposit('Chequing', 50)).toBe('345.48');
    expect(accounts.deposit('Chequing', 50)).toBe('395.48');
    expect(accounts.deposit('Chequing', 0.52)).toBe('396.00');
});

test('test account controller deposits', () => {
    expect(accounts.withdraw('Chequing', 50)).toBe('245.48');
    expect(accounts.withdraw('Chequing', 50.48)).toBe('195.00');
    expect(accounts.withdraw('Chequing', 0.52)).toBe('194.48');
});