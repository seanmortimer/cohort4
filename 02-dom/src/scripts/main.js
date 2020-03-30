import functions from './functions.js'

const divs = document.querySelector("div");
let btns = document.querySelectorAll("button");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

const log = document.getElementById('idOutputLog');
let cardNumber = 4


const buttonHandler = (event) => {
    const card = event.target.parentNode;
    let cardTitle = '';

    if ( card.getElementsByClassName('cardTitles')[0]) {
        cardTitle = card.getElementsByClassName('cardTitles')[0].textContent;
   

    switch (event.target.textContent) {
        case "Insert after":
            functions.addAfterCard(event.target.parentNode, "Card " + cardNumber);
            log.textContent = `Card ${cardNumber} was added after ${cardTitle}`;
            cardNumber++;
            break;

        case "Insert before":
            functions.addBeforeCard(card, "Card " + cardNumber);
            let tempLog = `Card ${cardNumber} was added before ${cardTitle}`;
            
            log.innerText = tempLog
            console.log(tempLog);
            
            cardNumber++;
            break;

        case "Delete card":
            functions.deleteCard(card);
            log.textContent = `${cardTitle} was deleted`;
            break;
    }}

    else if (event.target.tagName === 'LI') {event.target.classList.toggle("clListDone")}

    else   {
        switch (event.target.textContent) {
            case "Add to top":
                if (input.value.length > 0){
                    const li = document.createElement("li");
                    console.log('ul', ul.firstElementChild);
                    console.log('input text:', input.innerHTML);
                    
                    li.appendChild(document.createTextNode(input.value));
                    ul.insertBefore(li, ul.firstElementChild)
                    console.log(ul);
                    
                    // ul.firstChild.append(li);
                    ul.appendChild.innerHTML = "<button>Delete</button>";
                log.textContent = 
                `${input.value} was added at the top of the list`;

                    input.value = "";
                    }
                break;
        
            case "Add to bottom":
                if (input.value.length > 0){
                const li = document.createElement("li");

                li.appendChild(document.createTextNode(input.value));

                ul.appendChild(li);
                ul.appendChild.innerHTML =  "<button>Delete</button>";
                log.textContent = 
                    `${input.value} was added at the bottom of the list`;

                input.value = "";
                }
                break;

            case "Delete":
                log.textContent = `${card.textContent.slice(0, -6)} was deleted`;
                log.textContent = `${seaniscool} was deleted`;
                batman = "hi";
                functions.deleteCard(card);
                break;
        }
        

    }
   
};

// divs.addEventListener('click', divHandler);
document.body.addEventListener('click', buttonHandler);