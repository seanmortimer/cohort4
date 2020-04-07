import {Account, AccountController, htmlFunctions} from './account.js';


// Initial account controller

const user1 = new AccountController;
user1.newAccount('Chequing', 500);

// Event listeners
idDeposit.addEventListener('click', () => {
    if (idDWInput.value > 0) {
        user1.deposit(idAcctSelect.value, idDWInput.value);
    }
    clearInput();
    updateDisplay(idAcctSelect.value);
})


idWithdraw.addEventListener('click', () => {
    if (idDWInput.value > 0) {
        user1.withdraw(idAcctSelect.value, idDWInput.value);
    }
    clearInput();
    updateDisplay(idAcctSelect.value);
})

idDelAct.addEventListener('click', (e) => { // Also need to delete the acutal account!
    htmlFunctions.delCard(e);
    console.log('del chequiing?');
    
})


// Display functions
const clearInput = () => {
    idDWInput.value = "";
}

const updateDisplay = (actName) => {
    idAcct1Balance.textContent =  `$ ${user1.getBalance(actName)} `;
}

const createAccount = (actName) => {
    user1.newAccount(actName);
    
}



const savings = htmlFunctions.newAccount('Savings');
idLeftPanel.append(savings);

updateDisplay('Chequing');