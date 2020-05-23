import React from 'react';
import { render } from '@testing-library/react';
import ActCreator from './ActCreator';


test('the message area is displayed', () => {
  const { getAllByRole, getByRole, getByLabelText } = render(<ActCreator />);
  // debug();

  expect(getByRole('heading').textContent).toBe('Create new account:');
  expect(getByRole('button').textContent).toBe('Create Account');
});

test.todo('another test');
