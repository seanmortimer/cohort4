import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cities from './Cities';


let cities = [];

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
});

afterEach(() => {
  cities = [];
});


test('page renders with no data', () => {
  render(<Cities />);

  expect(screen.getByText('Cities of the World')).toBeInTheDocument();
  expect(screen.queryByText('Calgary')).not.toBeInTheDocument();
  expect(screen.getByText('Add some cities!')).toBeInTheDocument();
  expect(screen.getByText('Add a city')).toBeInTheDocument();
});

test.skip('you can add a city', async () => {
  render(<Cities />);

  expect(screen.queryByText('City name')).not.toBeInTheDocument();
  userEvent.click(screen.getByText('Add a city'));
  expect(screen.queryByText('City name')).toBeInTheDocument();
  const inputs = screen.getAllByRole('textbox');
  await userEvent.type(inputs[0], 'Calgary');
  await userEvent.type(inputs[1], '1340000');
  await userEvent.type(inputs[0], '51.05');
  await userEvent.type(inputs[0], '-114.05');
  await userEvent.click(screen.getByText('Add'));

  screen.debug();
  expect(screen.queryByText('Calgary')).toBeInTheDocument();
});
