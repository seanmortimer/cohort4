import React from 'react';
import { render, screen } from '@testing-library/react';
import ActTotals from './ActTotals';


test('the message area is displayed', () => {
  const { getAllByRole, getByRole, getByLabelText } = render(<ActTotals />);
  // screen.debug();

  expect(getAllByRole('body')[0].textContent).toBe('Detailed Information');
});

test.todo('another test');
