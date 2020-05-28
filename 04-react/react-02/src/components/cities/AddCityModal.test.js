import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddCityModal from './AddCityModal';

const mockHideCallback = jest.fn();
const mockAddCallback = jest.fn();


test('add city modal renders', () => {
  render(<AddCityModal show onHide={mockHideCallback} OnAdd={mockAddCallback} />);

  // screen.debug();
  expect(screen.getByText('Add a city')).toBeInTheDocument();
  expect(screen.getByText('Population')).toBeInTheDocument();
  expect(screen.getAllByRole('textbox')).toHaveLength(4);
  expect(screen.getAllByRole('button')).toHaveLength(3);
});


test('close buttons', () => {
  render(<AddCityModal show onHide={mockHideCallback} OnAdd={mockAddCallback} />);

  fireEvent.click(screen.getByText('Cancel'));
  expect(mockHideCallback).toHaveBeenCalled();
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(mockHideCallback).toHaveBeenCalledTimes(2);
});
