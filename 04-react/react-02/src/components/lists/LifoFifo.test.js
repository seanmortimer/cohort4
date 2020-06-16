import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LifoFifo from './LifoFifo';

const { getByText, queryByText, getAllByText } = screen;
// const demoData = [['Bat', 10], ['Dog', 20], ['Koala', 30], ['Panda', 40]];

test('The list shows up', () => {
  render(<LifoFifo />);

  expect(getByText('Check out these lists!')).toBeInTheDocument();
  expect(getByText(/stacks vs queues/i)).toBeInTheDocument();
  expect(getByText(/next item: ant, \$10/i)).toBeInTheDocument();
  expect(getAllByText(/add some data/i)).toHaveLength(2);
});

test('you can add and remove items', () => {
  render(<LifoFifo />);

  fireEvent.click(getByText('Add'));
  expect(getByText(/next item: bat, \$20/i)).toBeInTheDocument();
  expect(getAllByText(/ant, \$10/i)).toHaveLength(2);
  expect(queryByText(/add some data/i)).not.toBeInTheDocument();

  fireEvent.click(getByText('Add'));
  expect(getByText(/next item: cat, \$30/i)).toBeInTheDocument();
  expect(getAllByText(/ant, \$10/i)).toHaveLength(2);
  expect(getAllByText(/bat, \$20/i)).toHaveLength(2);

  fireEvent.click(getByText('Add'));
  expect(getByText(/next item: dog, \$40/i)).toBeInTheDocument();
});
