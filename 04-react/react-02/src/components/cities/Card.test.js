import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';
import Community from './logic/communityClass';

const mockEditClick = jest.fn();
const mockDelClick = jest.fn();
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
  mockEditClick.mockClear();
  mockDelClick.mockClear();
});

test('city cards render - Calgary', () => {
  const calg = comm.cities[0];
  render(<Card key={calg.key} city={calg} onEdit={mockEditClick} onDelete={mockDelClick} />);

  // screen.debug();
  expect(screen.getByText(/calgary/i)).toBeInTheDocument();
  expect(screen.getByText(/population/i)).toHaveTextContent('Population');
  expect(screen.getByText(/1,340,000/i)).toBeInTheDocument();
  expect(screen.getByText(/city/i)).toBeInTheDocument();
  expect(screen.getByText(/northern/i)).toBeInTheDocument();
  expect(screen.getByText(/-114.05/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText('Delete'));
  expect(mockDelClick).toHaveBeenCalledTimes(1);
  expect(mockDelClick.mock.calls[0][0]).toBe(1);
});

test('city cards render - Quintero', () => {
  const quin = comm.cities[3];
  render(<Card key={quin.key} city={quin} onEdit={mockEditClick} onDelete={mockDelClick} />);

  expect(screen.getByText('Quintero')).toBeInTheDocument();
  expect(screen.getByText(/population/i)).toHaveTextContent('Population');
  expect(screen.getByText('25,300')).toBeInTheDocument();
  expect(screen.getByText('Large town')).toBeInTheDocument();
  expect(screen.getByText('Southern')).toBeInTheDocument();
  expect(screen.getByText('-32.78')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Delete'));
  expect(mockDelClick).toHaveBeenCalledTimes(1);
  expect(mockDelClick.mock.calls[0][0]).toBe(4);
});

test.todo('Test edit modal');
test.todo('rename cards');
