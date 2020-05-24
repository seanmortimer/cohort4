import React from 'react';
// eslint-disable-next-line no-unused-vars
import { render, screen } from '@testing-library/react';
import ActCard from './ActCard';


test('the card shows the right info - Chequing', () => {
  const chq = { actName: 'Chequing', balance: 500.05 };
  const { getByRole, getByText } = render(<ActCard key={chq.actName} act={chq} />);

  // screen.debug();
  expect(getByRole('heading').textContent).toBe('Chequing');
  expect(getByText(/balance/i).textContent).toBe('Balance:$ 500.05');
  expect(getByRole('button').textContent).toBe('Delete Account');
});

test('the card shows the right info - Savings', () => {
  const sv = { actName: 'Savings', balance: 1500 };
  const { getByRole, getByText } = render(<ActCard key={sv.actName} act={sv} />);

  // screen.debug();
  expect(getByRole('heading').textContent).toBe('Savings');
  expect(getByText(/balance/i).textContent).toBe('Balance:$ 1,500.00');
  expect(getByRole('button').textContent).toBe('Delete Account');
});
