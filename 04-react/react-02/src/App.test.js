import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByRole } = render(<App />);
  // const nextPlayer = getByText(/next player:/i);
  // expect(nextPlayer).toBeInTheDocument();

  // screen.debug();

  const nav = getByRole('navigation').textContent;
  expect(nav).toContain('Home');
  expect(nav).toContain('Tic Tac Toe');
  expect(nav).toContain('Banking');
});
