/* eslint-disable prefer-destructuring */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditCityModal from './EditCityModal';
import Community from './logic/communityClass';


const mockHideCallback = jest.fn();
const mockUpdateCallback = jest.fn();

let cities = [];
let comm = null;
let calg = null;
let bog = null;

beforeEach(() => {
  cities = [
    { key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 },
    { key: 2, lat: 53.55, long: -113.49, name: 'Edmonton', pop: 981000 },
    { key: 3, lat: 52.28, long: -113.81, name: 'Red Deer', pop: 106000 },
    { key: 4, lat: -32.78, long: -71.53, name: 'Quintero', pop: 25300 },
    { key: 5, lat: 0.00, long: 50.00, name: 'Equator Town', pop: 5000 },
    { key: 6, lat: -33.93, long: 18.42, name: 'Cape Town', pop: 3780000 },
    { key: 7, lat: 4.71, long: -74.07, name: 'Bogota', pop: 7400000 },
  ];
  comm = new Community();
  cities.forEach((city) => comm.createCity(city));
  calg = comm.cities[0];
  bog = comm.cities[6];
});


test('edit city modal renders 1', () => {
  render(<EditCityModal show city={calg} onHide={mockHideCallback} onEdit={mockUpdateCallback} />);

  // screen.debug();
  expect(screen.getByText('Move in or out')).toBeInTheDocument();
  expect(screen.getByText('Calgary')).toBeInTheDocument();
  expect(screen.getByText('Current population')).toBeInTheDocument();
  expect(screen.getAllByRole('textbox')).toHaveLength(4);
  expect(screen.getAllByRole('textbox')[0]).toHaveValue('1340000');
  expect(screen.getAllByRole('button')).toHaveLength(3);
});

test('edit city modal renders 2', () => {
  render(<EditCityModal show city={bog} onHide={mockHideCallback} onEdit={mockUpdateCallback} />);

  // screen.debug();
  expect(screen.getByText('Move in or out')).toBeInTheDocument();
  expect(screen.getByText('Bogota')).toBeInTheDocument();
  expect(screen.getByText('Current population')).toBeInTheDocument();
  expect(screen.getAllByRole('textbox')).toHaveLength(4);
  expect(screen.getAllByRole('textbox')[0]).toHaveValue('7400000');
  expect(screen.getAllByRole('button')).toHaveLength(3);
});

test('the close buttons', () => {
  render(<EditCityModal show city={calg} onHide={mockHideCallback} onEdit={mockUpdateCallback} />);

  fireEvent.click(screen.getByText('Cancel'));
  expect(mockHideCallback).toHaveBeenCalled();
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(mockHideCallback).toHaveBeenCalledTimes(2);
});

test('the update button', () => {
  render(<EditCityModal show city={calg} onHide={mockHideCallback} onEdit={mockUpdateCallback} />);

  fireEvent.click(screen.getByText('Update'));
  expect(mockUpdateCallback).toHaveBeenCalled();
});
