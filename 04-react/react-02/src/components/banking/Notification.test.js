import React from 'react';
import { render, screen } from '@testing-library/react';
import Notification from './Notification';


test('clear message ', () => {
  render(<Notification notif={{ action: 'clear', actName: '', amnt: 1000 }} />);
  expect(screen.getByRole('status')).toHaveTextContent('');
});

test('the welcome message is displayed', () => {
  render(<Notification notif={{ action: 'welco', actName: '', amnt: null }} />);
  // screen.debug();
  expect(screen.getByRole('status')).toHaveTextContent('Welcome! Please create an account.');
});

test('new account message ', () => {
  render(<Notification notif={{ action: 'newAct', actName: 'Saving', amnt: null }} />);
  expect(screen.getByRole('status')).toHaveTextContent('Account Saving has been created.');
});

test('account exists message ', () => {
  render(<Notification notif={{ action: 'actExists', actName: 'Saving', amnt: null }} />);
  expect(screen.getByRole('status')).toHaveTextContent('An account named Saving already exists.');
});

test('deposit message ', () => {
  render(<Notification notif={{ action: 'dep', actName: 'Vacation', amnt: 1000 }} />);
  expect(screen.getByRole('status')).toHaveTextContent('$ 1,000.00 has been deposited to Vacation.');
});

test('withdaw message ', () => {
  render(<Notification notif={{ action: 'wd', actName: 'Vacation', amnt: 1000 }} />);
  expect(screen.getByRole('status')).toHaveTextContent('$ 1,000.00 has been withdrawn from Vacation.');
});

test('not a number message ', () => {
  render(<Notification notif={{ action: 'nan', actName: 'Vacation', amnt: 1000 }} />);
  expect(screen.getByRole('status')).toHaveTextContent('I generally find it easier to work with numbers greater than zero.');
});

test('delete message ', () => {
  render(<Notification notif={{ action: 'del', actName: 'Vacation', amnt: null }} />);
  expect(screen.getByRole('status')).toHaveTextContent('Account Vacation has been deleted.');
});

test('no message ', () => {
  render(<Notification notif={{ action: '', actName: 'Chequing', amnt: 1000 }} />);
  expect(screen.getByRole('status')).toHaveTextContent('');
});
