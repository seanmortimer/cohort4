/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import DepositWithdraw from './DepositWithdraw';


test('the deposits area is displayed', () => {
  const { getAllByRole, getByRole, getByLabelText } = render(<DepositWithdraw />);
  // screen.debug();

  expect(getByRole('heading').textContent).toBe('Deposit or Withdraw:');
  // expect(getByLabelText(/choose/i).textContent).toBe('Please select an account');
  expect(getAllByRole('button')[0].textContent).toBe('Deposit');
  expect(getAllByRole('button')[1].textContent).toBe('Withdraw');
});

test.todo('another test');
