import React from 'react';
// eslint-disable-next-line no-unused-vars
import { render, screen } from '@testing-library/react';
import ActTotals from './ActTotals';

const acts = [
  { actName: 'Chequing', balance: 500.01 },
  { actName: 'Savings', balance: 1000.02 },
  { actName: 'Vacation', balance: 2000 },
  { actName: 'Napkins', balance: 3000 },
  { actName: 'Sauce', balance: 5000 },
];

test('the account totals are diplayed', () => {
  render(<ActTotals accounts={acts} />);
  // screen.debug();

  expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Detailed Information');
  expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Highest balance account:');
  expect(screen.getAllByRole('heading')[2]).toHaveTextContent('Lowest balance account:');

  expect(screen.getByText(/total bal/i)).toHaveTextContent('Total balance:$ 11,500.03');
  expect(screen.getByText(/sauce/i)).toHaveTextContent('Sauce$ 5,000.00');
  expect(screen.getByText(/chequing/i)).toHaveTextContent('Chequing$ 500.01');
});

test('that empty account array doesn\'t break things', () => {
  render(<ActTotals accounts={[]} />);
  // screen.debug();

  expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Detailed Information');
  expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Highest balance account:');
  expect(screen.getAllByRole('heading')[2]).toHaveTextContent('Lowest balance account:');
});
