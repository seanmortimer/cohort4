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
  // console.log('nav :>> ', nav[0].textContent);
  fireEvent.click(nav[2]);
  // expect(nav).toBe();
});
