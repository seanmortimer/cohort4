import React from 'react';
import { render, screen } from '@testing-library/react';

import Title from './Title';

test('the title displays', () => {
  render(<Title />);
  // screen.debug();
  expect(screen.getByText(/bank and bbq/i).textContent).toBe('Sean\'s Bank and BBQ Shack');
  expect(screen.getByText(/serving high interest/i).textContent)
    .toBe('Calgary\'s only financial institution serving high interest and tasty BBQ!');
});
