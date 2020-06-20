import React from 'react';
import { render, screen } from '@testing-library/react';
import SideBar from './SideBar';
import Community from './logic/communityClass';


let cities = [];
let comm = null;

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
});

afterEach(() => {
  cities = [];
  comm = null;
});

test('sidebar renders with empty data', () => {
  const emptyComm = new Community();
  render(<SideBar cities={emptyComm} />);

  expect(screen.getByText('Cities of the World')).toBeInTheDocument();
  expect(screen.getByText(/northernmost city/i)).toBeInTheDocument();
  expect(screen.getByText(/southernmost city/i)).toBeInTheDocument();
  expect(screen.getAllByText(/latitude/i)).toHaveLength(2);
  expect(screen.getByText(/total population/i)).toBeInTheDocument();
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});


test('sidebar renders with correct data', () => {
  render(<SideBar cities={comm} />);

  expect(screen.getByText('Cities of the World')).toBeInTheDocument();
  expect(screen.getByText('Edmonton')).toBeInTheDocument();
  expect(screen.queryByText('Calgary')).not.toBeInTheDocument();
  expect(screen.getByText('53.55')).toBeInTheDocument();
  expect(screen.getByText('Cape Town')).toBeInTheDocument();
  expect(screen.getByText('-33.93')).toBeInTheDocument();
  expect(screen.getByText('13,637,300')).toBeInTheDocument();
});
