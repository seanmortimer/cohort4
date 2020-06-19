import React from 'react';
import { render, screen } from '@testing-library/react';
import ListSideBar from './LinkedListSideBar';

test('sidebar renders data', () => {
  render(<ListSideBar />);

  expect(screen.getByText(/linked lists/i)).toBeInTheDocument();
});
