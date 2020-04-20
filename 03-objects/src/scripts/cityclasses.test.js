import { City, Community } from './cityclasses.js';

let calgary;
let edmonton;
let redDeer;
let quintero;
let eqTown;
let notAPlace;
let comm;

beforeEach(() => {
    calgary = new City('Calgary', 51.05, -114.05, 1.34e6);
    edmonton = new City('Edmonton', 53.55, -113.49, 9.81e5);
    redDeer = new City('Red Deer', 52.28, -113.81, 1.06e5);
    quintero = new City('Quintero', -32.78, -71.53, 25300);
    eqTown = new City('Equator Town', 0.00, 50.00, 5000);
    notAPlace = new City('Not A Place', 'ostritch', 'falcon', 'ocelot');
    comm = new Community;
});


// City class tests
test('test city creation and import plumbing', () => {
    expect(calgary.name).toBe('Calgary');
    expect(calgary.lat).toBe(51.05);
    expect(edmonton.name).toBe('Edmonton');
    expect(edmonton.long).toBe(-113.49);
    expect(redDeer.pop).toBe(1.06e5);
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


// Community contorller class tests
test('Test which hemisphere method', () => {
    expect(comm.whichSphere(calgary)).toBe('Calgary is in the Northern Hemisphere');
    expect(comm.whichSphere(edmonton)).toBe('Edmonton is in the Northern Hemisphere');
    expect(comm.whichSphere(quintero)).toBe('Quintero is in the Southern Hemisphere');
    expect(comm.whichSphere(eqTown)).toBe('Equator Town is exactly on the Equator!');
    expect(comm.whichSphere(notAPlace)).toBe('Something went wrong');
}); 

test('test city creation method', () => {
    comm.createCity(calgary);
    comm.createCity(edmonton);
    comm.createCity(quintero);
    expect(comm.cities.length).toBe(3);
    expect(comm.cities[0].name).toBe('Calgary');
    expect(comm.cities[1].name).toBe('Edmonton');
    expect(comm.cities[2].name).toBe('Quintero');
});

test('test city deletion method', () => {
    comm.createCity(calgary);
    comm.createCity(edmonton);
    comm.createCity(quintero);
    expect(comm.cities.length).toBe(3);
    expect(comm.cities[0].name).toBe('Calgary');
    comm.deleteCity(calgary);
    expect(comm.cities.length).toBe(2);
    expect(comm.cities[0].name).toBe('Edmonton');
});

// test('Test most northern method', () => {
//     expect(comm.getMostNorthern())
//         .toBe('Edmonton is the northernmost city at latitude 53.55');
    
// }); 
