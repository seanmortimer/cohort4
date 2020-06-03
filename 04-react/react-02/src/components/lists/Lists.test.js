import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Lists from './Lists';

test('The list shows up', () => {
  render(<Lists />);

  expect(screen.getByText('Let\'s list!')).toBeInTheDocument;
});
