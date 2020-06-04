import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListCard from './ListCard';
import LinkedList from './listLogic';

const demoData = [['Bat', 10], ['Dog', 20], ['Koala', 30], ['Panda', 40]];
let list = null;

beforeEach(() => {
  list = new LinkedList();
  demoData.forEach((value) => list.insertLast(value[0], value[1]));
});

afterEach(() => {
  list = null;
});

test('cards display properly 1', () => {
  render(<ListCard key={0} node={list.showAtIndex(0)} index={0} />);

  expect(screen.getByText(/index 0/i)).toBeInTheDocument();
  expect(screen.getByText(/bat/i)).toBeInTheDocument();
  expect(screen.getByText(/next item: dog/i)).toBeInTheDocument();
});

test('cards display properly 2', () => {
  render(<ListCard key={1} node={list.showAtIndex(1)} index={1} />);

  expect(screen.getByText(/index 1/i)).toBeInTheDocument();
  expect(screen.getByText(/dog/i)).toBeInTheDocument();
  expect(screen.getByText(/next item: koala/i)).toBeInTheDocument();
});

test('cards display properly tail', () => {
  render(<ListCard key={3} node={list.showAtIndex(3)} index={3} />);

  expect(screen.getByText(/index 3/i)).toBeInTheDocument();
  expect(screen.getByText(/panda/i)).toBeInTheDocument();
  expect(screen.getByText(/next item: null/i)).toBeInTheDocument();
});