import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DepositWithdraw from './DepositWithdraw';

const mockDepCallback = jest.fn();
const mockWdCallback = jest.fn();

const accounts = [
  { actName: 'Chequing', balance: 500.01 },
  { actName: 'Savings', balance: 1000.02 },
  { actName: 'Vacation', balance: 2000 },
  { actName: 'Napkins', balance: 3000 },
  { actName: 'Sauce', balance: 5000 },
];

const emptyActs = [];

afterEach(() => {
  mockDepCallback.mockClear();
  mockWdCallback.mockClear();
});

test('the deposits area is displayed', () => {
  render(<DepositWithdraw accounts={accounts} onDW={mockDepCallback} />);
  // screen.debug();

  expect(screen.getByRole('heading')).toHaveTextContent('Deposit or Withdraw:');
  // expect(getByLabelText(/choose/i).textContent).toBe('Please select an account');
  expect(screen.getAllByRole('button')[0]).toHaveTextContent('Deposit');
  expect(screen.getAllByRole('button')[1]).toHaveTextContent('Withdraw');
});

test('test empty selector works', () => {
  render(<DepositWithdraw accounts={emptyActs} onDW={mockDepCallback} />);

  // screen.debug();
  const select = screen.getByText(/select an account/i);
  expect(select).toBeInTheDocument();
  expect(select.value).toBe('Please select an account');
});

test('accounts appear in drop down', () => {
  render(<DepositWithdraw accounts={accounts} onDW={mockDepCallback} />);
  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toHaveValue('Please select an account');

  const chequing = screen.getByText(/chequing/i);
  const vacation = screen.getByText(/vacation/i);
  const sauce = screen.getByText(/sauce/i);
  expect(vacation.value).toBe('Vacation');
  expect(chequing).toBeInTheDocument();
  expect(vacation).toBeInTheDocument();
  expect(sauce).toBeInTheDocument();
});

test('non number text gives a warning message, does\'t submit', async () => {
  render(<DepositWithdraw accounts={accounts} onDW={mockDepCallback} />);
  const dropdown = screen.getByRole('combobox');
  const txtBox = screen.getByRole('textbox');
  const btns = screen.getAllByRole('button');
  userEvent.selectOptions(dropdown, ['Savings']);
  expect(dropdown).toHaveValue('Savings');

  expect(txtBox).toHaveValue('');
  await userEvent.type(txtBox, 'abcd');
  expect(txtBox).toHaveValue('abcd');

  expect(mockDepCallback.mock.calls.length).toBe(4);
  expect(mockDepCallback.mock.calls[0]).toEqual([null, 'nan']);
  expect(mockDepCallback.mock.calls[3]).toEqual([null, 'nan']);

  userEvent.click(btns[0]);
  expect(mockDepCallback.mock.calls.length).toBe(5);
  expect(mockDepCallback.mock.calls[4][0]).toEqual({ actName: 'Savings', balance: 1000.02 });
  expect(mockDepCallback.mock.calls[4][1]).toBeNull();
});

test('deposit button callback', async () => {
  render(<DepositWithdraw accounts={accounts} onDW={mockDepCallback} />);
  const dropdown = screen.getByRole('combobox');
  const txtBox = screen.getByRole('textbox');
  const btns = screen.getAllByRole('button');
  userEvent.selectOptions(dropdown, ['Savings']);
  expect(dropdown).toHaveValue('Savings');

  expect(txtBox).toHaveValue('');
  await userEvent.type(txtBox, '100');
  expect(txtBox).toHaveValue('100');
  expect(mockWdCallback).not.toHaveBeenCalled();

  userEvent.click(btns[0]); // Click deposit
  expect(mockDepCallback.mock.calls.length).toBe(1);
  expect(mockDepCallback.mock.calls[0][0]).toEqual({ actName: 'Savings', balance: 1000.02 });
  expect(mockDepCallback.mock.calls[0][1]).toBe(100);
});

test('withdraw button callback', async () => {
  render(<DepositWithdraw accounts={accounts} onDW={mockWdCallback} />);
  const dropdown = screen.getByRole('combobox');
  const txtBox = screen.getByRole('textbox');
  const btns = screen.getAllByRole('button');
  userEvent.selectOptions(dropdown, ['Sauce']);
  expect(dropdown).toHaveValue('Sauce');

  await userEvent.type(txtBox, '100');
  expect(txtBox).toHaveValue('100');

  userEvent.click(btns[1]); // Click withdraw
  expect(mockWdCallback.mock.calls[0][0]).toEqual({ actName: 'Sauce', balance: 5000 });
  expect(mockWdCallback.mock.calls[0][1]).toBe(-100);
});
