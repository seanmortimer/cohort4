import React from 'react';
import { render, screen } from '@testing-library/react';
import DepositWithdraw from './DepositWithdraw';


test('the deopists area displays', () => {
    const { getByRole, getByLabelText } = render(<DepositWithdraw />);
    // screen.debug();
    expect(screen.getByRole('heading').textContent).toBe('Deposit or Withdraw:');
    expect(screen.getByLabelText('actSelect').textContent).toBe('');
   
});
