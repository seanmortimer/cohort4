const functions = {

    newCityCard: (city) => {
        // create card
        city = {
            key: 1,
            name: 'Quintero',
            lat: -32.78,
            long: -71.53,
            pop: 25300
        }

        const card = document.createElement('DIV');
        card.className = 'card';

        // card header
        const cardHeader = document.createElement('DIV');
        cardHeader.className = 'card-header';
        const title = document.createElement('H4');
        title.className = 'card-title'
        title.appendChild(document.createTextNode(city.name));
        cardHeader.appendChild(title);
        card.appendChild(cardHeader);

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
        div6.appendChild(document.createTextNode(city.pop));
        const div7 = document.createElement('DIV');
        div7.appendChild(document.createTextNode('Hard to say'));
        const div8 = document.createElement('DIV');
        div8.appendChild(document.createTextNode('North?'));
        const div9 = document.createElement('DIV');
        div9.appendChild(document.createTextNode(city.lat));
        const div10 = document.createElement('DIV');
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
        editBtn.setAttribute('data-toggle', 'modal');
        editBtn.setAttribute('data-target', '#idEditCity');
        editBtn.setAttribute('action', 'edit');
        editBtn.append(document.createTextNode('Edit'));

        const delBtn = document.createElement('BUTTON');
        delBtn.classList.add('btn', 'btn-danger', 'btn-fill', 'btn-sm', 'ml-1');
        delBtn.setAttribute('action', 'delete');
        delBtn.append(document.createTextNode('Delete'));

        footer.append(editBtn, delBtn);
        cardBody.append(footer);
        
        card.appendChild(cardBody);

        return card;
    },

    delAct: (card) => {
        card.remove();

    },

    newActListItem: (actName) => {
        // Take in account name, return option item
        const actItem = document.createElement('OPTION')

        actItem.value = actName;
        actItem.id = 'idList' + actName;
        actItem.textContent = actName;
        return actItem;
    },

    delListItem: (item) => {
        item.remove();

    },
};

export default functions;