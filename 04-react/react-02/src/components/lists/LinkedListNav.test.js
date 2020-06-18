import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListNav from './LinkedListNav';
import LinkedList from './LinkedListLogic';

const demoData = [['Ant', 10], ['Bat', 20], ['Cat', 30], ['Dog', 40]];

const mockNavCallback = jest.fn();
let list = null;

beforeEach(() => {
  list = new LinkedList();
  demoData.forEach((value) => list.insertAfterCurrent(value[0], value[1]));
});

afterEach(() => {
  mockNavCallback.mockClear();
  list = null;
});

test('The nav renders - Ants!', () => {
  list.jumpToHead();
  render(<ListNav onNav={mockNavCallback} currentNode={list.currentNode} total={list.total()} />);

  // screen.debug();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText(/Subject: Ant/)).toBeInTheDocument();
  expect(screen.getByText(/amount: \$10/i)).toBeInTheDocument();
  expect(screen.getByText(/Current total: \$100/i)).toBeInTheDocument();
});

test('The nav renders - Bats!', () => {
  list.jumpToHead();
  list.stepForward();
  render(<ListNav onNav={mockNavCallback} currentNode={list.currentNode} total={list.total()} />);

  // screen.debug();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText('Subject: Bat, Amount: $20')).toBeInTheDocument();
  expect(screen.getByText(/Current total: \$100/i)).toBeInTheDocument();
});

test('nav buttons', () => {
  render(<ListNav onNav={mockNavCallback} currentNode={list.currentNode} total={list.total()} />);

  fireEvent.click(screen.getByText(/head/i));
  fireEvent.click(screen.getByText(/tail/i));
  fireEvent.click(screen.getByText(/prev/i));
  fireEvent.click(screen.getByText(/next/i));
  expect(mockNavCallback.mock.calls[0][0]).toBe('head');
  expect(mockNavCallback.mock.calls[1][0]).toBe('tail');
  expect(mockNavCallback.mock.calls[2][0]).toBe('prev');
  expect(mockNavCallback.mock.calls[3][0]).toBe('next');
  expect(mockNavCallback).toHaveBeenCalledTimes(4);
});
