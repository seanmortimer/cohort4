import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cities from './Cities';
import postData from './logic/cityfetch';


global.fetch = require('node-fetch');

test('page renders with no data, then demo cities load', async () => {
  await postData('http://localhost:5000/clear');

  render(<Cities />);
  expect(screen.getByText('Add a city')).toBeInTheDocument();

  expect(screen.getByText('Cities of the World')).toBeInTheDocument();
  expect(screen.queryByText('Calgary')).not.toBeInTheDocument();
  expect(screen.getByText('Add some cities!')).toBeInTheDocument();

  // wait for demo cities to load from server
  // await new Promise((r) => setTimeout(r, 500));
  await postData('http://localhost:5000/all');

  expect(screen.getByText('Cities of the World')).toBeInTheDocument();
  expect(screen.getByText('Add a city')).toBeInTheDocument();
  expect(screen.queryByText('Calgary')).toBeInTheDocument();
  expect(screen.queryByText('Calgary')).toBeInTheDocument();
  expect(screen.queryByText('Bogota')).toBeInTheDocument();
  expect(screen.queryByText('Add some cities!')).not.toBeInTheDocument();
  expect(screen.getByText('13,637,300')).toBeInTheDocument();
});

test('you can add a city', async () => {
  await postData('http://localhost:5000/clear');
  render(<Cities />);

  // wait for server
  await postData('http://localhost:5000/all');

  expect(screen.queryByText('City name')).not.toBeInTheDocument();
  userEvent.click(screen.getByText('Add a city'));

  // confirm modal is visible
  expect(screen.queryByText('City name')).toBeInTheDocument();
  let inputs = screen.getAllByRole('textbox');

  await userEvent.type(inputs[0], 'Apple');
  await userEvent.type(inputs[1], '200');
  await userEvent.type(inputs[2], '10');
  await userEvent.type(inputs[3], '-5');
  expect(inputs[0]).toHaveValue('Apple');
  expect(inputs[1]).toHaveValue('200');
  expect(inputs[2]).toHaveValue('10');
  expect(inputs[3]).toHaveValue('-5');

  userEvent.click(screen.getByText('Add'));

  // confirm new city was added to server
  await new Promise((r) => setTimeout(r, 500));

  let cities = await postData('http://localhost:5000/all');
  expect(cities).toContainEqual({
    key: 8,
    lat: 10,
    long: -5,
    name: 'Apple',
    pop: 200,
  });

  // confirm modal is hidden
  expect(screen.queryByText('City name')).not.toBeInTheDocument();

  expect(screen.queryByText('Apple')).toBeInTheDocument();
  expect(screen.queryByText('200')).toBeInTheDocument();
  expect(screen.queryByText('10')).toBeInTheDocument();
  expect(screen.queryByText('-5')).toBeInTheDocument();
  expect(screen.queryByText('Village')).toBeInTheDocument();
  expect(screen.getByText('13,637,500')).toBeInTheDocument();

  userEvent.click(screen.getByText('Add a city'));
  inputs = screen.getAllByRole('textbox');

  await userEvent.type(inputs[0], 'Banana');
  await userEvent.type(inputs[1], '50');
  await userEvent.type(inputs[2], '123');
  await userEvent.type(inputs[3], '-50');

  userEvent.click(screen.getByText('Add'));

  // confirm new city was added to server
  cities = await postData('http://localhost:5000/all');
  expect(cities).toContainEqual({
    key: 9,
    lat: 123,
    long: -50,
    name: 'Banana',
    pop: 50,
  });

  expect(screen.queryAllByText('Banana')).toHaveLength(2);
  expect(screen.queryAllByText('123')).toHaveLength(2);
  expect(screen.queryByText('-50')).toBeInTheDocument();
  expect(screen.queryByText('Hamlet')).toBeInTheDocument();
  expect(screen.getByText('13,637,550')).toBeInTheDocument();
});

test.todo('deleting cities');
test.todo('clearing server');
test.todo('server error handling');
test.todo('add random');
test.todo('city edits');
