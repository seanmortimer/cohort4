import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListInsert from './LinkedListInsert';
import animals from '../../assets/data/animals.json';

const mockInsertFn = jest.fn();
const mockDeleteFn = jest.fn();

const { getByText, getAllByRole } = screen;

afterEach(() => {
  mockInsertFn.mockClear();
  mockDeleteFn.mockClear();
});

test('The insert form renders', () => {
  render(<ListInsert onInsert={mockInsertFn} onDelete={mockDeleteFn} />);

  expect(getByText('Linked List')).toBeInTheDocument();
  expect(getByText('Subject:')).toBeInTheDocument();
  expect(getByText('Amount:')).toBeInTheDocument();
  expect(getByText('Delete current')).toBeInTheDocument();
  expect(getAllByRole('textbox')).toHaveLength(2);
  expect(getAllByRole('button')).toHaveLength(5);
});

test('the insert here button', () => {
  render(<ListInsert onInsert={mockInsertFn} onDelete={mockDeleteFn} />);
  const sub = screen.getByLabelText(/subject/i);
  const amnt = screen.getByLabelText(/amount/i);

  fireEvent.change(sub, { target: { value: 'Kangaroo' } });
  fireEvent.change(amnt, { target: { value: 50 } });

  expect(sub).toHaveValue('Kangaroo');
  expect(amnt).toHaveValue('50');

  fireEvent.click(screen.getByText('Insert at current'));
  expect(mockInsertFn).toHaveBeenCalled();
  expect(mockInsertFn.mock.calls[0]).toEqual(['here', 'Kangaroo', 50]);
  expect(sub).toHaveValue('');
  expect(amnt).toHaveValue('');

  fireEvent.change(sub, { target: { value: '' } });
  fireEvent.change(amnt, { target: { value: '' } });
  fireEvent.click(screen.getByText('Insert at current'));
  expect(mockInsertFn).toHaveBeenCalledTimes(1);

  fireEvent.change(sub, { target: { value: 'Koala' } });
  fireEvent.change(amnt, { target: { value: 'Koala' } });
  fireEvent.click(screen.getByText('Insert at current'));
  expect(mockInsertFn).toHaveBeenCalledTimes(1);
  expect(sub).toHaveValue('Koala');
  expect(amnt).toHaveValue('');
});

test('the insert at head button', () => {
  render(<ListInsert onInsert={mockInsertFn} onDelete={mockDeleteFn} />);
  const sub = screen.getByLabelText(/subject/i);
  const amnt = screen.getByLabelText(/amount/i);

  fireEvent.change(sub, { target: { value: 'Lemur' } });
  fireEvent.change(amnt, { target: { value: 60 } });
  fireEvent.click(screen.getByText('Insert at head'));

  expect(mockInsertFn).toHaveBeenCalled();
  expect(mockInsertFn.mock.calls[0]).toEqual(['head', 'Lemur', 60]);
  expect(sub).toHaveValue('');
  expect(amnt).toHaveValue('');

  fireEvent.change(sub, { target: { value: '' } });
  fireEvent.change(amnt, { target: { value: '' } });
  fireEvent.click(screen.getByText('Insert at head'));
  expect(mockInsertFn).toHaveBeenCalledTimes(1);

  fireEvent.change(sub, { target: { value: 'Koala' } });
  fireEvent.change(amnt, { target: { value: 'Koala' } });
  fireEvent.click(screen.getByText('Insert at head'));
  expect(mockInsertFn).toHaveBeenCalledTimes(1);
  expect(sub).toHaveValue('Koala');
  expect(amnt).toHaveValue('');
});

test('the insert at tail button', () => {
  render(<ListInsert onInsert={mockInsertFn} onDelete={mockDeleteFn} />);
  const sub = screen.getByLabelText(/subject/i);
  const amnt = screen.getByLabelText(/amount/i);

  fireEvent.change(sub, { target: { value: 'Lemur' } });
  fireEvent.change(amnt, { target: { value: 60 } });
  fireEvent.click(screen.getByText('Insert at tail'));

  expect(mockInsertFn).toHaveBeenCalled();
  expect(mockInsertFn.mock.calls[0]).toEqual(['tail', 'Lemur', 60]);
  expect(sub).toHaveValue('');
  expect(amnt).toHaveValue('');

  fireEvent.change(sub, { target: { value: '' } });
  fireEvent.change(amnt, { target: { value: '' } });
  fireEvent.click(screen.getByText('Insert at tail'));
  expect(mockInsertFn).toHaveBeenCalledTimes(1);

  fireEvent.change(sub, { target: { value: 'Koala' } });
  fireEvent.change(amnt, { target: { value: 'Koala' } });
  fireEvent.click(screen.getByText('Insert at tail'));
  expect(mockInsertFn).toHaveBeenCalledTimes(1);
  expect(sub).toHaveValue('Koala');
  expect(amnt).toHaveValue('');
});

test('the insert random button', () => {
  render(<ListInsert onInsert={mockInsertFn} onDelete={mockDeleteFn} />);

  fireEvent.click(screen.getByText('Insert random'));
  expect(mockInsertFn).toHaveBeenCalled();

  expect(mockInsertFn.mock.calls[0][0]).toBe('here');
  expect(animals).toContain(mockInsertFn.mock.calls[0][1]);
  expect(mockInsertFn.mock.calls[0][2]).toBeGreaterThan(0);
  expect(mockInsertFn.mock.calls[0][2]).toBeLessThan(101);
});

test('nothing happens if input is not complete', () => {
  render(<ListInsert onInsert={mockInsertFn} onDelete={mockDeleteFn} />);

  const sub = screen.getByLabelText(/subject/i);
  const amnt = screen.getByLabelText(/amount/i);

  fireEvent.click(screen.getByText('Insert at head'));
  fireEvent.click(screen.getByText('Insert at current'));
  fireEvent.click(screen.getByText('Insert at tail'));
  expect(mockInsertFn).not.toHaveBeenCalled();

  fireEvent.change(sub, { target: { value: 'Emu' } });
  fireEvent.click(screen.getByText('Insert at head'));
  fireEvent.click(screen.getByText('Insert at current'));
  fireEvent.click(screen.getByText('Insert at tail'));
  expect(mockInsertFn).not.toHaveBeenCalled();

  fireEvent.change(sub, { target: { value: '' } });
  fireEvent.change(amnt, { target: { value: 50 } });

  fireEvent.click(screen.getByText('Insert at head'));
  fireEvent.click(screen.getByText('Insert at current'));
  fireEvent.click(screen.getByText('Insert at tail'));
  expect(mockInsertFn).not.toHaveBeenCalled();

  fireEvent.change(sub, { target: { value: 'Emu' } });
  fireEvent.click(screen.getByText('Insert at head'));
  expect(mockInsertFn).toHaveBeenCalled();
});

test('the delete button', () => {
  render(<ListInsert onInsert={mockInsertFn} onDelete={mockDeleteFn} />);

  fireEvent.click(screen.getByText('Delete current'));
  expect(mockDeleteFn).toHaveBeenCalled();
});
