import React from 'react';
import { render, screen } from '@testing-library/react';
import ActCards from './ActCards';


test('the message area is displayed', () => {
  const { getAllByRole, getByRole, getByText } = render(<ActCards />);
  // screen.debug();

  expect(getByRole('heading').textContent).toBe('Chequing');
  expect(getByText(/balance/i).textContent).toBe('Balance:$500.00');
  expect(getByRole('button')).toBe('Delete Account');
});

test.todo('another test');
