import postData from './cityfetch';
import Community from './communityClass';


// Need this line for fetch to work in with tests
global.fetch = require('node-fetch');

// API test data
let comm;
const url = 'http://localhost:5000/'; // ***WHATEVER YOU DO, DON'T USED LOAD/SAVE OR YOU WILL CRY!!!!***

beforeEach(async () => {
  comm = new Community();

  const cities = [
    { key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 },
    { key: 2, lat: 53.55, long: -113.49, name: 'Edmonton', pop: 981000 },
    { key: 3, lat: 52.28, long: -113.81, name: 'Red Deer', pop: 106000 },
    { key: 4, lat: -32.78, long: -71.53, name: 'Quintero', pop: 25300 },
    { lat: 0.00, long: 50.00, name: 'Equator Town', pop: 5000 },
    { lat: -33.93, long: 18.42, name: 'Cape Town', pop: 3780000 },
    { lat: 4.71, long: -74.07, name: 'Bogota', pop: 7400000 },
  ];

  cities.forEach((city) => comm.createCity(city));

  await postData(`${url}clear`);
});

test('test adding and clearing api data', async () => {
  let data = await postData(`${url}all`);
  expect(data.status).toBe(200);
  expect(data.length).toBe(0);

  comm.cities.forEach(async (city) => postData(`${url}add`, city));

  data = await postData(`${url}all`);
  expect(data.status).toBe(200);
  expect(data.length).toBe(7);
  // console.log('data:', data.length);
  expect(data).toContainEqual({ key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 });
  expect(data).toContainEqual({ key: 4, lat: -32.78, long: -71.53, name: 'Quintero', pop: 25300 });
  expect(data).toContainEqual(comm.findByKey(7));

  comm.createCity('Whitehorse', 60.72, -135.05, 2.5e3);
  comm.createCity({ lat: 60.72, long: -135.05, name: 'Whitehorse', pop: 25000 });
  await postData(`${url}add`, comm.findByKey(8));
  data = await postData(`${url}all`);
  expect(data.status).toBe(200);
  expect(data.length).toBe(8);
  expect(data).toContainEqual(comm.findByKey(1));
  expect(data).toContainEqual(comm.findByKey(4));
  expect(data).toContainEqual(comm.findByKey(8));

  // Test duplicate key rejection
  const dupe = await postData(`${url}add`, comm.findByKey(8));
  expect(dupe.status).toBe(400);

  // test clearing
  const clear = await postData(`${url}clear`);
  expect(clear.status).toBe(200);
  data = await postData(`${url}all`);
  expect(data.status).toBe(200);
  expect(data.length).toBe(0);
});

test('test deleting cities from api', async () => {
  comm.cities.forEach(async (city) => postData(`${url}add`, city));
  let data = await postData(`${url}all`);
  expect(data.status).toBe(200);
  expect(data.length).toBe(7);

  const del = await postData(`${url}delete`, comm.findByKey(1));
  expect(del.status).toBe(200);
  data = await postData(`${url}all`);

  expect(data).not.toContainEqual(comm.findByKey(1));
  expect(data).toContainEqual(comm.findByKey(4));
  expect(data).toContainEqual(comm.findByKey(7));
});

test('test postdata with no url (to achive 100% test coverage)', async () => {
  await expect(postData()).rejects
    .toThrow('Only absolute URLs are supported');
});


test('load sample cities to server', async () => {
  let data = await postData(`${url}all`);
  expect(data.status).toBe(200);
  expect(data.length).toBe(0);

  comm.cities.forEach(async (city) => postData(`${url}add`, city));

  data = await postData(`${url}all`);
  expect(data.status).toBe(200);
  expect(data.length).toBe(7);
  //   console.log('data:', data);
  expect(data).toContainEqual({ key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 });
  expect(data).toContainEqual({ key: 4, lat: -32.78, long: -71.53, name: 'Quintero', pop: 25300 });
  expect(data).toContainEqual(comm.findByKey(7));
});
