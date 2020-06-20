import City from './cityClass';

let calgary;
let edmonton;
let redDeer;
let quintero;
let eqTown;
// let notAPlace;

beforeEach(() => {
  calgary = new City(1, 'Calgary', 51.05, -114.05, 1.34e6);
  edmonton = new City(2, 'Edmonton', 53.55, -113.49, 9.81e5);
  redDeer = new City(3, 'Red Deer', 52.28, -113.81, 1.06e5);
  quintero = new City(4, 'Quintero', -32.78, -71.53, 25300);
  eqTown = new City(5, 'Equator Town', 0.00, 50.00, 5000);
  // notAPlace = new City(6, 'Not A Place', 'ostritch', 'falcon', 'ocelot');
});

test('test city creation and import plumbing', () => {
  expect(calgary.name).toBe('Calgary');
  expect(calgary.key).toBe(1);
  expect(calgary.lat).toBe(51.05);
  expect(edmonton.name).toBe('Edmonton');
  expect(edmonton.long).toBe(-113.49);
  expect(redDeer.pop).toBe(1.06e5);
  expect(eqTown.key).toBe(5);
});

test('test city show method', () => {
  expect(calgary.show()).toBe('Calgary: Coordinates: 51.05, -114.05, Population: 1340000');
  expect(edmonton.show()).toBe('Edmonton: Coordinates: 53.55, -113.49, Population: 981000');
  expect(redDeer.show()).toBe('Red Deer: Coordinates: 52.28, -113.81, Population: 106000');
});

test('test city move in method', () => {
  calgary.movedIn(50000);
  edmonton.movedIn(19000);
  redDeer.movedIn(54000);
  expect(calgary.pop).toBe(1.39e6);
  expect(edmonton.pop).toBe(1e6);
  expect(redDeer.pop).toBe(1.6e5);
});

test('test city move out method', () => {
  calgary.movedOut(50000);
  edmonton.movedOut(21000);
  redDeer.movedOut(6000);
  expect(calgary.pop).toBe(1.29e6);
  expect(edmonton.pop).toBe(9.6e5);
  expect(redDeer.pop).toBe(1e5);
});

test('test city size method', () => {
  expect(calgary.howBig()).toBe('City');
  expect(quintero.howBig()).toBe('Large town');
  expect(edmonton.howBig()).toBe('City');
  edmonton.movedOut(979000);
  expect(edmonton.howBig()).toBe('Town');
  expect(redDeer.howBig()).toBe('City');
  redDeer.movedOut(105500);
  expect(redDeer.howBig()).toBe('Village');
  redDeer.movedOut(450);
  expect(redDeer.howBig()).toBe('Hamlet');
  redDeer.movedOut(50);
  expect(redDeer.howBig()).toBe('Something went wrong');
});

test('test which hemisphere method', () => {
  expect(calgary.whichSphere()).toBe('Northern');
  expect(edmonton.whichSphere()).toBe('Northern');
  expect(quintero.whichSphere()).toBe('Southern');
  expect(eqTown.whichSphere()).toBe('Equator!');

  calgary.lat = NaN;
  expect(calgary.whichSphere()).toBe('Something went wrong');
});
