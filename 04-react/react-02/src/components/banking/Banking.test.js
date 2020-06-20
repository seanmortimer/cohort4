import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Banking from './Banking';

const {
  getByText,
  getAllByText,
  getByRole,
  queryByText,
  queryAllByText,
  getAllByLabelText,
  getByPlaceholderText,
} = screen;


test('the page displays properly with no accounts', () => {
  render(<Banking />);
  // screen.debug();
  expect(getByText(/bank and bbq/i)).toHaveTextContent('Sean\'s Bank and BBQ Shack');
  expect(getByText(/serving high interest/i)).toHaveTextContent(
    'Calgary\'s only financial institution serving high interest and tasty BBQ!',
  );

  const depTitle = getByText(/deposit or withdraw/i).textContent;
  expect(depTitle).toBe('Deposit or Withdraw:');
  const actSelect = getAllByLabelText(/choose an account/i);
  expect(actSelect[0]).toHaveTextContent('Please select an account');
  expect(actSelect[1].outerHTML).toContain('enter amount');

  const welcoMsg = getByRole('status').textContent;
  expect(welcoMsg).toBe('Welcome! Please create an account.');

  const noActs = getByText(/no accounts/i).textContent;
  expect(noActs).toBe('You currently have no accounts to display');
});

test('create, update, delete accounts', async () => {
  render(<Banking />);

  const createButton = getByText('Create Account');
  const actInput = getByPlaceholderText('enter account name');
  const actSelector = getByRole('combobox');
  const depWdInput = getByPlaceholderText('enter amount');
  const depButton = getByText('Deposit');
  const wdButton = getByText('Withdraw');
  const details = getByText(/detailed/i).parentNode;


  await userEvent.type(actInput, 'Chequing');
  expect(actInput.value).toBe('Chequing');
  userEvent.click(createButton);
  expect(actInput.value).toBe('');

  expect(queryAllByText('Chequing')).toHaveLength(4);
  expect(getByText(/account chequing has been created/i)).toBeInTheDocument();

  // make sure duplicate names are rejected
  await userEvent.type(actInput, 'Chequing');
  expect(actInput.value).toBe('Chequing');
  userEvent.click(createButton);
  expect(queryAllByText('Chequing')).toHaveLength(4);
  expect(getByText(/An account named Chequing already exists./i)).toBeInTheDocument();

  await userEvent.type(actInput, 'Savings');
  userEvent.click(createButton);
  expect(getByText(/account savings has been created/i)).toBeInTheDocument();

  await userEvent.type(actInput, 'Vacation');
  userEvent.click(createButton);
  expect(getByText(/account vacation has been created/i)).toBeInTheDocument();
  expect(getByText(/total balance/i)).toHaveTextContent('Total balance:$ 0.00');


  // test making deposits
  const cardBalances = getAllByText('Balance:');
  expect(cardBalances[0]).toHaveTextContent('Balance:$ 0.00');
  expect(cardBalances[1]).toHaveTextContent('Balance:$ 0.00');
  expect(cardBalances[2]).toHaveTextContent('Balance:$ 0.00');

  expect(details).toHaveTextContent(/Highest balance account:Chequing\$ 0.00/);

  userEvent.selectOptions(actSelector, 'Chequing');
  await userEvent.type(depWdInput, '10');
  fireEvent.keyDown(depWdInput, { key: 'Enter', code: 'Enter' })
  userEvent.click(depButton);
  // await userEvent.type(depWdInput, '{enter}');


  expect(getByText(/\$ 10.00 has been deposited to Chequing/i)).toBeInTheDocument();
  expect(cardBalances[0]).toHaveTextContent('Balance:$ 10.00');
  expect(details).toHaveTextContent('Total balance:$ 10.00');
  expect(details).toHaveTextContent(/Highest balance account:Chequing\$ 10.00/);
  expect(details).toHaveTextContent(/Lowest balance account:Savings\$ 0.00/);

  userEvent.selectOptions(actSelector, 'Vacation');
  await userEvent.type(depWdInput, '100');
  userEvent.click(depButton);

  expect(getByText(/\$ 100.00 has been deposited to Vacation/i)).toBeInTheDocument();
  expect(cardBalances[0]).toHaveTextContent('Balance:$ 10.00');
  expect(cardBalances[2]).toHaveTextContent('Balance:$ 100.00');
  expect(details).toHaveTextContent('Total balance:$ 110.00');
  expect(details).toHaveTextContent(/Highest balance account:Vacation\$ 100.00/);
  expect(details).toHaveTextContent(/Lowest balance account:Savings\$ 0.00/);

  userEvent.selectOptions(actSelector, 'Savings');
  await userEvent.type(depWdInput, '500.50');
  userEvent.click(depButton);

  expect(getByText(/\$ 500.50 has been deposited to Savings/i)).toBeInTheDocument();
  expect(cardBalances[0]).toHaveTextContent('Balance:$ 10.00');
  expect(cardBalances[1]).toHaveTextContent('Balance:$ 500.50');
  expect(cardBalances[2]).toHaveTextContent('Balance:$ 100.00');
  expect(details).toHaveTextContent('Total balance:$ 610.50');
  expect(details).toHaveTextContent(/Highest balance account:Savings\$ 500.50/);
  expect(details).toHaveTextContent(/Lowest balance account:Chequing\$ 10.00/);


  // check NaN and empty input rejection
  userEvent.selectOptions(actSelector, 'Savings');
  userEvent.click(depButton);
  userEvent.click(wdButton);

  userEvent.selectOptions(actSelector, 'Savings');
  await userEvent.type(depWdInput, 'batman');
  userEvent.click(depButton);
  expect(getByText(/I generally find it easier to work with numbers/)).toBeInTheDocument();
  expect(cardBalances[1]).toHaveTextContent('Balance:$ 500.50');

  userEvent.selectOptions(actSelector, 'Vacation');
  await userEvent.type(depWdInput, 'robin');
  userEvent.click(wdButton);
  expect(getByText(/I generally find it easier to work with numbers/)).toBeInTheDocument();
  expect(cardBalances[2]).toHaveTextContent('Balance:$ 100.00');


  // make some withdrawals
  userEvent.selectOptions(actSelector, 'Chequing');
  await userEvent.type(depWdInput, '10');
  userEvent.click(wdButton);

  expect(getByText(/\$ 10.00 has been withdrawn from Chequing/i)).toBeInTheDocument();
  expect(cardBalances[0]).toHaveTextContent('Balance:$ 0.00');
  expect(details).toHaveTextContent('Total balance:$ 600.50');
  expect(details).toHaveTextContent(/Highest balance account:Savings\$ 500.50/);
  expect(details).toHaveTextContent(/Lowest balance account:Chequing\$ 0.00/);

  userEvent.selectOptions(actSelector, 'Vacation');
  await userEvent.type(depWdInput, '0.75');
  userEvent.click(wdButton);

  expect(getByText(/\$ 0.75 has been withdrawn from Vacation/i)).toBeInTheDocument();
  expect(cardBalances[0]).toHaveTextContent('Balance:$ 0.00');
  expect(cardBalances[2]).toHaveTextContent('Balance:$ 99.25');
  expect(details).toHaveTextContent('Total balance:$ 599.75');
  expect(details).toHaveTextContent(/Highest balance account:Savings\$ 500.50/);
  expect(details).toHaveTextContent(/Lowest balance account:Chequing\$ 0.00/);

  userEvent.selectOptions(actSelector, 'Savings');
  await userEvent.type(depWdInput, '450.5');
  userEvent.click(wdButton);

  expect(getByText(/\$ 450.50 has been withdrawn from Savings/i)).toBeInTheDocument();
  expect(cardBalances[0]).toHaveTextContent('Balance:$ 0.00');
  expect(cardBalances[1]).toHaveTextContent('Balance:$ 50.00');
  expect(cardBalances[2]).toHaveTextContent('Balance:$ 99.25');
  expect(details).toHaveTextContent('Total balance:$ 149.25');
  expect(details).toHaveTextContent(/Highest balance account:Vacation\$ 99.25/);
  expect(details).toHaveTextContent(/Lowest balance account:Chequing\$ 0.00/);


  // delete accounts
  const delButtons = getAllByText('Delete Account');

  userEvent.click(delButtons[1]);
  expect(queryByText('Savings')).toBeNull();
  expect(cardBalances[0]).toHaveTextContent('Balance:$ 0.00');
  expect(cardBalances[2]).toHaveTextContent('Balance:$ 99.25');
  expect(details).toHaveTextContent('Total balance:$ 99.25');
  expect(details).toHaveTextContent(/Highest balance account:Vacation\$ 99.25/);
  expect(details).toHaveTextContent(/Lowest balance account:Chequing\$ 0.00/);

  userEvent.click(delButtons[2]);
  expect(queryByText('Vacation')).toBeNull();
  expect(cardBalances[0]).toHaveTextContent('Balance:$ 0.00');
  expect(details).toHaveTextContent('Total balance:$ 0.00');
  expect(details).toHaveTextContent(/Highest balance account:Chequing\$ 0.00/);
  expect(details).toHaveTextContent(/Lowest balance account:Chequing\$ 0.00/);

  userEvent.click(delButtons[0]);
  expect(queryByText('Chequing')).toBeNull();
  expect(details).toHaveTextContent('Total balance:$ 0.00');
  expect(details).toHaveTextContent(/Highest balance account:\$ 0.00/);
  expect(details).toHaveTextContent(/Lowest balance account:\$ 0.00/);
  expect(getByText(/currently have no accounts/i)).toBeInTheDocument();
});
