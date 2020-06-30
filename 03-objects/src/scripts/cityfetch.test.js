import functions from './cityfetch.js';
import { Community } from './cityclasses.js';


// Need this line for fetch to workin with tests
// eslint-disable-next-line no-undef
global.fetch = require('node-fetch');

// API test data
let comm;
const url = 'http://localhost:5000/';  // ***WHATEVER YOU DO, DON'T USED LOAD/SAVE OR YOU WILL CRY!!!!***

beforeEach(async () => {
  comm = new Community;

  comm.createCity('Calgary', 51.05, -114.05, 1.34e6);
  comm.createCity('Edmonton', 53.55, -113.49, 9.81e5);
  comm.createCity('Red Deer', 52.28, -113.81, 1.06e5);
  comm.createCity('Quintero', -32.78, -71.53, 25300);
  comm.createCity('Equator Town', 0.00, 50.00, 5000);
  comm.createCity('Cape Town', -33.93, 18.42, 3.78e6);
  comm.createCity('Bogota', 4.71, -74.07, 7.4e6);


  await functions.postData(url + 'clear');
});

test('test adding and clearing api data', async () => {
  let data = await functions.postData(url + 'all');
  expect(data.status).toBe(200);
  expect(data.length).toBe(0);

  comm.cities.forEach(async city => await functions.postData(url + 'add', city));

  data = await functions.postData(url + 'all');
  expect(data.status).toBe(200);
  expect(data.length).toBe(7);
  // console.log('data:', data);
  expect(data).toContainEqual({ key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 });
  expect(data).toContainEqual({ key: 4, lat: -32.78, long: -71.53, name: 'Quintero', pop: 25300 });
  expect(data).toContainEqual(comm.findByKey(7));

  comm.createCity('Whitehorse', 60.72, -135.05, 2.5e3);
  await functions.postData(url + 'add', comm.findByKey(8));
  data = await functions.postData(url + 'all');
  expect(data.status).toBe(200);
  expect(data.length).toBe(8);
  expect(data).toContainEqual(comm.findByKey(1));
  expect(data).toContainEqual(comm.findByKey(4));
  expect(data).toContainEqual(comm.findByKey(8));

  // Test duplicate key rejection
  let dupe = await functions.postData(url + 'add', comm.findByKey(8));
  expect(dupe.status).toBe(400);

  // test clearing
  let clear = await functions.postData(url + 'clear');
  expect(clear.status).toBe(200);
  data = await functions.postData(url + 'all');
  expect(data.status).toBe(200);
  expect(data.length).toBe(0);

});

test('test deleting cities from api', async () => {
  comm.cities.forEach(async city => await functions.postData(url + 'add', city));
  let data = await functions.postData(url + 'all');
  expect(data.status).toBe(200);
  expect(data.length).toBe(7);

  let del = await functions.postData(url + 'delete', comm.findByKey(1));
  expect(del.status).toBe(200);
  data = await functions.postData(url + 'all');

  expect(data).not.toContainEqual(comm.findByKey(1));
  expect(data).toContainEqual(comm.findByKey(4));
  expect(data).toContainEqual(comm.findByKey(7));
});

test('test postdata with no url (to achive 100% test coverage)', async () => {
  await expect(functions.postData()).rejects
    .toThrow('Only absolute URLs are supported');
});

