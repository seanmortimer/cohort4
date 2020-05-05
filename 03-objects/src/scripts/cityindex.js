import { Community } from './cityclasses.js';
import domFunction from './city-dom-functions.js';
// import fetchFunctions from './cityfetch.js';

// Create our community
const community = new Community;

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

const createCity = (name, lat, long, pop) => {
    const newCity = community.createCity(name, lat, long, pop);

    domFunction.newCityCard(community.findByKey(newCity))
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

// const popChange = (change) =>{
//     change = 0;
//     return () => {
//         return change
//     }
//     return popChange(change);
// }

// console.log('change1:', popChange());
// console.log('change2:', popChange(0));
// console.log('change3:', popChange(10));

document.body.addEventListener('click', e => {
    const action = e.target.getAttribute('action');

    let key;
    let card;
    let city;

    console.log('target:', e.target.nodeName);
    if (action) {
        console.log('action:', action);
        if (action === 'edit' || action === 'delete') {
            key = Number(e.target.id.slice(3));
            card = document.getElementById('idCard' + key);
            city = community.findByKey(key);
        }

        switch (action) {
            case 'edit':
                console.log('edit!:');
                idEditName.textContent = city.name;
                idEditPop.value = (city.pop).toLocaleString('en-US');
                break;

            case 'submit':
                console.log('This submit down here?', idEditNet.value);
                idEditIn.value = '';
                idEditOut.value = '';
                idEditNet.value = '';
                break;

            case 'add':
                console.log('Add city!');
               
                break;

            case 'addCity':
                // console.log('adding:', idAddName.value);
                console.log('adddddddddd');
                break;

            case 'delete':
                console.log('Delete!');
                domFunction.delCard(card);
                break;

            default: updateDisplay();
        }
        updateDisplay();
    }
})

idEditCity.addEventListener('keyup', e => {
    idEditNet.value = idEditIn.value - idEditOut.value;
})

idAddCity.addEventListener('keyup', e => {
    // console.log('target:', e.target);
    idAddWarning.textContent = '\xa0';
    const name = idAddName.value;
    const lat = Number(idAddLat.value);
    const long = Number(idAddLong.value);
    const pop = Number(idAddPop.value);

    console.log('lat:', lat);
    console.log('long:', long);

    if (long < -180 || long > 180) {
        // console.log('in the long');
        idAddWarning.textContent = 'Longitddude must be between -180 and +180!';
    } 
    if (lat < -90 || lat > 90) {
        // console.log('in the lat', );
        idAddWarning.textContent = 'Latitude must be between -90 and +90!';
    } 
    if ( !(name && lat && long && pop) ) {
        console.log('problem');
    } else console.log('nopeers:');



    // const key = community.createCity(name, lat, long, pop);
    // idCardDeck.appendChild(domFunction.newCityCard(community.findByKey(key)));
})


// Let's make some test cities!!
community.createCity('Calgary', 51.05, -114.05, 1.34e6);
community.createCity('Edmonton', 53.55, -113.49, 9.81e5);
community.createCity('Red Deer', 52.28, -113.81, 1.06e5);
community.createCity('Quintero', -32.78, -71.53, 25300);
community.createCity('Equator Town', 0.00, 50.00, 5000);
community.cities.forEach(city => {
    // console.log('cit:', city.name, city.key);
    idCardDeck.appendChild(domFunction.newCityCard(city, community.whichSphere(city.key)));
});


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





updateDisplay();