import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddCityModal from './AddCityModal';

const mockHideCallback = jest.fn();
const mockAddCallback = jest.fn();


test('add city modal renders', () => {
  render(<AddCityModal show onHide={mockHideCallback} onAdd={mockAddCallback} />);

  // screen.debug();
  expect(screen.getByText('Add a city')).toBeInTheDocument();
  expect(screen.getByText('Population')).toBeInTheDocument();
  expect(screen.getAllByRole('textbox')).toHaveLength(4);
  expect(screen.getAllByRole('button')).toHaveLength(3);
  expect(screen.getByText('Add')).toBeDisabled();
});


test('close buttons', () => {
  render(<AddCityModal show onHide={mockHideCallback} onAdd={mockAddCallback} />);

  fireEvent.click(screen.getByText('Cancel'));
  expect(mockHideCallback).toHaveBeenCalled();
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(mockHideCallback).toHaveBeenCalledTimes(2);
});


test('making a city - no input', async () => {
  render(<AddCityModal show onHide={mockHideCallback} onAdd={mockAddCallback} />);
  const inputs = screen.getAllByRole('textbox');

  fireEvent.click(screen.getByText('Add'));
  expect(mockAddCallback).not.toHaveBeenCalled();

  await userEvent.type(inputs[0], 'A');
  await userEvent.type(inputs[1], '10');
  fireEvent.click(screen.getByText('Add'));
  expect(mockAddCallback).not.toHaveBeenCalled();
  expect(screen.getByText('Add')).toBeDisabled();
});

test('making a city - Calgary', async () => {
  render(<AddCityModal show onHide={mockHideCallback} onAdd={mockAddCallback} />);
  const inputs = screen.getAllByRole('textbox');

  await userEvent.type(inputs[0], 'Calgary');
  await userEvent.type(inputs[1], '1000');
  await userEvent.type(inputs[2], '50');
  await userEvent.type(inputs[3], '100');

  expect(screen.getByText('Add')).toBeEnabled();
  fireEvent.click(screen.getByText('Add'));
  expect(mockAddCallback).toHaveBeenCalled();
  expect(mockAddCallback.mock.calls[0][0]).toEqual({
    name: 'Calgary',
    pop: 1000,
    lat: 50,
    long: 100,
  });
});

test('making a city - Edmonton', async () => {
  render(<AddCityModal show onHide={mockHideCallback} onAdd={mockAddCallback} />);
  const inputs = screen.getAllByRole('textbox');

  await userEvent.type(inputs[0], 'Edmonton');
  await userEvent.type(inputs[1], '1000000');
  await userEvent.type(inputs[2], '-50');
  await userEvent.type(inputs[3], '-10');

  fireEvent.click(screen.getByText('Add'));
  expect(mockAddCallback.mock.calls[1][0]).toEqual({
    name: 'Edmonton',
    pop: 1000000,
    lat: -50,
    long: -10,
  });
});
