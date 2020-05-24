import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ActCreator from './ActCreator';


test('the message area is displayed', () => {
  render(<ActCreator />);
  // debug();

  expect(getByRole('heading').textContent).toBe('Create new account:');
  expect(getByRole('button').textContent).toBe('Create Account');
});

test.todo('You can create an account', () => {
  render(<ActCreator />);

  
});

test.todo('duplicate names are rejected');
