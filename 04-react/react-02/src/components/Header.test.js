import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

const mockNavCallback = jest.fn();


test('the header renders', () => {
  render(<Header onNavClick={mockNavCallback} />);

  // screen.debug();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Tic Tac Toe')).toBeInTheDocument();
  expect(screen.getByText('Banking')).toBeInTheDocument();
});

test('the navigation works', () => {
  render(<Header onNavClick={mockNavCallback} />);

  // screen.debug();
  expect(screen.getByText('Home')).toBeInTheDocument();
  const nav = screen.getAllByRole('link');
  fireEvent.click(nav[0]);
  expect(mockNavCallback).toHaveBeenCalled();
  expect(mockNavCallback.mock.calls[0][0]).toBe('home');
  fireEvent.click(nav[1]);
  expect(mockNavCallback.mock.calls[1][0]).toBe('tictac');
  fireEvent.click(nav[2]);
  expect(mockNavCallback.mock.calls[2][0]).toBe('banking');
  fireEvent.click(nav[3]);
  expect(mockNavCallback.mock.calls[3][0]).toBe('cities');
  fireEvent.click(nav[0]);
  expect(mockNavCallback.mock.calls[4][0]).toBe('home');
});
