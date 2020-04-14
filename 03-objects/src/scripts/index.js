import { Account, AccountController, htmlFunctions } from './account.js';
// Initial account controller
const user1 = new AccountController;

// Display functions
const clearInput = () => {
    idDWInput.value = "";
    idActName.value = "";
}

// Update all the names and values on the page
const updateDisplay = (actName) => {
    const actID = document.getElementById('id' + actName);
    actID.textContent = `$ ${user1.getBalance(actName)}`;

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

const deleteAccount = (card) => {
    const actName = card.querySelector('.clActName').textContent;
    const item = document.getElementById('idList' + actName);
      
    user1.deleteAccount(actName);
    htmlFunctions.delAct(card);
    htmlFunctions.delListItem(item);
}



document.body.addEventListener('click', e => {
    const target = e.target;

    if (target.nodeName === 'BUTTON') {
        const actName = idAcctSelect.value;
        const amount = idDWInput.value;
        const newAct = idActName.value;

        if (actName && amount) {
            switch (target.id) {
                case 'idDeposit':
                    user1.deposit(actName, amount);
                    break;

                case 'idWithdraw':
                    user1.withdraw(actName, amount);
                    break;


                default:
            }
            console.log('id:', target.id);

            clearInput();
            updateDisplay(actName);
        }
        if (newAct && target.id === 'idNewAct') createAccount(newAct, 0);
        if (target.id === 'idDelBtn') deleteAccount(target.parentNode.parentNode);
}})


createAccount('Chequing', 500);
createAccount('Savings', 1000);





