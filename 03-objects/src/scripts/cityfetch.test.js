import functions from './cityfetch.js';
import { Community } from './cityclasses.js';


// Need this line for fetch to workin with tests
global.fetch = require('node-fetch');

// API test data
let comm;

const addUrl = 'http://localhost:5000/add';
const clearUrl = 'http://localhost:5000/clear';
const readUrl = 'http://localhost:5000/read';
const allUrl = 'http://localhost:5000/all';
const loadUrl = 'http://localhost:5000/load';

beforeEach(async () => {
    comm = new Community;

    comm.createCity('Calgary', 51.05, -114.05, 1.34e6);
    comm.createCity('Edmonton', 53.55, -113.49, 9.81e5);
    comm.createCity('Red Deer', 52.28, -113.81, 1.06e5);
    comm.createCity('Quintero', -32.78, -71.53, 25300);
    comm.createCity('Equator Town', 0.00, 50.00, 5000);

    await functions.postData(clearUrl);

});


// Test fetch to / from Python server api

test('test post data to python ', async () => {
    comm.cities.forEach(async city => await functions.postData(addUrl, city));

    const output1 = await functions.postData(allUrl);
    comm.createCity('Whitehorse', 60.72, -135.05, 2.5e3);
    await functions.postData(addUrl, comm.cities[5])
    const output2 = await functions.postData(readUrl, comm.cities[5]);
    const output3 = await functions.postData(readUrl, comm.cities[3]);

    expect(output1.status).toBe(200);
    console.log('output 1:', output1);
    console.log('output 2:', output2);
    console.log('output 3:', output3);

    expect(output1).toContainEqual(
            { key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 });
    // expect(output).toContainEqual(edmonton);
    // expect(output2).toContainEqual(calgary);

});

