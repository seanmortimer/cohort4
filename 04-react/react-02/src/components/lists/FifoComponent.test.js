import React from 'react';
import { render, screen } from '@testing-library/react';
import Fifo from './FifoComponent';
import { FifoList } from './LifoFifo-Logic';

// require = 'node-fetch';
global.fetch = require('node-fetch');

const demoData = [['Ant', 10], ['Bat', 20], ['Cat', 30], ['Dog', 40]];


test('Lifo stack renders empty', () => {
  const stack = new FifoList();
  render(<Fifo stack={stack} />);

  expect(screen.getByText(/add some data/i)).toBeInTheDocument();
});

test('Lifo stack renders with data', () => {
  const stack = new FifoList();
  demoData.forEach((value) => stack.enqueue(value[0], value[1]));
  render(<Fifo stack={stack} />);

  expect(screen.queryByText(/add some data/i)).not.toBeInTheDocument();
  expect(screen.getByText(/ant, \$10/i)).toBeInTheDocument();
  expect(screen.getByText(/bat, \$20/i)).toBeInTheDocument();
  expect(screen.getByText(/cat, \$30/i)).toBeInTheDocument();
  expect(screen.getByText(/dog, \$40/i)).toBeInTheDocument();
});
