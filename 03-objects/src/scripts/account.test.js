import {Account, AccountController, htmlFunctions} from './account.js';

let acct1;
let acct2;
let user1;
let user2;

beforeEach(() => {
    acct1 = new Account('Sean', 100);
    acct2 = new Account('Chequing', 295.48);
    user1 = new AccountController([acct1, acct2]);
    user1.newAccount('Sean', 100);
    user1.newAccount('Chequing', 295.48);
    user2 = new AccountController([]);
});



test('test plumbing / class creation', () => {
    expect(acct1).toEqual({actName: 'Sean', balance: 100});
    expect(acct2).toEqual({actName: 'Chequing', balance: 295.48});
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
    expect(acct1.showBalance()).toBe(100);
    expect(acct2.showBalance()).toBe(295.48);
    
    acct1.deposit(100.57);
    acct2.deposit(100.57);
    expect(acct1.showBalance()).toBe(200.57);
    expect(acct2.showBalance()).toBe(396.05);
});


test('test AccountController Import', () => {
    expect(user1.accounts)
        .toEqual([
            {"actName": "Sean", "balance": 100}, 
            {"actName": "Chequing", "balance": 295.48}
        ]);
    expect(user2.accounts).toEqual([]);
});


test('test account creation', () => {
    expect(user1.newAccount('Savings', 1000))
        .toEqual([
            { "actName": "Sean", "balance": 100},
            { "actName": "Chequing", "balance": 295.48},
            { "actName": "Savings", "balance": 1000.00},
        ]);
    expect(user1.newAccount('Vacation', 2995.44))
        .toEqual([
            { "actName": "Sean", "balance": 100},
            { "actName": "Chequing", "balance": 295.48},
            { "actName": "Savings", "balance": 1000.00},
            { "actName": "Vacation", "balance": 2995.44},
        ]);
    expect(user1.newAccount('Greek Yoghurt', 0))
        .toEqual([
            { "actName": "Sean", "balance": 100},
            { "actName": "Chequing", "balance": 295.48},
            { "actName": "Savings", "balance": 1000.00},
            { "actName": "Vacation", "balance": 2995.44},
            { "actName": "Greek Yoghurt", "balance": 0}
        ]);
    expect(user2.newAccount('Savings', 1000))
        .toEqual([
            { "actName": "Savings", "balance": 1000.00},
        ]);
    expect(user2.newAccount('Vacation', 2995.44))
        .toEqual([
            { "actName": "Savings", "balance": 1000.00},
            { "actName": "Vacation", "balance": 2995.44},
        ]);
    expect(user2.newAccount('Greek Yoghurt', 0))
        .toEqual([
            { "actName": "Savings", "balance": 1000.00},
            { "actName": "Vacation", "balance": 2995.44},
            { "actName": "Greek Yoghurt", "balance": 0}
        ]);
});


test('test account deletion', () => {
    user1.newAccount('Savings', 1000);
    user1.newAccount('Vacation', 2995.44);
    expect(user1.accounts)
    .toEqual([
        { "actName": "Sean", "balance": 100},
        { "actName": "Chequing", "balance": 295.48},
        { "actName": "Savings", "balance": 1000.00},
        { "actName": "Vacation", "balance": 2995.44},
    ]);
    expect(user1.deleteAccount('Sean')) 
        .toEqual([
            { "actName": "Chequing", "balance": 295.48},
            { "actName": "Savings", "balance": 1000.00},
            { "actName": "Vacation", "balance": 2995.44},
        ]);
    expect(user1.deleteAccount('Savings')) 
        .toEqual([
            { "actName": "Chequing", "balance": 295.48},
            { "actName": "Vacation", "balance": 2995.44},
        ]);

    user2.newAccount('Vacation', 2995.44)
    expect(user2.deleteAccount('Vacation')).toEqual([]);
});


test('test account total function', () => {
    expect(user1.accountTotal()).toBe('395.48');
    expect(user1.deposit('Sean', 10)).toBe('110.00');
    expect(user1.accountTotal()).toBe('405.48');
    user1.newAccount('Savings', 1000);
    expect(user1.accountTotal()).toBe('1405.48');
    
    expect(user2.accountTotal()).toBe('0.00');

});


test('test account controller deposits', () => {
    expect(user1.deposit('Chequing', 50)).toBe('345.48');
    expect(user1.deposit('Chequing', 50)).toBe('395.48');
    expect(user1.deposit('Chequing', 0.52)).toBe('396.00');
    expect(user1.deposit('Sean', 100)).toBe('200.00');
});


test('test account controller withdraw', () => {
    expect(user1.withdraw('Chequing', 50)).toBe('245.48');
    expect(user1.withdraw('Chequing', 50.48)).toBe('195.00');
    expect(user1.withdraw('Chequing', 0.52)).toBe('194.48');
    expect(user1.withdraw('Sean', 100)).toBe('0.00');
});


test('test account controller balance check', () => {
    expect(user1.getBalance('Chequing')).toBe('295.48');
    expect(user1.getBalance('Sean')).toBe('100.00');
    user1.deposit('Sean', 50);
    expect(user1.getBalance('Sean')).toBe('150.00');

});

test('test highest account', () => {
    expect(user1.getHighest()).toEqual({actName: 'Chequing', balance: 295.48});
    user1.deposit('Sean', 500);
    expect(user1.getHighest()).toEqual({actName: 'Sean', balance: 600.00});
    user1.newAccount('Savings', 1000);
    expect(user1.getHighest()).toEqual({actName: 'Savings', balance: 1000.00});
    user1.withdraw('Savings', 999);
    user1.withdraw('Sean', 599);
    expect(user1.getHighest()).toEqual({actName: 'Chequing', balance: 295.48});
});


test('test lowest account', () => {
    expect(user1.getLowest()).toEqual({actName: 'Sean', balance: 100});
    user1.deposit('Sean', 500);
    expect(user1.getLowest()).toEqual({actName: 'Chequing', balance: 295.48});
    user1.newAccount('Savings', 1000);
    expect(user1.getLowest()).toEqual({actName: 'Chequing', balance: 295.48});
    user1.withdraw('Savings', 999);
    expect(user1.getLowest()).toEqual({actName: 'Savings', balance: 1});
});

test('test account card creation', () => {
    const testCard = htmlFunctions.newAccount('Savings')
    const pTags = testCard.querySelectorAll('P');

    expect(testCard.nodeName).toBe('DIV');
    expect(testCard.className).toBe('clCard');
    expect(testCard.firstElementChild.nodeName).toBe('H3');
    expect(testCard.firstElementChild.textContent).toBe('Savings');
   
    expect(pTags[0].nodeName).toBe('P');
    expect(pTags[0].textContent).toBe('Balance:');
    expect(pTags[0].firstElementChild.nodeName).toBe('SPAN');
    expect(pTags[0].firstElementChild.id).toBe('idSavings');

    expect(pTags[1].nodeName).toBe('P');
    expect(pTags[1].textContent).toBe('Delete Account');
    expect(pTags[1].firstElementChild.nodeName).toBe('BUTTON');
    
});

test('test account card deletion', () => {
    const div = document.createElement('DIV');
    const testCard1 = htmlFunctions.newAccount('Savings')
    const testCard2 = htmlFunctions.newAccount('Chequing')
    div.appendChild(testCard1);
    div.appendChild(testCard2);
    let actNames = div.querySelectorAll('SPAN');

    expect(actNames[0].id).toBe('idSavings');
    expect(actNames[1].id).toBe('idChequing');

    htmlFunctions.delAct(div.firstChild);
    actNames = div.querySelectorAll('SPAN');

    expect(actNames[0].id).toBe('idChequing');

});


test('test account list update function', () => {
    const list = document.createElement('SELECT');
    const listItem1 = htmlFunctions.newActListItem('Vacation');
    const listItem2 = htmlFunctions.newActListItem('Party');
    expect(list.children.length).toBe(0);
    
    list.appendChild(listItem1);
    expect(list.children.length).toBe(1);
    expect(list.children[0].nodeName).toBe('OPTION');

    list.appendChild(listItem2);
    expect(list.children.length).toBe(2);
    expect(list.children[0].value).toBe('Vacation');
});


test('test account list deletion', () => {
    const list = document.createElement('SELECT');
    const listItem1 = htmlFunctions.newActListItem('Vacation');
    const listItem2 = htmlFunctions.newActListItem('Party');

    list.appendChild(listItem1);
    list.appendChild(listItem2);
    expect(list.children[0].value).toBe('Vacation');
    expect(list.children[1].value).toBe('Party');

    htmlFunctions.delListItem(listItem1);
    expect(list.children[0].value).toBe('Party');

});