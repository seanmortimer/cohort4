import Account from './account.js';

// Initial account

const acct1 = new Account ('Chequing', 100);

// Event listeners
idDeposit.addEventListener('click', () => {
    if (idDWInput.value > 0) {
        acct1.deposit(Number(idDWInput.value));
        console.log('Deposit amount:', idDWInput.value);
        console.log('New balance:', acct1.showBalance());
    }
    clearInput();
    updateDisplay();
})


idWithdraw.addEventListener('click', () => {
    if (idDWInput.value > 0) {
        acct1.withdraw(Number(idDWInput.value));
        console.log('Deposit amount:', idDWInput.value);
        console.log('New balance:', acct1.showBalance());
    }
    clearInput();
    updateDisplay();
})


const clearInput = () => {
    idDWInput.value = "";
}

const updateDisplay = () => {
    idAcct1Balance.textContent =  `$ ${acct1.showBalance()} `;
    // idAcct1Balance.textContent = acct1.showBalance();
}

updateDisplay();