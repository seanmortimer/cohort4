import { Community } from './cityclasses.js';
import domFunction from './city-dom-functions.js';

let comm = null;
let calgary = null;
let edmonton = null;
let quintero = null;
let calgaryCard = null;
let edmontonCard = null;
let quinteroCard = null;


beforeEach(() => {
  comm = new Community;

  comm.createCity('Calgary', 51.05, -114.05, 1.34e6);
  comm.createCity('Edmonton', 53.55, -113.49, 9.81e5);
  comm.createCity('Red Deer', 52.28, -113.81, 1.06e5);
  comm.createCity('Quintero', -32.78, -71.53, 25300);

  calgary = comm.findByKey(1);
  edmonton = comm.findByKey(2);
  quintero = comm.findByKey(4);

  calgaryCard = domFunction.newCityCard(calgary, comm.whichSphere(1));
  edmontonCard = domFunction.newCityCard(edmonton, comm.whichSphere(2));
  quinteroCard = domFunction.newCityCard(quintero, comm.whichSphere(4));
});


test('Test city card construction', () => {

  const card1 = domFunction.newCityCard(calgary, comm.whichSphere(1));
  const divs1 = card1.querySelectorAll('DIV');
  const card2 = domFunction.newCityCard(quintero, comm.whichSphere(4));
  const divs2 = card2.querySelectorAll('DIV');

  // Test Calgary card
  expect(card1.nodeName).toBe('DIV');
  expect(card1.className).toBe('card');
  expect(card1.id).toBe('idCard1');
  expect(divs1[0].nodeName).toBe('DIV');
  expect(divs1[0].className).toBe('card-header');
  expect(divs1[0].firstElementChild.nodeName).toBe('H4');
  expect(divs1[0].firstElementChild.className).toBe('card-title');
  expect(divs1[0].textContent).toBe('CalgaryKey: 1');
  expect(divs1[0].lastElementChild.nodeName).toBe('P');
  expect(divs1[0].lastElementChild.className).toBe('card-category');
  expect(divs1[0].lastElementChild.outerHTML).toBe('<p class="card-category" id="idCardKey1">Key: 1</p>');


  expect(divs1[1].className).toBe('card-body');
  expect(divs1[1].firstElementChild.nodeName).toBe('DIV');
  expect(divs1[1].firstElementChild.className).toBe('row');
  expect(divs1[1].innerHTML).toBe(  // copied from HTML
    '<div class="row"><div class="col-7 pr-0 font-weight-bold text-nowrap"><div>Population:</div>' +
        '<div>Classification:</div><div>Hemisphere:</div><div>Latitude:</div><div>Longitude:</div></div>' +
        '<div class="col-5 pl-0 text-right text-nowrap"><div id="idPop1">1,340,000</div><div id="idSize1">City</div>' +
        '<div id="idHemi1">Northern</div><div id="idLat1">51.05</div><div id="idLong1">-114.05</div></div></div><hr><div class="text-right">' +
        '<button class="btn btn-sm" id="idE1" data-toggle="modal" data-target="#idEditCity" action="edit">Edit</button>' +
        '<button class="btn btn-danger btn-fill btn-sm ml-1" id="idD1" action="delete">Delete</button></div>'
  );

  // Test Quintero card
  expect(card2.nodeName).toBe('DIV');
  expect(card2.className).toBe('card');
  expect(card2.id).toBe('idCard4');
  expect(divs2[0].nodeName).toBe('DIV');
  expect(divs2[0].className).toBe('card-header');
  expect(divs2[0].firstElementChild.nodeName).toBe('H4');
  expect(divs2[0].firstElementChild.className).toBe('card-title');
  expect(divs2[0].textContent).toBe('QuinteroKey: 4');
  expect(divs2[0].lastElementChild.nodeName).toBe('P');
  expect(divs2[0].lastElementChild.className).toBe('card-category');
  expect(divs2[0].lastElementChild.outerHTML).toBe('<p class="card-category" id="idCardKey4">Key: 4</p>');

  expect(divs2[1].className).toBe('card-body');
  expect(divs2[1].firstElementChild.nodeName).toBe('DIV');
  expect(divs2[1].firstElementChild.className).toBe('row');
  expect(divs2[1].innerHTML).toBe(  // copied from HTML
    '<div class="row"><div class="col-7 pr-0 font-weight-bold text-nowrap"><div>Population:</div>' +
        '<div>Classification:</div><div>Hemisphere:</div><div>Latitude:</div><div>Longitude:</div></div>' +
        '<div class="col-5 pl-0 text-right text-nowrap"><div id="idPop4">25,300</div><div id="idSize4">Large town</div>' +
        '<div id="idHemi4">Southern</div><div id="idLat4">-32.78</div><div id="idLong4">-71.53</div></div></div><hr><div class="text-right">' +
        '<button class="btn btn-sm" id="idE4" data-toggle="modal" data-target="#idEditCity" action="edit">Edit</button>' +
        '<button class="btn btn-danger btn-fill btn-sm ml-1" id="idD4" action="delete">Delete</button></div>'
  );
});


test('test city card deletion', () => {
  const div = document.createElement('DIV');

  div.appendChild(calgaryCard);
  div.appendChild(edmontonCard);
  div.appendChild(quinteroCard);

  let cityNames = div.querySelectorAll('H4');

  expect(cityNames.length).toBe(3);
  expect(cityNames[0].innerHTML).toBe('Calgary');
  expect(cityNames[1].innerHTML).toBe('Edmonton');
  expect(cityNames[2].innerHTML).toBe('Quintero');

  domFunction.delCard(div.firstChild);
  cityNames = div.querySelectorAll('H4');

  expect(cityNames.length).toBe(2);
  expect(cityNames[0].innerHTML).toBe('Edmonton');
  expect(cityNames[1].innerHTML).toBe('Quintero');

  domFunction.delCard(div.firstChild);
  cityNames = div.querySelectorAll('H4');

  expect(cityNames.length).toBe(1);
  expect(cityNames[0].innerHTML).toBe('Quintero');
});


test('test getting key from the card', () => {
  expect(domFunction.keyFromCard(calgaryCard)).toBe('1');
  expect(domFunction.keyFromCard(edmontonCard)).toBe('2');
  expect(domFunction.keyFromCard(quinteroCard)).toBe('4');
});

test('test updating card population', () => {
  let calgaryPop = calgaryCard.querySelector('#idPop1');
  let calgarySize = calgaryCard.querySelector('#idSize1');
  expect(calgaryPop.textContent).toBe('1,340,000');
  expect(calgarySize.textContent).toBe('City');

  domFunction.upateCardPop(calgaryCard, 350000, 'City');

  calgaryPop = calgaryCard.querySelector('#idPop1');
  calgarySize = calgaryCard.querySelector('#idSize1');
  expect(calgaryPop.textContent).toBe('350,000');
  expect(calgarySize.textContent).toBe('City');

  let edmPop = edmontonCard.querySelector('#idPop2');
  let edmSize = edmontonCard.querySelector('#idSize2');
  expect(edmPop.textContent).toBe('981,000');
  expect(edmSize.textContent).toBe('City');

  domFunction.upateCardPop(edmontonCard, 200, 'Town');

  edmPop = edmontonCard.querySelector('#idPop2');
  edmSize = edmontonCard.querySelector('#idSize2');
  expect(edmPop.textContent).toBe('200');
  expect(edmSize.textContent).toBe('Town');
});