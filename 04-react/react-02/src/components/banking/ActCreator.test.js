import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
  fireEvent.click(createBtn);
  expect(createBtn).toBeVisible();
  expect(mockNewActCallback).not.toHaveBeenCalled();
});
