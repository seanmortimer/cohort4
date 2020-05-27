import Community from './communityClass';


let comm;

beforeEach(() => {
  const cities = [
    { key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 },
    { key: 2, lat: 53.55, long: -113.49, name: 'Edmonton', pop: 981000 },
    { key: 3, lat: 52.28, long: -113.81, name: 'Red Deer', pop: 106000 },
    { key: 4, lat: -32.78, long: -71.53, name: 'Quintero', pop: 25300 },
    { lat: 0.00, long: 50.00, name: 'Equator Town', pop: 5000 },
    { lat: -33.93, long: 18.42, name: 'Cape Town', pop: 3780000 },
    { lat: 4.71, long: -74.07, name: 'Bogota', pop: 7400000 },
  ];

  comm = new Community();
  cities.forEach((city) => comm.createCity(city));
});

test('Test key generation method', () => {
  expect(comm.key).toBe(7);
  expect(comm.newKey()).toBe(8);
  expect(comm.newKey()).toBe(9);
  expect(comm.newKey()).toBe(10);
  expect(comm.key).toBe(10);
});

test('test city creation method', () => {
  expect(comm.cities.length).toBe(7);
  expect(comm.cities[0].name).toBe('Calgary');
  expect(comm.cities[0].key).toBe(1);
  expect(comm.cities[1].name).toBe('Edmonton');
  expect(comm.cities[1].key).toBe(2);
  expect(comm.cities[3].name).toBe('Quintero');
  expect(comm.cities[3].key).toBe(4);
  expect(comm.cities[5].name).toBe('Cape Town');
  expect(comm.cities[5].key).toBe(6);
});

test('Test find by key method', () => {
  expect(comm.findByKey(1).name).toBe('Calgary');
  expect(comm.findByKey(2).name).toBe('Edmonton');
  expect(comm.findByKey(3).name).toBe('Red Deer');
  expect(comm.findByKey(4).name).toBe('Quintero');
  expect(comm.findByKey(5).name).toBe('Equator Town');
});

test('test city deletion method', () => {
  expect(comm.cities.length).toBe(7);
  expect(comm.cities[0].name).toBe('Calgary');
  comm.deleteCity(1);
  expect(comm.cities.length).toBe(6);
  expect(comm.findByKey(1)).toBeUndefined();
  expect(comm.cities[0].name).toBe('Edmonton');
  expect(comm.cities[2].name).toBe('Quintero');
  comm.deleteCity(4);
  expect(comm.cities.length).toBe(5);
  expect(comm.findByKey(4)).toBeUndefined();
  expect(comm.cities[0].name).toBe('Edmonton');
  expect(comm.cities[2].name).toBe('Equator Town');
});

test('Test most northern method', () => {
  // console.log('comm.cities :>> ', comm.cities);

  expect(comm.getMostNorthern().name).toBe('Edmonton');
  comm.deleteCity(2);
  expect(comm.getMostNorthern().name).toBe('Red Deer');
  comm.deleteCity(1);
  comm.deleteCity(3);
  comm.deleteCity(7);
  expect(comm.getMostNorthern().name).toBe('Equator Town');
  comm.deleteCity(5);
  expect(comm.getMostNorthern().name).toBe('Quintero');
 
});

test('Test most southern method', () => {
  expect(comm.getMostSouthern().name).toBe('Cape Town');
  comm.deleteCity(6);
  expect(comm.getMostSouthern().name).toBe('Quintero');
  comm.deleteCity(4);
  comm.deleteCity(1);
  expect(comm.getMostSouthern().name).toBe('Equator Town');
  comm.deleteCity(5);
  expect(comm.getMostSouthern().name).toBe('Bogota');
});

test('Test total population method', () => {
  expect(comm.getPopulation()).toBe(13637300);
  comm.deleteCity(1);
  expect(comm.getPopulation()).toBe(12297300);
  comm.createCity({ key: 8, lat: 4.71, long: -74.07, name: 'Sydney', pop: 5E6 });
  expect(comm.getPopulation()).toBe(17297300);
});
