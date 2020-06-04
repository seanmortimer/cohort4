import React from 'react';
import { render, screen, fireEvent, getAllByRole } from '@testing-library/react';
import Lists from './Lists';
import animals from '../../assets/data/animals.json';


// const demoData = [['Bat', 10], ['Dog', 20], ['Koala', 30], ['Panda', 40]];

test('The list shows up', () => {
  render(<Lists />);

  expect(screen.getByText('Check out this list!')).toBeInTheDocument();
  expect(screen.getByText('Linked List')).toBeInTheDocument();
  expect(screen.getByText('Current item:')).toBeInTheDocument();
  expect(screen.getByText('Index 0')).toBeInTheDocument();
  expect(screen.getByText('Subject: Bat Amount: $10')).toBeInTheDocument();
});

test('navigating list works', () => {
  render(<Lists />);

  fireEvent.click(screen.getByText('Next'));
  expect(screen.queryByText('Subject: Bat Amount: $10')).not.toBeInTheDocument();
  expect(screen.queryByText('Subject: Dog Amount: $20')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Next'));
  expect(screen.queryByText('Subject: Dog Amount: $20')).not.toBeInTheDocument();
  expect(screen.queryByText('Subject: Koala Amount: $30')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Head'));
  expect(screen.queryByText('Subject: Koala Amount: $30')).not.toBeInTheDocument();
  expect(screen.queryByText('Subject: Bat Amount: $10')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Tail'));
  expect(screen.queryByText('Subject: Panda Amount: $40')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Previous'));
  expect(screen.queryByText('Subject: Koala Amount: $30')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Previous'));
  expect(screen.queryByText('Subject: Dog Amount: $20')).toBeInTheDocument();
});


test('The items are inserted correctly', () => {
  render(<Lists />);
  const sub = screen.getByLabelText(/subject/i);
  const amnt = screen.getByLabelText(/amount/i);

  fireEvent.click(screen.getByText('Next'));
  fireEvent.change(sub, { target: { value: 'Kangaroo' } });
  fireEvent.change(amnt, { target: { value: 50 } });

  expect(sub).toHaveValue('Kangaroo');
  expect(amnt).toHaveValue('50');

  fireEvent.click(screen.getByText('Insert here'));
  expect(screen.getByText('Index 1: Kangaroo, $50 >> Next item: Dog, $20')).toBeInTheDocument();

});
