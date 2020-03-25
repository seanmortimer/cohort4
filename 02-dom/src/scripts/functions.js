
const functions = {

    createCard: (text) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'clCard'); //applying premade css to new divs
                   
        const cardTitle = document.createElement('p');
        cardTitle.setAttribute('class', 'cardTitles'); //applying premade css to new divs
        
         //Add the input text at top of card
        cardTitle.appendChild(document.createTextNode(text));
        div.appendChild(cardTitle);

            //Add the buttons to the card
        const addBtn = document.createElement('button');
        addBtn.appendChild(document.createTextNode("Insert after"));
        div.appendChild(addBtn);

        const beforeBtn = document.createElement('button');
        beforeBtn.appendChild(document.createTextNode("Insert before"));
        div.appendChild(beforeBtn);

        const delBtn = document.createElement('button');
        delBtn.appendChild(document.createTextNode("Delete card"));
        div.appendChild(delBtn);

        // console.log('div innerHTML is:', div.innerHTML);
        
        return div;
    },

    addBeforeCard: (node, text) => {
        const card = functions.createCard(text);
        node.parentElement.insertBefore(card, node);
    },
    
    addAfterCard: (node, text) => {
        const card = functions.createCard(text);
        node.parentElement.insertBefore(card, node.nextElementSibling);
    },

    deleteCard(node) {
        node.remove();
    }

};


export default functions;
