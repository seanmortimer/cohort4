import { Community } from './cityclasses.js';
import domFunctions from './city-dom-functions.js';
import fetchFunctions from './cityfetch.js';

// Create our community
const community = new Community;

const url = 'http://localhost:5000/';

// Update all the stats on the page
const updateDisplay = () => {
    const northern = community.getMostNorthern();
    const southern = community.getMostSouthern();
    const totalPop = community.getPopulation();

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


const createCity = async (name, lat, long, pop) => {
    const newKey = community.createCity(name, lat, long, pop);
    console.log('newKey:', newKey);
    const newCity = community.findByKey(newKey);
    console.log('new city:', newCity);
    const hemi = community.whichSphere(newKey);
    console.log('hemi:', hemi);

    // console.log('newcity:', newCity);
    idCardDeck.appendChild(domFunctions.newCityCard(newCity, hemi));

    try {
        let reply = await fetchFunctions.postData(url + 'add', newCity);
        console.log('reply:', reply);
    } catch (error) {
        console.error('Oh nooooo, adding failed:', error);
    }
}


const deleteCity = async (card) => {
    const cityKey = Number(card.id.slice(6));
    console.log('key:', cityKey);
    const cityName = community.findByKey(cityKey);
    console.log('city Name:', cityName);


    console.log('Delete!');
    domFunctions.delCard(card);

    community.deleteCity(cityKey)

    try {
        let reply = await fetchFunctions.postData(url + 'delete', cityKey);
        console.log('reply:', reply);
        showNotification(4, `${cityName} was deleted`);
    } catch (error) {
        console.error('Oh nooooo, delete failed:', error);
    }
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

    // console.log('target:', e.target.nodeName);
    // console.log('action:', action);
    if (action) {
        // console.log('action:', action);
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
                updateDisplay();
                break;

            case 'load':
                testCities();
                updateDisplay();
                break;

            case 'clear':
                clearServer();

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
    checkCoordinates(idAddLat.value, idAddLong.value);

    // const key = community.createCity(name, lat, long, pop);
    // idCardDeck.appendChild(domFunction.newCityCard(community.findByKey(key)));
})


// Let's make some test cities!!

const testCities = async () => {
    await fetchFunctions.postData(url + 'clear');
    console.log('cleared!');

    createCity('Calgary', 51.05, -114.05, 1340000);
    createCity('Edmonton', 53.55, -113.49, 981000);
    createCity('Red Deer', 52.28, -113.81, 1.06e5);
    createCity('Quintero', -32.78, -71.53, 25300);
    await createCity('Equator Town', 0.00, 50.00, 5000);
    // cities.forEach(city => {
    //     // console.log('cit:', city.name, city.key);
    //     idCardDeck.appendChild(domFunctions.newCityCard(city, community.whichSphere(city.key)));
};

const clearServer = async () => {
    try {
        await fetchFunctions.postData(url + 'clear');
    } catch (error) {
        console.error('Uh oh! Server not cleared', error);
    }
    console.log('Server cleared!');
}

function checkCoordinates() {
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

    $.notify({
        icon: "nc-icon nc-spaceship",
        message: text
    }, {
        type: type[color],
        timer: 4000,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
}

updateDisplay();