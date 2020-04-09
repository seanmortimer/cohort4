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

idNewAct.addEventListener('click', () => {
    const actName = idActName.value;
    
    if (actName.length > 0) {
        console.log(actName);
        
        user1.newAccount(actName);
        idAcctSelect.appendChild(htmlFunctions.newActListItem(actName));

    }
})

idDelAct.addEventListener('click', (e) => { // Also need to delete the acutal account!
    htmlFunctions.delAct(e.target.parentNode.parentNode);
    console.log('del chequing');
    
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
    // htmlFunctions.newAccount(actName);
    
}



// const savings = createAccount('Savings');
// idLeftPanel.append(savings);

updateDisplay('Chequing');