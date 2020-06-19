import React from 'react';
import { render, screen } from '@testing-library/react';
import SideBar from './LifoSideBar';

test('sidebar renders with empty data', () => {
  render(<SideBar />);

  expect(screen.getByText(/stacks vs queues/i)).toBeInTheDocument();
});
