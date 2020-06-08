import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LifoCard from './LifoCard';
import { LifoList } from './LifoFifo-Logic';


const demoData = [['Ant', 10], ['Bat', 20], ['Cat', 30], ['Dog', 40]];
let stack = null;

beforeEach(() => {
  stack = new LifoList();
  demoData.forEach((value) => stack.addToStack(value[0], value[1]));
});

afterEach(() => {
  stack = null;
});

test('cards display properly -Ants', () => {
  render(<LifoCard key={1} node={stack.tail} />);

  expect(screen.getByText(/ant, \$10/i)).toBeInTheDocument();
});

test('cards display properly - Cat', () => {
  render(<LifoCard key={2} node={stack.head.forwardNode} />);

  expect(screen.getByText(/cat, \$30/i)).toBeInTheDocument();
});
