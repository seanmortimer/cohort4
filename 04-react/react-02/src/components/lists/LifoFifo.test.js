import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LifoFifo from './LifoFifo';

const { getByText, queryByText, getByLabelText } = screen;
// const demoData = [['Bat', 10], ['Dog', 20], ['Koala', 30], ['Panda', 40]];

test('The list shows up', () => {
  render(<LifoFifo />);

  expect(getByText('Check out these lists!')).toBeInTheDocument();
  expect(getByText(/stacks vs queues/i)).toBeInTheDocument();
  expect(getByText('Current item:')).toBeInTheDocument();
  expect(getByText('Index 0')).toBeInTheDocument();
  expect(getByText('Subject: Bat, Amount: $10')).toBeInTheDocument();
});

// test('The items are inserted correctly - head', () => {
//   render(<LifoFifo />);
//   const sub = getByLabelText(/subject/i);
//   const amnt = getByLabelText(/amount/i);

//   fireEvent.change(sub, { target: { value: 'Kangaroo' } });
//   fireEvent.change(amnt, { target: { value: 50 } });

//   expect(sub).toHaveValue('Kangaroo');
//   expect(amnt).toHaveValue('50');

//   fireEvent.click(getByText('Insert at head'));
//   expect(getByText('Index 0: Kangaroo, $50 >> Next item: Bat, $10')).toBeInTheDocument();
//   expect(getByText('Index 1: Bat, $10 >> Next item: Dog, $20')).toBeInTheDocument();
// });

// test('The items are inserted correctly - tail', () => {
//   render(<LifoFifo />);
//   const sub = getByLabelText(/subject/i);
//   const amnt = getByLabelText(/amount/i);

//   fireEvent.change(sub, { target: { value: 'Kangaroo' } });
//   fireEvent.change(amnt, { target: { value: 50 } });
//   fireEvent.click(getByText('Insert at tail'));

//   expect(getByText('Index 3: Panda, $40 >> Next item: Kangaroo, $50')).toBeInTheDocument();
//   expect(getByText('Index 4: Kangaroo, $50 >> Next item: null')).toBeInTheDocument();
// });

// test('Random items are inserted correctly', () => {
//   render(<LifoFifo />);
//   fireEvent.click(getByText('Next'));
//   fireEvent.click(getByText('Insert random'));

//   expect(getByText(/Index 0: Bat, \$10/i)).toBeInTheDocument();
//   const rando = getByText(/index 1:/i).textContent;
//   expect(animals.some((a) => rando.includes(a))).toBeTruthy();
// });

// test('delete current element', () => {
//   render(<LifoFifo />);

//   fireEvent.click(getByText('Delete current'));
//   expect(getByText('Index 0: Dog, $20 >> Next item: Koala, $30')).toBeInTheDocument();
//   expect(getByText('Index 1: Koala, $30 >> Next item: Panda, $40')).toBeInTheDocument();

//   fireEvent.click(getByText('Tail'));
//   expect(getByText('Index 2: Panda, $40 >> Next item: null')).toBeInTheDocument();

//   // Make sure deleting with no items doesn't crash
//   fireEvent.click(getByText('Delete current'));
//   fireEvent.click(getByText('Delete current'));
//   fireEvent.click(getByText('Delete current'));
//   fireEvent.click(getByText('Delete current'));
// });


