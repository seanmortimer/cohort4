import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ActCreator from './ActCreator';

const mockNewActCallback = jest.fn();


test('the message area is displayed', () => {
  render(<ActCreator onNewAct={mockNewActCallback} />);

  expect(screen.getByRole('heading')).toHaveTextContent('Create new account:');
  expect(screen.getByRole('button')).toHaveTextContent('Create Account');
});

test('nothing happens with empty input', () => {
  render(<ActCreator onNewAct={mockNewActCallback} />);

  const createBtn = screen.getByRole('button');
  userEvent.click(createBtn);
  expect(createBtn).toBeVisible();
  expect(mockNewActCallback).not.toHaveBeenCalled();
});

test('accounts are created', async () => {
  render(<ActCreator onNewAct={mockNewActCallback} />);

  const createBtn = screen.getByRole('button');
  const input = screen.getByRole('textbox');
  
  await userEvent.type(input, 'Chequing');
  expect(input.value).toBe('Chequing');
  userEvent.click(createBtn);
  expect(input.value).toBe('');

  expect(mockNewActCallback).toHaveBeenCalledTimes(1);
  expect(mockNewActCallback.mock.calls[0][0]).toBe('Chequing');

  await userEvent.type(input, 'Savings');
  userEvent.click(createBtn);
  expect(input.value).toBe('');

  expect(mockNewActCallback).toHaveBeenCalledTimes(2);
  expect(mockNewActCallback.mock.calls[1][0]).toBe('Savings');
});
