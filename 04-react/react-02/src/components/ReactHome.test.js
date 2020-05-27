import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactHome from './ReactHome';


test('renders learn react link', () => {
  render(<ReactHome />);
  // screen.debug();

  const link = screen.getByText(/learn react/i);
  expect(link).toHaveTextContent('Learn React');
  expect(link).toHaveAttribute('href', 'https://reactjs.org');
});
