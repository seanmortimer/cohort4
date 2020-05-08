import { Community } from './cityclasses.js';
import domFunctions from './city-dom-functions.js';
import fetchFunctions from './cityfetch.js';

// Create our community
const community = new Community;

const url = 'http://127.0.0.1:5000/';

// Update all the stats on the page
const updateDisplay = () => {
    const northern = community.getMostNorthern();
    const southern = community.getMostSouthern();
    const totalPop = community.getPopulation();

    // console.log('UPDATING!');
    // console.log('city1:', community.cities[0]);
    // console.log('north:', northern);
    if (northern != undefined) {
        idNorth.textContent = northern.name;
        idNorthLat.textContent = northern.lat;
    }
    if (southern != undefined) {
        idSouth.textContent = southern.name;
        idSouthLat.textContent = southern.lat;
    }
    if (totalPop != undefined) {
        idTotalPop.textContent = totalPop.toLocaleString('en-US');
    }

    idEditIn.value = '';
    idEditOut.value = '';
    idEditNet.value = '';
    idAddName.value = '';
    idAddPop.value = '';
    idAddLat.value = '';
    idAddLong.value = '';
}


const createCity = async (name, lat, long, pop, key) => {
    const newKey = community.createCity(name, lat, long, pop, key);
    // console.log('newKey:', newKey);
    // console.log('city1:', community.cities[0]);

    const newCity = community.findByKey(newKey);
    // console.log('new city:', newCity);
    const hemi = community.whichSphere(newKey);
    // console.log('hemi:', hemi);

    // console.log('newcity:', newCity);
    idCardDeck.appendChild(domFunctions.newCityCard(newCity, hemi));

    if (key === undefined) {
    try {
        let reply = await fetchFunctions.postData(url + 'add', newCity);
        showNotification(2, `${newCity.name} was created`);
        // console.log('add city reply:', reply);
    } catch (error) {
        console.error('Oh nooooo, adding failed:', error);
    }}
    updateDisplay();
}


const deleteCity = async (card) => {
    const key = Number(card.id.slice(6));
    const city = community.findByKey(key);

    domFunctions.delCard(card);
    community.deleteCity(key)

    try {
        let reply = await fetchFunctions.postData(url + 'delete', city);
        // console.log('delete city reply:', reply);
        showNotification(4, `${city.name} was deleted`);
    } catch (error) {
        console.error('Oh nooooo, delete failed:', error);
    }
}

const updatePop = async (city, popChange) => {
    popChange = Number(popChange);
    // console.log('popchange:', popChange);
    let newPop = city.pop;

    // console.log('city:', city);
    if (popChange < 0) newPop = city.movedOut(Math.abs(popChange));
    else if (popChange > 0) newPop = city.movedIn(popChange);
    else {
        showNotification(3, 'No changes made');
        return newPop;
    }
    try {
        let reply = await fetchFunctions.postData(url + 'update', city);
        // console.log('update pop reply:', reply.status);
        newPop = newPop.toLocaleString('en-US');
        showNotification(1, `Population of ${city.name} was updated to ${newPop}`);
        // return newPop;
    } catch (error) {
        console.error('Oh nooooo, update population failed:', error);
    }
    updateDisplay();

}



// Event listeners

const listeners = () => {
    let key;
    let card;
    let city;

    document.body.addEventListener('click', e => {
        const action = e.target.getAttribute('action');

        // console.log('target:', e.target.nodeName);
        // console.log('action:', action);
        if (action) {
            // console.log('action:', action);
            if (action === 'edit' || action === 'delete') {
                key = Number(e.target.id.slice(3));
                card = document.getElementById('idCard' + key);
                city = community.findByKey(key);
                // console.log('Target key:', key);
                // console.log('Target City:', city.name);
                // console.log('Target card:', card);
            }

            switch (action) {
                case 'edit':
                    console.log('edit!:');
                    idEditName.textContent = city.name;
                    idEditPop.value = (city.pop).toLocaleString('en-US');
                    break;

                case 'submit':
                    console.log('Updating population', idEditNet.value);
                    updatePop(city, idEditNet.value);
                    const cardPop = document.querySelector('#idPop' + key);
                    cardPop.textContent = (city.pop).toLocaleString('en-US');
                    break;

                case 'add':
                    // console.log('Add city!');
                    updateDisplay();
                    break;

                case 'addCity':
                    const name = idAddName.value;
                    const lat = Number(idAddLat.value);
                    const long = Number(idAddLong.value);
                    const pop = Number(idAddPop.value);

                    if (!(name && lat && long && pop) && checkCoordinates()) {
                        console.log('problem, won\'t add');
                    } else {
                        console.log('Seems good to me:');
                        console.log('adding:', name);
                        createCity(name, lat, long, pop);
                    }

                    break;

                case 'delete':
                    deleteCity(card);
                    break;

                case 'load':
                    testCities();
                    break;

                case 'clear':
                    clearServer();

                default:
            }
            updateDisplay();
        }
    })

    idEditCity.addEventListener('keyup', e => {
        idEditNet.value = idEditIn.value - idEditOut.value;
    })

    idAddCity.addEventListener('keyup', e => {
        // console.log('target:', e.target);
        checkCoordinates(idAddLat.value, idAddLong.value);

        // const key = community.createCity(name, lat, long, pop);
        // idCardDeck.appendChild(domFunction.newCityCard(community.findByKey(key)));
    })

    document.addEventListener('DOMContentLoaded', (e) => {
        // console.log('DOM fully loaded and parsed');
        pullFromServer();

    })
}


// Server load and clear functions

const testCities = async () => {
    await fetchFunctions.postData(url + 'clear');
    console.log('cleared!');

    await createCity('Calgary', 51.05, -114.05, 1340000);
    await createCity('Edmonton', 53.55, -113.49, 981000);
    await createCity('Red Deer', 52.28, -113.81, 1.06e5);
    await createCity('Quintero', -32.78, -71.53, 25300);
    await createCity('Equator Town', 0.00, 50.00, 5000);
   
    updateDisplay();
};

const pullFromServer = async () => {
    let data = null;
    
    try {
        data = await fetchFunctions.postData(url + 'all');
    } catch (error) {
        console.error('Uh oh! Loading cities from server failed!', error);
    }
    // console.log('Server data is:', data);
    data.forEach(city => createCity(city.name, city.lat, city.long, city.pop, city.key));
    community.cities.forEach(city => console.log(city.name, 'loaded from server'));

}

const clearServer = async () => {
    try {
        await fetchFunctions.postData(url + 'clear');
    } catch (error) {
        console.error('Uh oh! Server not cleared', error);
    }
    console.log('Server cleared!');
}

const checkCoordinates = () => {
    idAddWarning.textContent = '\xa0';
    const lat = Number(idAddLat.value);
    const long = Number(idAddLong.value);

    if (long < -180 || long > 180) {
        idAddWarning.textContent = 'Longitude must be between -180 and +180!';
        return false;
    } else if (lat < -90 || lat > 90) {
        idAddWarning.textContent = 'Latitude must be between -90 and +90!';
        return false;
    } else {
        return true;
    }
}

function showNotification(color, text) {
    // Colours:
    // 4 = Red
    // 3 = Orange
    // 2 = Green
    // 1 = Light Blue


    $.notify({
        icon: "nc-icon nc-spaceship",
        message: text
    }, {
        type: type[color],
        timer:3000,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
}

// testCities();
listeners();
// console.log('test city 1:', community.cities[0])
// updateDisplay();

