
const functions = {

    createCard: (text) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'clCard'); //applying premade css to new divs
                   
        // console.log('The input text is:', text);
        
         //Add the input text at top of card
        div.appendChild(document.createTextNode(text));

            //Add the buttons to the card
        const addBtn = document.createElement('button');
        addBtn.appendChild(document.createTextNode("After"));
        div.appendChild(addBtn);

        const beforeBtn = document.createElement('button');
        beforeBtn.appendChild(document.createTextNode("Before"));
        div.appendChild(beforeBtn);

        const delBtn = document.createElement('button');
        delBtn.appendChild(document.createTextNode("Delete"));
        div.appendChild(delBtn);

        // console.log('div innerHTML is:', div.innerHTML);
        
        return div;
    },

    addBeforeCard: (node, text) => {
        const card = functions.createCard(text);
        node.parentElement.insertBefore(card, node);
    }

};


export default functions;
