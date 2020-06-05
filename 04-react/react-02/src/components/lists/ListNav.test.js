import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListNav from './ListNav';
import LinkedList from './listLogic';

const demoData = [['Bat', 10], ['Dog', 20], ['Koala', 30], ['Panda', 40]];

const mockChangeIndex = jest.fn();
let list = null;

beforeEach(() => {
  list = new LinkedList();
  demoData.forEach((value) => list.insertLast(value[0], value[1]));
});

afterEach(() => {
  mockChangeIndex.mockClear();
  list = null;
});

test('The nav renders - data 1', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={0} list={list} />);

  // screen.debug();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText(/Subject: Bat/i)).toBeInTheDocument();
  expect(screen.getByText(/amount: \$10/i)).toBeInTheDocument();
});

test('The nav renders - data 2', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={1} list={list} />);

  // screen.debug();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText('Subject: Dog, Amount: $20')).toBeInTheDocument();
});

test('nav head button', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={3} list={list} />);

  fireEvent.click(screen.getByText(/head/i));
  expect(mockChangeIndex.mock.calls[0][0]).toBe(0);
});

test('nav tail button', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={3} list={list} />);

  fireEvent.click(screen.getByText(/tail/i));
  expect(mockChangeIndex.mock.calls[0][0]).toBe(-1);
});

test('nav prev button', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={3} list={list} />);

  fireEvent.click(screen.getByText(/prev/i));
  expect(mockChangeIndex.mock.calls[0][0]).toBe(2);
});

test('nav next button', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={3} list={list} />);

  fireEvent.click(screen.getByText(/next/i));
  expect(mockChangeIndex).toHaveBeenCalledTimes(1);
  expect(mockChangeIndex.mock.calls[0][0]).toBe(4);
});


test('list total works', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={3} list={list} />);

  expect(screen.getByText(/Current total: \$100/i)).toBeInTheDocument();
});

test('list total after add', () => {
  list.insertLast('Kangaroo', 50);
  render(<ListNav onIndexChange={mockChangeIndex} index={3} list={list} />);

  expect(screen.getByText(/Current total: \$150/i)).toBeInTheDocument();
});
