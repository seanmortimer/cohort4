import functions from './functions.js'

const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

const log = document.getElementById('idOutputLog');
let cardNumber = 4


const buttonHandler = (event) => {
    const targetParent = event.target.parentNode;
    const className = targetParent.getElementsByClassName('cardTitles')[0];
    
    switch (event.target.textContent) {
        // Card function buttons
        case "Insert after":
            functions.addAfterCard(targetParent, "Card " + cardNumber);
            log.textContent =
                `Card ${cardNumber} was added after ${className.textContent}`;
            cardNumber++;
            break;

        case "Insert before":
            functions.addBeforeCard(targetParent, "Card " + cardNumber);
            log.textContent = 
                `Card ${cardNumber} was added before ${className.textContent}`;
            cardNumber++;
            break;

        case "Delete card":
            functions.deleteCard(targetParent);
            log.textContent = `${className.textContent} was deleted`;
            break;

        // List button functions
        case "Add to top":
            if (input.value.length > 0) {
                ul.insertBefore(functions.createListItem(input.value), ul.firstElementChild)
                log.textContent = `${input.value} was added at the top of the list`;
                input.value = "";
            }
            break;

        case "Add to bottom":
            if (input.value.length > 0) {
                ul.appendChild(functions.createListItem(input.value));
                log.textContent = `${input.value} was added at the bottom of the list`;
                input.value = "";
            }
            break;

        case "Delete":
            log.textContent = 
                `${targetParent.textContent.slice(0, -6)} was deleted from the list`;
            functions.deleteCard(targetParent);
            break;
    }
    
    if (event.target.tagName === 'LI') { event.target.classList.toggle("clListDone") }

};

document.body.addEventListener('click', buttonHandler);