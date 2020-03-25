import functions from './functions.js'

const divs = document.querySelector("div");
const btns = document.querySelectorAll("button");
const log = document.getElementById('idOutputLog');
let cardNumber = 4

const divHandler = (event) => {
    console.log('Mouse was clicked on: ' + event.target.textContent );
};


const buttonHandler = (event) => {
    const card = event.target.parentNode;
    const cardTitle = card.getElementsByClassName('cardTitles')[0].textContent;

    switch (event.target.textContent) {
        case "Insert after":
            // console.log('"Insert after" was clicked: ');
            functions.addAfterCard(event.target.parentNode, "Card " + cardNumber);
            log.textContent = `Card ${cardNumber} was added after ${cardTitle}`;
            cardNumber++;
            break;

        case "Insert before":
            // console.log('"Insert before" was clicked: ');
            functions.addBeforeCard(card, "Card " + cardNumber);
            log.textContent = `Card ${cardNumber} was added before ${cardTitle}`;
            cardNumber++;
            break;

        case "Delete card":
            // console.log('"Delete" was clicked: ');
            functions.deleteCard(event.target.parentNode, "Card " + cardNumber);
            log.textContent = `${cardTitle} was deleted`;
            break;
    }
};

// divs.addEventListener('click', divHandler);
document.body.addEventListener('click', buttonHandler);