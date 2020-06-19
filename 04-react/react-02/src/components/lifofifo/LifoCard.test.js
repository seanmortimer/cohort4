import React from 'react';
import { render, screen } from '@testing-library/react';
import LifoCard from './LifoCard';
import { LifoList } from './lifoFifo-logic';


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
  render(<LifoCard key={1} node={stack.head} />);

  expect(screen.getByText(/ant, \$10/i)).toBeInTheDocument();
});

test('cards display properly - Cat', () => {
  render(<LifoCard key={2} node={stack.head.forwardNode} />);

  expect(screen.getByText(/bat, \$20/i)).toBeInTheDocument();
});
