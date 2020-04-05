import Account from './account.js';
let acct1;
let acct2;

beforeEach(() => {
    acct1 = new Account('Sean', 100);
    acct2 = new Account('Chequing', 295.48);
    
});

test('test plumbing / class creation', () => {
    expect(acct1).toEqual({ actName: 'Sean', balance: 100 });
    expect(acct2).toEqual({ actName: 'Chequing', balance: 295.48 });
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


