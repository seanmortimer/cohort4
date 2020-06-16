import React from 'react';
import { render, screen } from '@testing-library/react';
import Banking from './Banking';


// const emptyActs = [];
// const acts = [
//   { actName: 'Chequing', balance: 500.01 },
//   { actName: 'Savings', balance: 1000.02 },
//   { actName: 'Vacation', balance: 2000 },
//   { actName: 'Napkins', balance: 3000 },
//   { actName: 'Sauce', balance: 5000 },
// ];S


test('the page displays properly with no accounts', () => {
  render(<Banking />);
  // screen.debug();
  expect(screen.getByText(/bank and bbq/i)).toHaveTextContent('Sean\'s Bank and BBQ Shack');
  expect(screen.getByText(/serving high interest/i))
    .toHaveTextContent('Calgary\'s only financial institution serving high interest and tasty BBQ!');

  const depTitle = screen.getByText(/deposit or withdraw/i).textContent;
  expect(depTitle).toBe('Deposit or Withdraw:');
  const actSelect = screen.getAllByLabelText(/choose an account/i);
  // console.log('actSelect :>> ', actSelect[0].textContent);
  expect(actSelect[0]).toHaveTextContent('Please select an account');
  expect(actSelect[1].outerHTML).toContain('enter amount');

  const welcoMsg = screen.getByRole('status').textContent;
  expect(welcoMsg).toBe('Welcome! Please create an account.');

  const noActs = screen.getByText(/no accounts/i).textContent;
  expect(noActs).toBe('You currently have no accounts to display');
});

test.todo('The rest of the functions');
