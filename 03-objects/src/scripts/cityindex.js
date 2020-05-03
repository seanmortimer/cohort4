import { Community } from './cityclasses.js';
// import htmlFunction from './city-dom-functions.js';
// import fetchFunctions from './cityfetch.js';

// Create our community
const community = new Community;

// Display functions
const clearInput = () => {
    // lets clear some input fields!
}

// Update all the stats on the page
const updateDisplay = () => {
    const northern = community.getMostNorthern();
    const southern = community.getMostSouthern();
    const totalPop = community.getPopulation();

    idNorth.textContent = northern.name;
    idNorthLat.textContent = northern.lat;
    idSouth.textContent = southern.name;
    idSouthLat.textContent = southern.lat;
    idTotalPop.textContent = totalPop.toLocaleString('en-US');

}

const createCity = (actName, startBal) => {
    const newCity = community.createCity(name, lat, long, pop);

    // if (user1.newAccount(actName, startBal) === -1) {
    //     idDialog.textContent = `Account ${actName} already exists.`
    //     clearInput();

    //     return;
    // }

    idCardDeck.appendChild(htmlFunctions.newCityCard(newCity));
    updateDisplay();
}

const deleteCity = (card) => {
    const cityKey = card.id.slice(0, 5);
    const cityName = community.findByKey(cityKey).name;

    community.deleteCity(cityKey)
    htmlFunctions.delCity(card);

    // ***This will need to go to the HTML functions > also make it more flexible
    function showNotification() {
        const color = 4; // 4 = Red

        $.notify({
            icon: "nc-icon nc-spaceship",
            message: `${cityName} was deleted`
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: 'top',
                align: 'center'
            }
        });
    }

    showNotification();
    updateDisplay();
}


// Event listener
document.body.addEventListener('click', e => {
    const target = e.target;
    console.log(target);
    if (target.nodeName === 'BUTTON') {
       const action = target.getAttribute('action');
      
            switch (action) {
                case 'edit':
                    console.log('Action:', action);

                    break;

                case 'delete':
                    user1.withdraw(actName, amount);
                    idDialog.textContent = `$ ${amount} was withdrawn from ${actName}.`
                    break;


                default:
            }
            clearInput();
            updateDisplay();
        
        
        if (target.id === 'idDelBtn') deleteAccount(target.parentNode.parentNode);
    }
})


// Let's make some test cities!!
community.createCity('Calgary', 51.05, -114.05, 1.34e6);
community.createCity('Edmonton', 53.55, -113.49, 9.81e5);
community.createCity('Red Deer', 52.28, -113.81, 1.06e5);
community.createCity('Quintero', -32.78, -71.53, 25300);
community.createCity('Equator Town', 0.00, 50.00, 5000);

function showNotification(from, align) {
    // const color = Math.floor((Math.random() * 4) + 1);
    const color = 4; // 4 = Red

    $.notify({
        icon: "nc-icon nc-spaceship",
        message: "Welcome to <b>Sean's City Page!</b>"

    }, {
        type: type[color],
        timer: 4000,
        placement: {
            from: from,
            align: align
        }
    });
}

// showNotification('top', 'right');

updateDisplay();