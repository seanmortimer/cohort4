import React from 'react';
import { render, screen } from '@testing-library/react';
import Notification from './Notification';


test('the message area is displayed', () => {
  render(<Notification message="Welcome! Please create an account." />);
  // screen.debug();

  expect(screen.getByRole('status').textContent).toBe('Welcome! Please create an account.');
});

test.todo('another test');
