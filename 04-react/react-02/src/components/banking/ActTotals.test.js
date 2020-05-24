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

  expect(screen.getAllByRole('heading')[0].textContent).toBe('Detailed Information');
  expect(screen.getAllByRole('heading')[1].textContent).toBe('Highest balance account:');
  expect(screen.getAllByRole('heading')[2].textContent).toBe('Lowest balance account:');

  expect(screen.getByText(/total bal/i).textContent).toBe('Total balance:$ 11,500.03');
  expect(screen.getByText(/sauce/i).textContent).toBe('Sauce:$ 5,000.00');
  expect(screen.getByText(/chequing/i).textContent).toBe('Chequing:$ 500.01');
});
