import {Account, AccountController, htmlFunctions} from './account.js';

// Display functions
const clearInput = () => {
    idDWInput.value = "";
    idActName.value = "";
}

// Update all the names and values on the page
const updateDisplay = (actName) => {
    const actID =  document.getElementById('id' + actName);
    actID.textContent =  `$ ${user1.getBalance(actName)}`;
    
    idTotalBalance.textContent = `$ ${user1.accountTotal()}`;
    idHighestName.textContent = `${user1.getHighest().actName}:`;
    idHighest.textContent = `$ ${user1.getHighest().balance.toFixed(2)}`;
    idLowestName.textContent = `${user1.getLowest().actName}:`;
    idLowest.textContent = `$ ${user1.getLowest().balance.toFixed(2)}`;
}

const createAccount = (actName, startBal) => {
    user1.newAccount(actName, startBal);
    idAcctSelect.appendChild(htmlFunctions.newActListItem(actName));
    idLeftPanel.appendChild(htmlFunctions.newAccount(actName));
    updateDisplay(actName);
    clearInput();
}


// Initial account controller

const user1 = new AccountController;

// Event listeners
idDeposit.addEventListener('click', () => {
    if (idDWInput.value > 0) {
        const actName = idAcctSelect.value;
        const amount = idDWInput.value;
        user1.deposit(actName, amount);
        clearInput();
        updateDisplay(actName);
    }
})


idWithdraw.addEventListener('click', () => {
    if (idDWInput.value > 0) {
        const actName = idAcctSelect.value;
        const amount = idDWInput.value;
        user1.withdraw(actName, amount);
        clearInput();
        updateDisplay(actName);
    }
})

idNewAct.addEventListener('click', () => {
        
    if (idActName.value.length > 0) {
        createAccount(idActName.value, 0);
        
    }
})


createAccount('Chequing', 500);
createAccount('Savings', 1000);





