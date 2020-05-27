import Community from './communityClass';


// City class tests



// // Community contorller class tests
describe.skip('Community controller class tests', () => {

  let comm;

  beforeEach(() => {

    comm = new Community;
    comm.createCity('Calgary', 51.05, -114.05, 1.34e6);  // key 1
    comm.createCity('Edmonton', 53.55, -113.49, 9.81e5); // key 2
    comm.createCity('Red Deer', 52.28, -113.81, 1.06e5); // key 3
    comm.createCity('Quintero', -32.78, -71.53, 25300); // key 4
    comm.createCity('Equator Town', 0.00, 50.00, 5000); // key 5

  });

  test('Test key generation method', () => {
    expect(comm.key).toBe(5);
    expect(comm.newKey()).toBe(6);
    expect(comm.newKey()).toBe(7);
    expect(comm.newKey()).toBe(8);
    expect(comm.key).toBe(8);
  });

  test('test city creation method', () => {

    const comm2 = new Community;

    expect(comm2.createCity('Calgary', 51.05, -114.05, 1.34e6)).toBe(1);
    expect(comm2.createCity('Edmonton', 53.55, -113.49, 9.81e5)).toBe(2);
    expect(comm2.createCity('Red Deer', 52.28, -113.81, 1.06e5)).toBe(3);
    expect(comm2.createCity('Quintero', -32.78, -71.53, 25300, 10)).toBe(10);
    expect(comm2.createCity('Equator Town', 0.00, 50.00, 5000)).toBe(11);

    expect(comm2.cities.length).toBe(5);
    expect(comm2.cities[0].name).toBe('Calgary');
    expect(comm2.cities[0].key).toBe(1);
    expect(comm2.cities[1].name).toBe('Edmonton');
    expect(comm2.cities[1].key).toBe(2);
    expect(comm2.cities[3].name).toBe('Quintero');
    expect(comm2.cities[3].key).toBe(10);
  });

  test('Test find by key method', () => {
    expect(comm.findByKey(1).name).toBe('Calgary');
    expect(comm.findByKey(2).name).toBe('Edmonton');
    expect(comm.findByKey(3).name).toBe('Red Deer');
    expect(comm.findByKey(4).name).toBe('Quintero');
    expect(comm.findByKey(5).name).toBe('Equator Town');
  });

  test('Test which hemisphere method', () => {
    comm.createCity('Not A Place', 'ostritch', 'falcon', 'ocelot');
    expect(comm.whichSphere(1)).toBe('Northern');
    expect(comm.whichSphere(2)).toBe('Northern');
    expect(comm.whichSphere(4)).toBe('Southern');
    expect(comm.whichSphere(5)).toBe('Equator!');
    expect(comm.whichSphere(6)).toBe('Something went wrong');
  });

  test('test city deletion method', () => {
    expect(comm.cities.length).toBe(5);
    expect(comm.cities[0].name).toBe('Calgary');
    comm.deleteCity(1);
    expect(comm.cities.length).toBe(4);
    expect(comm.findByKey(1)).toBeUndefined();
    expect(comm.cities[0].name).toBe('Edmonton');
    expect(comm.cities[2].name).toBe('Quintero');
    comm.deleteCity(4);
    expect(comm.cities.length).toBe(3);
    expect(comm.findByKey(4)).toBeUndefined();
    expect(comm.cities[0].name).toBe('Edmonton');
    expect(comm.cities[2].name).toBe('Equator Town');
  });

  test('Test most northern method', () => {
    expect(comm.getMostNorthern().name).toBe('Edmonton');
    comm.deleteCity(2);
    expect(comm.getMostNorthern().name).toBe('Red Deer');
    comm.deleteCity(3);
    comm.deleteCity(1);
    expect(comm.getMostNorthern().name).toBe('Equator Town');
    comm.deleteCity(5);
    expect(comm.getMostNorthern().name).toBe('Quintero');
    comm.createCity('Whitehorse', 60.72, -135.05, 2.5e3);
    expect(comm.getMostNorthern().name).toBe('Whitehorse');
  });

  test('Test most southern method', () => {
    expect(comm.getMostSouthern().name).toBe('Quintero');
    comm.deleteCity(4);
    expect(comm.getMostSouthern().name).toBe('Equator Town');
    comm.deleteCity(5);
    comm.deleteCity(1);
    expect(comm.getMostSouthern().name).toBe('Red Deer');
    comm.deleteCity(5);
    comm.createCity('Bogota', 4.71, -74.07, 7.4e6);
    expect(comm.getMostSouthern().name).toBe('Bogota');
  });

  test('Test total population method', () => {
    expect(comm.getPopulation()).toBe(2457300);
    comm.deleteCity(1);
    expect(comm.getPopulation()).toBe(1117300);
    comm.createCity('Cape Town', -33.93, 18.42, 3.78e6);
    expect(comm.getPopulation()).toBe(4897300);
  });

});


test('130E Object reference test', () => {
  const myCity = new City(1, 'Calgary', 10, 20, 100);
  const myFav = myCity;

  expect(myCity.pop).toBe(100);
  expect(myFav.pop).toBe(100);
  myCity.movedIn(100);
  expect(myCity.pop).toBe(200);
  expect(myFav.pop).toBe(200);
  myFav.movedOut(150);
  expect(myCity.pop).toBe(50);
  expect(myFav.pop).toBe(50);
});