import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // console.log('Before the render');
  // screen.debug();
  const { getByText } = render(<App />);

  // console.log('After the render');
  // screen.debug();



  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
