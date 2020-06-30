import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListCard from './LinkedListCard';
import LinkedList from './linkedListLogic';

const demoData = [['Ant', 10], ['Bat', 20], ['Cat', 30], ['Dog', 40]];
let list = null;
const mockClickFn = jest.fn();

beforeEach(() => {
  list = new LinkedList();
  // demoData.forEach((value) => list.insertAfterCurrent(value[0], value[1]));
  demoData.forEach((value) => list.insertAfterCurrent(value[0], value[1]));
});

afterEach(() => {
  list = null;
});

test('cards display properly 1', () => {
  render(<ListCard key={1} node={list.head} sel onCardClick={mockClickFn} />);

  expect(screen.getByText(/ant/i)).toBeInTheDocument();
  expect(screen.getByText(/next item: bat/i)).toBeInTheDocument();
});

test('cards display properly 2', () => {
  render(<ListCard key={2} node={list.head.forwardNode} sel onCardClick={mockClickFn} />);

  expect(screen.getByText(/bat/i)).toBeInTheDocument();
  expect(screen.getByText(/next item: cat/i)).toBeInTheDocument();
});

test('cards display properly tail', () => {
  render(<ListCard key={4} node={list.tail} sel onCardClick={mockClickFn} />);

  expect(screen.getByText(/dog/i)).toBeInTheDocument();
  expect(screen.getByText(/next item: null/i)).toBeInTheDocument();
});

test('card clicks pass node', () => {
  render(<ListCard key={4} node={list.tail} sel onCardClick={mockClickFn} />);

  expect(screen.getByText(/dog/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/dog, \$40/i));
  expect(mockClickFn).toHaveBeenCalled();
  expect(mockClickFn.mock.calls[0][0]).toEqual(list.tail);
});
