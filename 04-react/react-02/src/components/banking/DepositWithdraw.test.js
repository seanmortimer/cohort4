import React from 'react';
import { render, screen } from '@testing-library/react';
import Notification from './Notification';


test('the message area is displayed', () => {
  const { getAllByRole, getByRole, getByLabelText } = render(<Notification />);
  // screen.debug();

  expect(getByRole('status').textContent).toBe('Welcome! Please create an account.');
});

test.todo('another test');
