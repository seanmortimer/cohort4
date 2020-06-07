import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Lists from './LinkedLists';
import animals from '../../assets/data/animals.json';

const { getByText, queryByText, getByLabelText } = screen;
// const demoData = [['Bat', 10], ['Dog', 20], ['Koala', 30], ['Panda', 40]];

// test('The list shows up', () => {
//   render(<Lists />);

//   expect(getByText('Check out this list!')).toBeInTheDocument();
//   expect(getByText('Linked List')).toBeInTheDocument();
//   expect(getByText('Current item:')).toBeInTheDocument();
//   expect(getByText('Index 0')).toBeInTheDocument();
//   expect(getByText('Subject: Bat, Amount: $10')).toBeInTheDocument();
// });

// test('navigating list works', () => {
//   render(<Lists />);

//   fireEvent.click(getByText('Next'));
//   expect(queryByText('Subject: Bat, Amount: $10')).not.toBeInTheDocument();
//   expect(queryByText('Subject: Dog, Amount: $20')).toBeInTheDocument();

//   fireEvent.click(getByText('Next'));
//   expect(queryByText('Subject: Dog, Amount: $20')).not.toBeInTheDocument();
//   expect(queryByText('Subject: Koala, Amount: $30')).toBeInTheDocument();

//   fireEvent.click(getByText('Head'));
//   expect(queryByText('Subject: Koala, Amount: $30')).not.toBeInTheDocument();
//   expect(queryByText('Subject: Bat, Amount: $10')).toBeInTheDocument();

//   fireEvent.click(getByText('Tail'));
//   expect(queryByText('Subject: Panda, Amount: $40')).toBeInTheDocument();

//   fireEvent.click(getByText('Previous'));
//   expect(queryByText('Subject: Koala, Amount: $30')).toBeInTheDocument();

//   fireEvent.click(getByText('Previous'));
//   expect(queryByText('Subject: Dog, Amount: $20')).toBeInTheDocument();
// });


// test('The items are inserted correctly - head', () => {
//   render(<Lists />);
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
//   render(<Lists />);
//   const sub = getByLabelText(/subject/i);
//   const amnt = getByLabelText(/amount/i);

//   fireEvent.change(sub, { target: { value: 'Kangaroo' } });
//   fireEvent.change(amnt, { target: { value: 50 } });
//   fireEvent.click(getByText('Insert at tail'));

//   expect(getByText('Index 3: Panda, $40 >> Next item: Kangaroo, $50')).toBeInTheDocument();
//   expect(getByText('Index 4: Kangaroo, $50 >> Next item: null')).toBeInTheDocument();
// });

// test('The items are inserted correctly - current', () => {
//   render(<Lists />);
//   const sub = getByLabelText(/subject/i);
//   const amnt = getByLabelText(/amount/i);

//   fireEvent.click(getByText('Next'));
//   fireEvent.change(sub, { target: { value: 'Kangaroo' } });
//   fireEvent.change(amnt, { target: { value: 50 } });
//   fireEvent.click(getByText('Insert at current'));

//   expect(getByText('Index 0: Bat, $10 >> Next item: Kangaroo, $50')).toBeInTheDocument();
//   expect(getByText('Index 1: Kangaroo, $50 >> Next item: Dog, $20')).toBeInTheDocument();
//   expect(getByText('Index 2: Dog, $20 >> Next item: Koala, $30')).toBeInTheDocument();

//   fireEvent.click(getByText('Next'));
//   fireEvent.click(getByText('Next'));
//   fireEvent.change(sub, { target: { value: 'Lemur' } });
//   fireEvent.change(amnt, { target: { value: 60 } });
//   fireEvent.click(getByText('Insert at current'));

//   expect(getByText('Index 2: Dog, $20 >> Next item: Lemur, $60')).toBeInTheDocument();
//   expect(getByText('Index 3: Lemur, $60 >> Next item: Koala, $30')).toBeInTheDocument();
//   expect(getByText('Index 4: Koala, $30 >> Next item: Panda, $40')).toBeInTheDocument();
// });

// test('Random items are inserted correctly', () => {
//   render(<Lists />);
//   fireEvent.click(getByText('Next'));
//   fireEvent.click(getByText('Insert random'));

//   expect(getByText(/Index 0: Bat, \$10/i)).toBeInTheDocument();
//   const rando = getByText(/index 1:/i).textContent;
//   expect(animals.some((a) => rando.includes(a))).toBeTruthy();
// });

// test('delete current element', () => {
//   render(<Lists />);

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

// test('list total works', () => {
//   render(<Lists />);
//   const sub = getByLabelText(/subject/i);
//   const amnt = getByLabelText(/amount/i);

//   expect(getByText(/Current total: \$100/i)).toBeInTheDocument();

//   fireEvent.change(sub, { target: { value: 'Kangaroo' } });
//   fireEvent.change(amnt, { target: { value: 50 } });
//   fireEvent.click(getByText('Insert at head'));

//   expect(getByText(/Current total: \$150/i)).toBeInTheDocument();

//   fireEvent.click(getByText('Tail'));
//   fireEvent.click(getByText('Delete current'));

//   expect(getByText(/Current total: \$110/i)).toBeInTheDocument();
// });


// test('insert from empty list', () => {
//   render(<Lists />);
//   const sub = getByLabelText(/subject/i);
//   const amnt = getByLabelText(/amount/i);

//   fireEvent.click(getByText('Delete current'));
//   fireEvent.click(getByText('Delete current'));
//   fireEvent.click(getByText('Delete current'));
//   fireEvent.click(getByText('Delete current'));
//   expect(queryByText(/where'd the list go?/i)).toBeInTheDocument();

//   fireEvent.change(sub, { target: { value: 'Kangaroo' } });
//   fireEvent.change(amnt, { target: { value: 50 } });
//   fireEvent.click(getByText('Insert at current'));
//   expect(getByText('Index 0: Kangaroo, $50 >> Next item: null')).toBeInTheDocument();
// });

// test('clicking cards selects them', () => {
//   render(<Lists />);

//   expect(queryByText('Subject: Bat, Amount: $10')).toBeInTheDocument();

//   fireEvent.click(getByText(/Index 1: Dog/i));
//   expect(queryByText('Subject: Bat, Amount: $10')).not.toBeInTheDocument();
//   expect(queryByText('Subject: Dog, Amount: $20')).toBeInTheDocument();

//   fireEvent.click(getByText(/Index 3: Panda/i));
//   expect(queryByText('Subject: Panda, Amount: $40')).toBeInTheDocument();
// });
