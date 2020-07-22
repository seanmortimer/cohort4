import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import LinkedLists from './LinkedLists';
import LinkedList from './linkedListLogic';
// import animals from '../../assets/data/animals.json';p

const { getByText, queryByText, getByLabelText } = screen;
const demoData = [['Ant', 10], ['Bat', 20], ['Cat', 30], ['Dog', 40]];
const list = new LinkedList();

beforeEach(() => {
  demoData.forEach((item) => list.insertAfterCurrent(item[0], item[1]));
});


afterEach(cleanup);


test.only('The list shows up with the demo data', () => {
  const { getByText } = render(<LinkedLists list={list} />);
  // screen.debug()

  expect(getByText('Check out this list!')).toBeInTheDocument();
  expect(getByText('Linked List')).toBeInTheDocument();
  expect(getByText('Current item:')).toBeInTheDocument();
  expect(getByText('Subject: Ant, Amount: $10')).toBeInTheDocument(); // Current item on nav panel
  expect(getByText('Current total: $100')).toBeInTheDocument();
});

test('navigating list works', () => {
  const { getByText, queryByText } = render(<LinkedLists />);

  // screen.debug();

  expect(getByText('Subject: Ant, Amount: $10')).toBeInTheDocument();

  // fireEvent.click(getByText('Next'));
  // expect(queryByText('Subject: Ant, Amount: $10')).not.toBeInTheDocument();
  // expect(queryByText('Subject: Bat, Amount: $20')).toBeInTheDocument();

  // fireEvent.click(getByText('Next'));
  // expect(queryByText('Subject: Bat, Amount: $20')).not.toBeInTheDocument();
  // expect(queryByText('Subject: Cat, Amount: $30')).toBeInTheDocument();

  // fireEvent.click(getByText('Next'));
  // expect(queryByText('Subject: Cat, Amount: $20')).not.toBeInTheDocument();
  // expect(queryByText('Subject: Dog, Amount: $40')).toBeInTheDocument();

  // fireEvent.click(getByText('Next'));
  // expect(queryByText('Subject: Cat, Amount: $20')).not.toBeInTheDocument();
  // expect(queryByText('Subject: Dog, Amount: $40')).toBeInTheDocument();

  // fireEvent.click(getByText('Next'));
  // expect(queryByText('Subject: Cat, Amount: $20')).not.toBeInTheDocument();
  // expect(queryByText('Subject: Dog, Amount: $40')).toBeInTheDocument();

  // fireEvent.click(getByText('Head'));
  // expect(queryByText('Subject: Cat, Amount: $30')).not.toBeInTheDocument();
  // expect(queryByText('Subject: Ant, Amount: $10')).toBeInTheDocument();

  // fireEvent.click(getByText('Tail'));
  // expect(queryByText('Subject: Dog, Amount: $40')).toBeInTheDocument();

  // fireEvent.click(getByText('Previous'));
  // expect(queryByText('Subject: Cat, Amount: $30')).toBeInTheDocument();

  // fireEvent.click(getByText('Previous'));
  // expect(queryByText('Subject: Bat, Amount: $20')).toBeInTheDocument();

  // fireEvent.click(getByText('Previous'));
  // expect(queryByText('Subject: Ant, Amount: $10')).toBeInTheDocument();

  // fireEvent.click(getByText('Previous'));
  // expect(queryByText('Subject: Ant, Amount: $10')).toBeInTheDocument();
});


test.skip('The items are inserted correctly - head', () => {
  render(<LinkedLists />);
  const sub = getByLabelText(/subject/i);
  const amnt = getByLabelText(/amount/i);

  fireEvent.change(sub, { target: { value: 'Elephant' } });
  fireEvent.change(amnt, { target: { value: 50 } });

  expect(sub).toHaveValue('Elephant');
  expect(amnt).toHaveValue('50');

  fireEvent.click(getByText('Insert at head'));
  expect(getByText('Elephant, $50 >> Next item: Ant, $10')).toBeInTheDocument();
  expect(getByText('Subject: Elephant, Amount: $50')).toBeInTheDocument();
  expect(getByText('Ant, $10 >> Next item: Bat, $20')).toBeInTheDocument();

  fireEvent.change(sub, { target: { value: 'Gopher' } });
  fireEvent.change(amnt, { target: { value: 60 } });

  fireEvent.click(getByText('Insert at head'));
  expect(getByText('Gopher, $60 >> Next item: Elephant, $50')).toBeInTheDocument();
  expect(getByText('Subject: Gopher, Amount: $60')).toBeInTheDocument();
});

test.skip('The items are inserted correctly - tail', () => {
  render(<LinkedLists />);
  const sub = getByLabelText(/subject/i);
  const amnt = getByLabelText(/amount/i);

  fireEvent.change(sub, { target: { value: 'Elephant' } });
  fireEvent.change(amnt, { target: { value: 50 } });
  fireEvent.click(getByText('Insert at tail'));

  expect(getByText('Dog, $40 >> Next item: Elephant, $50')).toBeInTheDocument();
  expect(getByText('Elephant, $50 >> Next item: null')).toBeInTheDocument();
  expect(getByText('Subject: Elephant, Amount: $50')).toBeInTheDocument();

  fireEvent.change(sub, { target: { value: 'Gopher' } });
  fireEvent.change(amnt, { target: { value: 60 } });
  fireEvent.click(getByText('Insert at tail'));

  expect(getByText('Elephant, $50 >> Next item: Gopher, $60')).toBeInTheDocument();
  expect(getByText('Gopher, $60 >> Next item: null')).toBeInTheDocument();
  expect(getByText('Subject: Gopher, Amount: $60')).toBeInTheDocument();
});

test.skip('The items are inserted correctly - current', () => {
  render(<LinkedLists />);
  const sub = getByLabelText(/subject/i);
  const amnt = getByLabelText(/amount/i);

  fireEvent.change(sub, { target: { value: 'Elephant' } });
  fireEvent.change(amnt, { target: { value: 50 } });
  fireEvent.click(getByText('Insert at current'));

  expect(getByText('Ant, $10 >> Next item: Elephant, $50')).toBeInTheDocument();
  expect(getByText('Elephant, $50 >> Next item: Bat, $20')).toBeInTheDocument();
  expect(getByText('Subject: Elephant, Amount: $50')).toBeInTheDocument();


  fireEvent.click(getByText('Next'));
  fireEvent.click(getByText('Next'));
  expect(queryByText('Subject: Cat, Amount: $30')).toBeInTheDocument();
  fireEvent.change(sub, { target: { value: 'Gopher' } });
  fireEvent.change(amnt, { target: { value: 60 } });
  fireEvent.click(getByText('Insert at current'));

  expect(getByText('Cat, $30 >> Next item: Gopher, $60')).toBeInTheDocument();
  expect(getByText('Gopher, $60 >> Next item: Dog, $40')).toBeInTheDocument();
  expect(getByText('Subject: Gopher, Amount: $60')).toBeInTheDocument();

  fireEvent.click(getByText('Next'));
  fireEvent.click(getByText('Next'));
  fireEvent.click(getByText('Next'));
  expect(queryByText('Subject: Dog, Amount: $40')).toBeInTheDocument();
  expect(getByText('Dog, $40 >> Next item: null')).toBeInTheDocument();

  fireEvent.change(sub, { target: { value: 'Hornet' } });
  fireEvent.change(amnt, { target: { value: 70 } });
  fireEvent.click(getByText('Insert at current'));
  expect(getByText('Dog, $40 >> Next item: Hornet, $70')).toBeInTheDocument();
  expect(getByText('Hornet, $70 >> Next item: null')).toBeInTheDocument();
  expect(getByText('Subject: Hornet, Amount: $70')).toBeInTheDocument();
});

test.skip('Random items are inserted correctly, as best we can', () => {
  render(<LinkedLists />);
  fireEvent.click(getByText('Insert random'));

  expect(queryByText(/Ant, \$10 >> next item: bat, \$20/i)).not.toBeInTheDocument();
  expect(queryByText(/ant, \$10 >> next item:/i)).toBeInTheDocument();
  expect(queryByText(/bat, \$20 >> next item: cat, \$30/i)).toBeInTheDocument();

  expect(getByText('Dog, $40 >> Next item: null')).toBeInTheDocument();
  fireEvent.click(getByText('Tail'));
  fireEvent.click(getByText('Insert random'));
  expect(queryByText('Dog, $40 >> Next item: null')).not.toBeInTheDocument();
  expect(queryByText(/>> Next item: null/i)).toBeInTheDocument();
});

test.skip('delete current element', () => {
  render(<LinkedLists />);

  fireEvent.click(getByText('Delete current'));
  expect(queryByText('Subject: Ant, Amount: $10')).not.toBeInTheDocument();
  expect(queryByText('Ant, $10 >> Next item: Bat, $20')).not.toBeInTheDocument();
  expect(queryByText('Subject: Bat, Amount: $20')).toBeInTheDocument();
  expect(getByText('Bat, $20 >> Next item: Cat, $30')).toBeInTheDocument();

  fireEvent.click(getByText('Next'));
  fireEvent.click(getByText('Delete current'));
  expect(queryByText('Cat, $30 >> Next item: Dog, $40')).not.toBeInTheDocument();
  expect(queryByText('Bat, $20 >> Next item: Dog, $40')).toBeInTheDocument();
  expect(queryByText('Subject: Dog, Amount: $40')).toBeInTheDocument();


  // Make sure deleting with no items doesn't crash
  fireEvent.click(getByText('Delete current'));
  fireEvent.click(getByText('Delete current'));
  fireEvent.click(getByText('Delete current'));
  fireEvent.click(getByText('Delete current'));
  expect(queryByText('Subject: Dog, Amount: $40')).not.toBeInTheDocument();
  expect(getByText(/where'd the list go?/i)).toBeInTheDocument();
});

test.skip('insert from empty list', () => {
  render(<LinkedLists />);
  const sub = getByLabelText(/subject/i);
  const amnt = getByLabelText(/amount/i);

  fireEvent.click(getByText('Delete current'));
  fireEvent.click(getByText('Delete current'));
  fireEvent.click(getByText('Delete current'));
  fireEvent.click(getByText('Delete current'));
  expect(queryByText(/where'd the list go?/i)).toBeInTheDocument();

  fireEvent.change(sub, { target: { value: 'Elephant' } });
  fireEvent.change(amnt, { target: { value: 50 } });
  fireEvent.click(getByText('Insert at current'));
  expect(getByText('Elephant, $50 >> Next item: null')).toBeInTheDocument();
});

test.skip('list total works', () => {
  render(<LinkedLists />);
  const sub = getByLabelText(/subject/i);
  const amnt = getByLabelText(/amount/i);

  expect(getByText(/Current total: \$100/i)).toBeInTheDocument();

  fireEvent.change(sub, { target: { value: 'Elephant' } });
  fireEvent.change(amnt, { target: { value: 50 } });
  fireEvent.click(getByText('Insert at head'));
  expect(getByText(/Current total: \$150/i)).toBeInTheDocument();

  fireEvent.click(getByText('Tail'));
  fireEvent.click(getByText('Delete current'));
  expect(getByText(/Current total: \$110/i)).toBeInTheDocument();
});

test.skip('clicking cards selects them', () => {
  render(<LinkedLists />);

  expect(queryByText('Subject: Ant, Amount: $10')).toBeInTheDocument();

  fireEvent.click(getByText('Bat, $20 >> Next item: Cat, $30'));
  expect(queryByText('Subject: Ant, Amount: $10')).not.toBeInTheDocument();
  expect(queryByText('Subject: Bat, Amount: $20')).toBeInTheDocument();

  fireEvent.click(getByText(/Dog, \$40 >>/i));
  expect(queryByText('Subject: Dog, Amount: $40')).toBeInTheDocument();
});
