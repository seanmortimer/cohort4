import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

let nav;
beforeEach(() => {
  render(<App />);
  nav = screen.getAllByRole('link');
});


test('the app renders to the home page', () => {
  // screen.debug();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Tic Tac Toe')).toBeInTheDocument();
  expect(screen.getByText('Banking')).toBeInTheDocument();

  const link = screen.getByText(/learn react/i);
  expect(link).toHaveTextContent('Learn React');
  expect(link).toHaveAttribute('href', 'https://reactjs.org');
  expect(screen.queryByText(/bank and bbq/i)).toBeNull();
});

test('the app navigates on clicks', () => {
  fireEvent.click(nav[1]);
  expect(screen.queryByText(/next player/i)).toBeInTheDocument();
  expect(screen.queryByText(/welcome to react/i)).toBeNull();
  expect(screen.queryByText(/bank and bbq/i)).toBeNull();

  fireEvent.click(nav[2]);
  expect(screen.queryByText(/bank and bbq/i)).toBeInTheDocument();
  expect(screen.queryByText(/next player/i)).toBeNull();
  expect(screen.queryByText(/welcome to react/i)).toBeNull();

  fireEvent.click(nav[3]);
  expect(screen.queryByText(/check out all these cities/i)).toBeInTheDocument();
  expect(screen.queryByText(/add a city/i)).toBeInTheDocument();
  expect(screen.queryByText(/clear server/i)).toBeInTheDocument();
  expect(screen.queryByText(/bank and bbq/i)).toBeNull();


  fireEvent.click(nav[4]);
  expect(screen.queryByText(/check out all these cities/i)).toBeNull();
  expect(screen.queryByText(/check out this list/i)).toBeInTheDocument();
  expect(screen.queryByText(/insert at head/i)).toBeInTheDocument();
  expect(screen.queryByText(/current total/i)).toBeInTheDocument();

  fireEvent.click(nav[5]);
  expect(screen.queryByText(/check out this list/i)).toBeNull();
  expect(screen.queryByText(/check out these lists/i)).toBeInTheDocument();
  expect(screen.queryByText(/next item: ant, \$10/i)).toBeInTheDocument();
  expect(screen.queryAllByText(/add some data/i)).toHaveLength(2);

  fireEvent.click(nav[6]);
  expect(screen.queryByText(/check out these lists/i)).toBeNull();
  expect(screen.queryByText(/choose a theme/i)).toBeInTheDocument();
  expect(screen.queryByText(/current theme: blue/i)).toBeInTheDocument();
});
