import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ActCard from './ActCard';

const mockDeleteCallback = jest.fn();


test('the card shows the right info - Chequing', () => {
  const chq = { actName: 'Chequing', key: 'Chequing', balance: 500.05 };
  const { getByRole, getByText } = render(<ActCard key={chq.actName} act={chq} />);

  // screen.debug();
  expect(getByRole('heading')).toHaveTextContent('Chequing');
  expect(getByText(/balance/i)).toHaveTextContent('Balance:$ 500.05');
  expect(getByRole('button')).toHaveTextContent('Delete Account');
});

test('the card shows the right info - Savings', () => {
  const sv = { actName: 'Savings', key: 'Savings', balance: 1500 };
  const { getByRole, getByText } = render(<ActCard key={sv.actName} act={sv} />);

  // screen.debug();
  expect(getByRole('heading')).toHaveTextContent('Savings');
  expect(getByText(/balance/i)).toHaveTextContent('Balance:$ 1,500.00');
  expect(getByRole('button')).toHaveTextContent('Delete Account');
});

test('the delete button does stuff', () => {
  const chq = { actName: 'Chequing', key: 'Chequing', balance: 500.05 };
  render(<ActCard key={chq.actName} act={chq} onDel={mockDeleteCallback} />);
  // screen.debug();
  const delBtn = screen.getByRole('button');
  fireEvent.click(delBtn);
  expect(delBtn).toBeVisible();
  expect(mockDeleteCallback).toHaveBeenCalled();
  expect(mockDeleteCallback.mock.calls.length).toBe(1);
});
