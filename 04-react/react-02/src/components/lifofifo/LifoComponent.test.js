import React from 'react';
import { render, screen } from '@testing-library/react';
import Lifo from './LifoComponent';
import { LifoList } from './LifoFifo-Logic';

const demoData = [['Ant', 10], ['Bat', 20], ['Cat', 30], ['Dog', 40]];

test('Lifo stack renders empty', () => {
  const stack = new LifoList();
  render(<Lifo stack={stack} />);

  expect(screen.getByText(/add some data/i)).toBeInTheDocument();
});

test('Lifo stack renders with data', () => {
  const stack = new LifoList();
  demoData.forEach((value) => stack.addToStack(value[0], value[1]));
  render(<Lifo stack={stack} />);

  expect(screen.queryByText(/add some data/i)).not.toBeInTheDocument();
  expect(screen.getByText(/ant, \$10/i)).toBeInTheDocument();
  expect(screen.getByText(/bat, \$20/i)).toBeInTheDocument();
  expect(screen.getByText(/cat, \$30/i)).toBeInTheDocument();
  expect(screen.getByText(/dog, \$40/i)).toBeInTheDocument();
});
