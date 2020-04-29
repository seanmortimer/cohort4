import { City, Community } from './cityclasses.js';
import fetchFunctions from './fetch.js'

// Create our community
const community = new Community;

// Display functions
const clearInput = () => {
    idDWInput.value = "";
    idActName.value = "";
}

    // Update all the names and balances on the page
const updateDisplay = () => {
    // for (let act of user1.accounts) {
    //     const actName = act.actName
    //     const actID = document.getElementById('id' + actName);
    //     actID.textContent = `$ ${user1.getBalance(actName)}`;
    // }

    idNorth.textContent = `$ ${user1.accountTotal()}`;

    idHighestName.textContent = `${user1.getHighest().actName}:`;
    idHighest.textContent = `$ ${user1.getHighest().balance.toFixed(2)}`;
    idLowestName.textContent = `${user1.getLowest().actName}:`;
    idLowest.textContent = `$ ${user1.getLowest().balance.toFixed(2)}`;
}

const createAccount = (actName, startBal) => {
    if (user1.newAccount(actName, startBal) === -1) {
        idDialog.textContent = `Account ${actName} already exists.`
        clearInput();

        return;
    }

    idAcctSelect.appendChild(htmlFunctions.newActListItem(actName));
    idLeftPanel.appendChild(htmlFunctions.newAccount(actName));
    idDialog.textContent = `Account ${actName} was created.`
    updateDisplay();
    clearInput();
}

const deleteAccount = (card) => {
    const actName = card.querySelector('.clActName').textContent;
    const item = document.getElementById('idList' + actName);

    user1.deleteAccount(actName);
    htmlFunctions.delAct(card);
    htmlFunctions.delListItem(item);
    idDialog.textContent = `Account ${actName} was deleted.`
    updateDisplay();

}



document.body.addEventListener('click', e => {
    const target = e.target;

    if (target.nodeName === 'BUTTON') {
        const actName = idAcctSelect.value;
        const amount = Number(idDWInput.value).toFixed(2);
        const newAct = idActName.value;

        if (actName && amount > 0) {
            switch (target.id) {
                case 'idDeposit':
                    user1.deposit(actName, amount);
                    idDialog.textContent = `$ ${amount} was deposited to ${actName}.`

                    break;

                case 'idWithdraw':
                    user1.withdraw(actName, amount);
                    idDialog.textContent = `$ ${amount} was withdrawn from ${actName}.`
                    break;


                default:
            }
            clearInput();
            updateDisplay();
        }
        if (newAct && target.id === 'idNewAct') createAccount(newAct, 0);
        if (target.id === 'idDelBtn') deleteAccount(target.parentNode.parentNode);
    }
})


createAccount('Chequing', 500);
createAccount('Savings', 1000);





