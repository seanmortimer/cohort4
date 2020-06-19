import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LifoFifo from './LifoFifo';

const { getByText, queryByText, getAllByText } = screen;
// const demoData = [['Bat', 10], ['Dog', 20], ['Koala', 30], ['Panda', 40]];

test('The list shows up', () => {
  render(<LifoFifo />);

  expect(getByText('Check out these lists!')).toBeInTheDocument();
  expect(getByText(/stacks vs queues/i)).toBeInTheDocument();
  expect(getByText(/next item: ant, \$10/i)).toBeInTheDocument();
  expect(getAllByText(/add some data/i)).toHaveLength(2);
});

test('you can add and remove items', async () => {
  render(<LifoFifo />);

  fireEvent.click(getByText('Add'));
  expect(getByText(/next item: bat, \$20/i)).toBeInTheDocument();
  expect(getAllByText(/ant, \$10/i)).toHaveLength(2);
  expect(queryByText(/add some data/i)).not.toBeInTheDocument();

  fireEvent.click(getByText('Add'));
  expect(getByText(/next item: cat, \$30/i)).toBeInTheDocument();
  expect(getAllByText(/ant, \$10/i)).toHaveLength(2);
  expect(getAllByText(/bat, \$20/i)).toHaveLength(2);

  fireEvent.click(getByText('Add'));
  expect(getByText(/next item: dog, \$40/i)).toBeInTheDocument();
  expect(getAllByText(/cat, \$30/i)).toHaveLength(2);

  fireEvent.click(getByText('Add'));
  fireEvent.click(getByText('Remove'));

  // 2 second pause to allow for transition effects
  await new Promise((r) => setTimeout(r, 900));

  expect(getByText(/next item: emu, \$50/i)).toBeInTheDocument();
  expect(getAllByText(/ant, \$10/i)).toHaveLength(1);
  expect(getAllByText(/dog, \$40/i)).toHaveLength(1);
  expect(getAllByText(/bat, \$20/i)).toHaveLength(2);

  fireEvent.click(getByText('Remove'));
  await new Promise((r) => setTimeout(r, 900));
  expect(getAllByText(/bat, \$20/i)).toHaveLength(1);
  expect(getAllByText(/cat, \$30/i)).toHaveLength(1);

  fireEvent.click(getByText('Remove'));
  fireEvent.click(getByText('Remove'));
  fireEvent.click(getByText('Remove'));
  fireEvent.click(getByText('Remove'));
  await new Promise((r) => setTimeout(r, 900));

  expect(getAllByText(/add some data/i)).toHaveLength(2);
  expect(queryByText(/ant/i)).not.toBeInTheDocument();
  expect(queryByText(/bat/i)).not.toBeInTheDocument();
  expect(queryByText(/cat/i)).not.toBeInTheDocument();
  expect(queryByText(/dog/i)).not.toBeInTheDocument();
});


test('list switches to random mode after running through the alphabet', () => {
  render(<LifoFifo />);

  for (let i = 0; i < 26; i++) {
    fireEvent.click(getByText('Add'));
  }

  expect(getByText(/you sure like lists of animals/i)).toBeInTheDocument();
  expect(getAllByText(/zebra, \$260/i)).toHaveLength(2);
  expect(getByText(/\$270/i)).toBeInTheDocument();
});
