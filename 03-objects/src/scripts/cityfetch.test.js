import functions  from './cityfetch.js';
import { City, Community } from './cityclasses.js';


// Need this line for fetch to workin with tests
global.fetch = require('node-fetch');

// API test data
let calgary;
let edmonton;
let redDeer;
let quintero;
let eqTown;
let notAPlace;
let comm;

const addUrl = 'http://localhost:5000/add';
const clearUrl = 'http://localhost:5000/clear';
const readUrl = 'http://localhost:5000/read';
const allUrl = 'http://localhost:5000/all';
const loadUrl = 'http://localhost:5000/load';

beforeEach(async () => {
    

    users = new UserData(data);
    // url = 'https://jsonplaceholder.typicode.com/users';


    calgary = new City(1, 'Calgary', 51.05, -114.05, 1.34e6);
    edmonton = new City(2, 'Edmonton', 53.55, -113.49, 9.81e5);
    redDeer = new City(3, 'Red Deer', 52.28, -113.81, 1.06e5);
    quintero = new City(4, 'Quintero', -32.78, -71.53, 25300);
    eqTown = new City(5, 'Equator Town', 0.00, 50.00, 5000);
    notAPlace = new City(6, 'Not A Place', 'ostritch', 'falcon', 'ocelot');

    comm = new Community;
    comm.createCity(calgary);
    comm.createCity(edmonton);
    comm.createCity(redDeer);
    comm.createCity(quintero);
    comm.createCity(eqTown);
    await functions.postData(clearUrl);

});


test('test workwith data function', async () => {
    expect(await functions.workWithData(url)).toEqual(data);
});

test('test postData function', async () => {
    const output = await functions.postData(url, me)
    expect(output.name).toEqual(me.name);
    expect(output.surname).toEqual(me.surname);
});


//  Test fetch to / from Python server api

test('test post data to python ', async () => {
    comm.cities.forEach(async city => await functions.postData(addUrl, city));
   
    const output = await functions.postData(allUrl); 
    const output2 = await functions.postData(readUrl, calgary); 
    
    expect(output.status).toBe(200);
    expect(output).toContainEqual(calgary);
    expect(output).toContainEqual(edmonton);
    expect(output2).toContainEqual(calgary);
    
});

