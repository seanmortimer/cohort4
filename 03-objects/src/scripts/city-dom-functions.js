const functions = {

    newCityCard: (city, hemis) => {
        // create card
        const card = document.createElement('DIV');
        card.className = 'card';
        card.id = 'idCard' + city.key;

        // card header
        const cardHeader = document.createElement('DIV');
        cardHeader.className = 'card-header';
        const title = document.createElement('H4');
        title.className = 'card-title'
        title.appendChild(document.createTextNode(city.name));
        const key = document.createElement('P');
        key.className = 'card-category';
        key.id = 'idCardKey' + city.key;
        key.appendChild(document.createTextNode('Key: ' + city.key));

        cardHeader.appendChild(title);
        cardHeader.appendChild(key);
        card.appendChild(cardHeader);

        // <p class="card-category">Last Campaign Performance</p>

        // card body
        const cardBody = document.createElement('DIV');
        cardBody.className = 'card-body';
        const row = document.createElement('DIV')
        row.className = 'row';
        const col1 = document.createElement('DIV');
        col1.classList.add('col-7', 'pr-0', 'font-weight-bold', 'text-nowrap')
        const div1 = document.createElement('DIV');
        div1.appendChild(document.createTextNode('Population:'));
        const div2 = document.createElement('DIV');
        div2.appendChild(document.createTextNode('Classification:'));
        const div3 = document.createElement('DIV');
        div3.appendChild(document.createTextNode('Hemisphere:'));
        const div4 = document.createElement('DIV');
        div4.appendChild(document.createTextNode('Latitude:'));
        const div5 = document.createElement('DIV');
        div5.appendChild(document.createTextNode('Longitude:'));
        col1.append(div1, div2, div3, div4, div5);

        const col2 = document.createElement('DIV');
        col2.classList.add('col-5', 'pl-0', 'text-right', 'text-nowrap')
        const div6 = document.createElement('DIV');
        div6.id = 'idPop' + city.key;
        div6.appendChild(document.createTextNode(city.pop.toLocaleString('en-US')));
        const div7 = document.createElement('DIV');
        div7.id = 'idSize' + city.key;
        div7.appendChild(document.createTextNode(city.howBig()));
        const div8 = document.createElement('DIV');
        div8.id = 'idHemi' + city.key;
        div8.appendChild(document.createTextNode(hemis));
        const div9 = document.createElement('DIV');
        div9.id = 'idLat' + city.key;
        div9.appendChild(document.createTextNode(city.lat));
        const div10 = document.createElement('DIV');
        div10.id = 'idLong' + city.key;
        div10.appendChild(document.createTextNode(city.long));
        col2.append(div6, div7, div8, div9, div10);

        row.append(col1, col2);
        cardBody.append(row);
        cardBody.append(document.createElement('HR'));

        // card footer
        const footer = document.createElement('DIV');
        footer.className = 'text-right';

        const editBtn = document.createElement('BUTTON');
        editBtn.classList.add('btn', 'btn-sm');
        editBtn.id = 'idE' + city.key;
        editBtn.setAttribute('data-toggle', 'modal');
        editBtn.setAttribute('data-target', '#idEditCity');
        editBtn.setAttribute('action', 'edit');
        editBtn.append(document.createTextNode('Edit'));

        const delBtn = document.createElement('BUTTON');
        delBtn.classList.add('btn', 'btn-danger', 'btn-fill', 'btn-sm', 'ml-1');
        delBtn.id = 'idD' + city.key;
        delBtn.setAttribute('action', 'delete');
        delBtn.append(document.createTextNode('Delete'));

        footer.append(editBtn, delBtn);
        cardBody.append(footer);

        card.appendChild(cardBody);

        return card;
    },

    delCard: (card) => {
        card.remove();
    },

    keyFromCard: (card) => {
        return card.querySelector('.card-category').id.slice(9);
    },
          
    upateCardPop: (card, newPop, newSize) => {
        const key = functions.keyFromCard(card);
        const pop = card.querySelector('#idPop' + key);
        const size = card.querySelector('#idSize' + key);
        pop.textContent = newPop.toLocaleString('en-US');
        size.textContent = newSize;

        return card;
    }


};

export default functions;