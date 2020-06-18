import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import ThemeSettings from './ThemeSettings';
import App from '../../App';


test('theme page renders with default context', () => {
  const { getByText } = render(<ThemeSettings />);

  expect(getByText(/Current Theme/i)).toHaveTextContent('Current Theme: blue');
});

test('clicking themes changes context theme', () => {
  const { getByText, getAllByRole } = render(<App />);

  const nav = getAllByRole('link');

  fireEvent.click(nav[6]);
  expect(getByText(/Current Theme/i)).toHaveTextContent('Current Theme: blue');
  fireEvent.click(getByText('Red'));
  expect(getByText(/Current Theme/i)).toHaveTextContent('Current Theme: red');
  fireEvent.click(getByText('Green'));
  expect(getByText(/Current Theme/i)).toHaveTextContent('Current Theme: green');
  fireEvent.click(getByText('Purple'));
  expect(getByText(/Current Theme/i)).toHaveTextContent('Current Theme: purple');
  fireEvent.click(getByText('Blue'));
  expect(getByText(/Current Theme/i)).toHaveTextContent('Current Theme: blue');
});


test('changing themes changes icon css classes', () => {
  const { getByText, getAllByRole } = render(<App />);

  const nav = getAllByRole('link');

  fireEvent.click(nav[6]);
  expect(nav[4]).toHaveClass('clIcon-blue');
  expect(nav[5]).toHaveClass('clIcon-blue');
  expect(nav[6]).toHaveClass('clActive-blue');

  expect(getByText(/Current Theme/i)).toHaveTextContent('Current Theme: blue');

  fireEvent.click(getByText('Red'));
  expect(nav[4]).toHaveClass('clIcon-red');
  expect(nav[5]).toHaveClass('clIcon-red');
  expect(nav[6]).toHaveClass('clActive-red');

  fireEvent.click(nav[4]);
  expect(nav[4]).toHaveClass('clActive-red');
  expect(nav[5]).toHaveClass('clIcon-red');
  expect(nav[6]).toHaveClass('clIcon-red');

  fireEvent.click(nav[6]);
  fireEvent.click(getByText('Green'));
  expect(nav[4]).toHaveClass('clIcon-green');
  expect(nav[5]).toHaveClass('clIcon-green');
  expect(nav[6]).toHaveClass('clActive-green');

  fireEvent.click(getByText('Purple'));
  expect(nav[4]).toHaveClass('clIcon-purple');
  expect(nav[5]).toHaveClass('clIcon-purple');
  expect(nav[6]).toHaveClass('clActive-purple');

  fireEvent.click(getByText('Blue'));
  expect(nav[4]).toHaveClass('clIcon-blue');
  expect(nav[5]).toHaveClass('clIcon-blue');
  expect(nav[6]).toHaveClass('clActive-blue');
});
