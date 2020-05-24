/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import DepositWithdraw from './DepositWithdraw';

const accounts = [
  { actName: 'Chequing', balance: 500.01 },
  { actName: 'Savings', balance: 1000.02 },
  { actName: 'Vacation', balance: 2000 },
  { actName: 'Napkins', balance: 3000 },
  { actName: 'Sauce', balance: 5000 },
];

test('the deposits area is displayed', () => {
  render(<DepositWithdraw accounts={accounts} />);
  // screen.debug();

  expect(screen.getByRole('heading').textContent).toBe('Deposit or Withdraw:');
  // expect(getByLabelText(/choose/i).textContent).toBe('Please select an account');
  expect(screen.getAllByRole('button')[0].textContent).toBe('Deposit');
  expect(screen.getAllByRole('button')[1].textContent).toBe('Withdraw');
});

test.todo('test without dummy data');
