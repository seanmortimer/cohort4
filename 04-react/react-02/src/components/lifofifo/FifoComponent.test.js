import React from 'react';
import { render, screen } from '@testing-library/react';
import Fifo from './FifoComponent';
import { FifoList } from './lifoFifo-logic';

const demoData = [['Ant', 10], ['Bat', 20], ['Cat', 30], ['Dog', 40]];


test('Fifo queue renders empty', () => {
  const queue = new FifoList();
  render(<Fifo queue={queue} />);

  expect(screen.getByText(/add some data/i)).toBeInTheDocument();
});

test('Lifo queue renders with data', () => {
  const queue = new FifoList();
  demoData.forEach((value) => queue.enqueue(value[0], value[1]));
  render(<Fifo queue={queue} />);

  expect(screen.queryByText(/add some data/i)).not.toBeInTheDocument();
  expect(screen.getByText(/ant, \$10/i)).toBeInTheDocument();
  expect(screen.getByText(/bat, \$20/i)).toBeInTheDocument();
  expect(screen.getByText(/cat, \$30/i)).toBeInTheDocument();
  expect(screen.getByText(/dog, \$40/i)).toBeInTheDocument();
});
