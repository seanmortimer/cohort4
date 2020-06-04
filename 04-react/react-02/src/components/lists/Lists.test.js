import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Lists from './Lists';

const demoData = [['Bat', 10], ['Dog', 20], ['Koala', 30], ['Panda', 40]];

test('The list shows up', () => {
  render(<Lists />);

  expect(screen.getByText('Check out this list!')).toBeInTheDocument();
});
