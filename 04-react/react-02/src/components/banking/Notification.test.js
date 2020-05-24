import React from 'react';
import { render, screen } from '@testing-library/react';
import Notification from './Notification';


test('the message area is displayed for blank accounts', () => {
  render(<Notification msg={{ action: '', msg: '' }} />);
  screen.debug();

  expect(screen.getByRole('status').textContent).toBe('Welcome! Please create an account.');
});

test.todo('another test');
