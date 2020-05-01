import functions from './cityfetch.js';
import { Community } from './cityclasses.js';


// Need this line for fetch to workin with tests
global.fetch = require('node-fetch');

// API test data
let comm;
const url = 'http://localhost:5000/';

beforeEach(async () => {
    comm = new Community;

    comm.createCity('Calgary', 51.05, -114.05, 1.34e6);
    comm.createCity('Edmonton', 53.55, -113.49, 9.81e5);
    comm.createCity('Red Deer', 52.28, -113.81, 1.06e5);
    comm.createCity('Quintero', -32.78, -71.53, 25300);
    comm.createCity('Equator Town', 0.00, 50.00, 5000);
    comm.createCity('Cape Town', -33.93, 18.42, 3.78e6);
    comm.createCity('Bogota', 4.71, -74.07, 7.4e6);

    await functions.getData(url + 'clear');
    comm.cities.forEach(async city => await functions.postData(url + 'add', city));

});

test('test load api test data from data.json ', async () => {
    let clear = await functions.getData(url + 'clear');
    expect(clear.status).toBe(200);
    let data = await functions.postData(url + 'all');
    console.log(data.length);
    expect(data.length).toBe(0);
    // expect(data).toEqual([]);

    //     const load = await functions.getData(loadUrl);
    //     expect(load.status).toBe(200);
    //     data = await functions.postData(url + 'all');
    //     expect(data).toContainEqual({ key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 });
    //     expect(data).toContainEqual({ key: 4, lat: -32.78, long: -71.53, name: 'Quintero', pop: 25300 });
    });

    // test('test clearing api data', async () => {
    //     let data = await functions.postData(url + 'all');
    //     expect(data).toContainEqual({ key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 });
    //     expect(data).toContainEqual({ key: 4, lat: -32.78, long: -71.53, name: 'Quintero', pop: 25300 });
    //     const clear = await functions.getData(url + 'clear');
    //     expect(clear.status).toBe(200);
    //     data = await functions.postData(url + 'all');
    //     expect(data).toEqual([]);
    // });

    test('test adding cities to api ', async () => {
        await functions.getData(url + 'clear');
        let data = await functions.postData(url + 'all');
        // expect(data).toEqual([]);

        comm.cities.forEach(async city => await functions.postData(url + 'add', city));
        data = await functions.postData(url + 'all');
        expect(data).toContainEqual(comm.findByKey(1));
        expect(data).toContainEqual(comm.findByKey(2));
        expect(data).toContainEqual(comm.findByKey(7));

        comm.createCity('Whitehorse', 60.72, -135.05, 2.5e3);
        await functions.postData(url + 'add', comm.findByKey(8))
        data = await functions.postData(url + 'all');
        expect(data).toContainEqual({ key: 8, lat: 60.72, long: -135.05, name: 'Whitehorse', pop: 2500 });
        expect(data).toContainEqual({ key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 });
        expect(data).toContainEqual({ key: 4, lat: -32.78, long: -71.53, name: 'Quintero', pop: 25300 });
        expect(data).toContainEqual(comm.findByKey(4));
        let dupe = await functions.postData(url + 'add', comm.findByKey(8));
        console.log(dupe);


    });

    // test('test deleting cities from api', async () => {
    //     let data = await postData(url + 'all');
    //     // console.log(data);
    //     let read = await postData(readUrl, { key: 1 });
    //     console.log(read);
    //     // data = [];
    //     // data = await functions.postData(delUrl, {key:1});
    //     console.log(data);

    //     // console.log(comm.findByKey(1));

    //     // expect(data).toContainEqual(comm.findByKey(1));
    //     // let del = await functions.postData(delUrl, comm.findByKey(1));
    //     // console.log(del);
    //     // console.log(data);
    // });
