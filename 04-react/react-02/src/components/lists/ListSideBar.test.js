import React from 'react';
import { render, screen } from '@testing-library/react';
import ListSideBar from './ListSideBar';


test('sidebar renders with empty data', () => {
  render(<ListSideBar />);

  expect(screen.getByText('Lists and Such')).toBeInTheDocument();
  expect(screen.getByText('Lists asdfnd Such')).toBeInTheDocument();
});

test.todo('add total to sidebar');
