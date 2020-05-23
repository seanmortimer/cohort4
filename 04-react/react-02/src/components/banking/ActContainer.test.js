import React from 'react';
import { render, screen, getRoles, getByText } from '@testing-library/react';
import ActContainer from './ActContainer';


test('the message area is displayed', () => {
  const { getAllByRole, getByRole, getByLabelText } = render(<ActContainer />);
  // screen.debug();

  expect(getAllByRole('heading')[0].textContent).toBe('Your Accounts');
  expect(getByRole('group').textContent).toBe('ChequingBalance:$500.00');
});

test.todo('another test');
