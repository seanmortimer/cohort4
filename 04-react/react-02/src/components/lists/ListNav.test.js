import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListNav from './ListNav';

const demoData = [['Bat', 10], ['Dog', 20], ['Koala', 30], ['Panda', 40]];

const mockChangeIndex = jest.fn();

afterEach(() => {
  mockChangeIndex.mockClear();
});

test('The nav renders - data 1', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={0} data={demoData[0]} />);

  // screen.debug();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText('Subject: Bat Amount: $10')).toBeInTheDocument();
});

test('The nav renders - data 2', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={1} data={demoData[1]} />);

  // screen.debug();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText('Subject: Dog Amount: $20')).toBeInTheDocument();
});

test('nav head button', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={3} data={demoData[3]} />);

  fireEvent.click(screen.getByText(/head/i));
  expect(mockChangeIndex.mock.calls[0][0]).toBe(0);
});

test('nav tail button', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={3} data={demoData[3]} />);

  fireEvent.click(screen.getByText(/tail/i));
  expect(mockChangeIndex.mock.calls[0][0]).toBe(-1);
});

test('nav prev button', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={3} data={demoData[3]} />);

  fireEvent.click(screen.getByText(/prev/i));
  expect(mockChangeIndex.mock.calls[0][0]).toBe(2);
});

test('nav next button', () => {
  render(<ListNav onIndexChange={mockChangeIndex} index={3} data={demoData[3]} />);

  fireEvent.click(screen.getByText(/next/i));
  expect(mockChangeIndex).toHaveBeenCalledTimes(1);
  expect(mockChangeIndex.mock.calls[0][0]).toBe(4);
});
