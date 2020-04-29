import { City, Community } from './cityclasses.js';

let calgary;
let edmonton;
let redDeer;
let quintero;
let eqTown;
let notAPlace;
let comm;

beforeEach(() => {
    calgary = new City(1, 'Calgary', 51.05, -114.05, 1.34e6);
    edmonton = new City(2,'Edmonton', 53.55, -113.49, 9.81e5);
    redDeer = new City(3, 'Red Deer', 52.28, -113.81, 1.06e5);
    quintero = new City(4, 'Quintero', -32.78, -71.53, 25300);
    eqTown = new City(5, 'Equator Town', 0.00, 50.00, 5000);
    notAPlace = new City(6, 'Not A Place', 'ostritch', 'falcon', 'ocelot');

    comm = new Community;
    // comm.createCity(calgary);
    // comm.createCity(edmonton);
    // comm.createCity(redDeer);
    // comm.createCity(quintero);
    // comm.createCity(eqTown);

});


// City class tests
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

// test('test city move in method', () => {
//     calgary.movedIn(50000);
//     edmonton.movedIn(19000);
//     redDeer.movedIn(54000);
//     expect(calgary.pop).toBe(1.39e6);
//     expect(edmonton.pop).toBe(1e6);
//     expect(redDeer.pop).toBe(1.6e5);
// });

// test('test city move out method', () => {
//     calgary.movedOut(50000);
//     edmonton.movedOut(21000);
//     redDeer.movedOut(6000);
//     expect(calgary.pop).toBe(1.29e6);
//     expect(edmonton.pop).toBe(9.6e5);
//     expect(redDeer.pop).toBe(1e5);
// });

// test('test city size method', () => {
//     expect(calgary.howBig()).toBe('City');
//     expect(quintero.howBig()).toBe('Large town');
//     expect(edmonton.howBig()).toBe('City');
//     edmonton.movedOut(979000);
//     expect(edmonton.howBig()).toBe('Town');
//     expect(redDeer.howBig()).toBe('City');
//     redDeer.movedOut(105500);
//     expect(redDeer.howBig()).toBe('Village');
//     redDeer.movedOut(450);
//     expect(redDeer.howBig()).toBe('Hamlet');
//     redDeer.movedOut(50);
//     expect(redDeer.howBig()).toBe('Something went wrong');
// });


// // Community contorller class tests
// test('Test which hemisphere method', () => {
//     comm.createCity(notAPlace);
//     expect(comm.whichSphere(calgary)).toBe('Calgary is in the Northern Hemisphere');
//     expect(comm.whichSphere(edmonton)).toBe('Edmonton is in the Northern Hemisphere');
//     expect(comm.whichSphere(quintero)).toBe('Quintero is in the Southern Hemisphere');
//     expect(comm.whichSphere(eqTown)).toBe('Equator Town is exactly on the Equator!');
//     expect(comm.whichSphere(notAPlace)).toBe('Something went wrong');
// }); 

// test('test city creation method', () => {
   
//     expect(comm.cities.length).toBe(5);
//     expect(comm.cities[0].name).toBe('Calgary');
//     expect(comm.cities[1].name).toBe('Edmonton');
//     expect(comm.cities[3].name).toBe('Quintero');
// });

// test('test city deletion method', () => {
//     expect(comm.cities.length).toBe(5);
//     expect(comm.cities[0].name).toBe('Calgary');
//     comm.deleteCity(calgary);
//     expect(comm.cities.length).toBe(4);
//     expect(comm.cities[0].name).toBe('Edmonton');
//     comm.deleteCity(edmonton);
//     expect(comm.cities.length).toBe(3);
//     expect(comm.cities[0].name).toBe('Red Deer');
// });

// test('Test most northern method', () => {
//     comm.deleteCity(edmonton);
//     expect(comm.getMostNorthern()).toBe(redDeer);
//     comm.createCity(edmonton);
//     expect(comm.getMostNorthern()).toBe(edmonton);
//     comm.deleteCity(edmonton);
//     comm.deleteCity(redDeer);
//     comm.deleteCity(calgary);
//     expect(comm.getMostNorthern()).toBe(eqTown);
//     comm.deleteCity(eqTown);
//     expect(comm.getMostNorthern()).toBe(quintero);
// }); 

// test('Test most southern method', () => {
//     expect(comm.getMostSouthern()).toBe(quintero);
//     comm.deleteCity(quintero);
//     expect(comm.getMostSouthern()).toBe(eqTown);
//     comm.deleteCity(eqTown);
//     expect(comm.getMostSouthern()).toBe(calgary);
//     comm.deleteCity(calgary);
//     expect(comm.getMostSouthern()).toBe(redDeer);
// }); 

// test('Test total population method', () => {
//     expect(comm.getPopulation()).toBe(2457300);
//     comm.deleteCity(calgary);
//     expect(comm.getPopulation()).toBe(1117300);
//     const capeTown = new City (6, 'Cape Town', -33.93, 18.42, 3.78e6);
//     comm.createCity(capeTown);
//     expect(comm.getPopulation()).toBe(4897300);
// });


// test('Test key generation method', () => {
//     expect(comm.key).toBe(0);
//     expect(comm.newKey()).toBe(1);
//     expect(comm.newKey()).toBe(2);
//     expect(comm.newKey()).toBe(3);
//     expect(comm.key).toBe(3);
// });