import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TicTacToe from './TicTacToe';


test('that the game even renders', () => {
  const { getByText, getAllByRole } = render(<TicTacToe />);

  const nextPlayer = getByText(/next player:/i);
  expect(nextPlayer).toBeInTheDocument();

  const board = getAllByRole('button').splice(0, 9);
  const currentBoard = board.map((square) => square.textContent);
  expect(currentBoard).toEqual([
    '', '', '',
    '', '', '',
    '', '', '',
  ]);
});

test('game 1 -> 1 open square', () => {
  const { getAllByRole, getByRole } = render(<TicTacToe />);
  const board = getAllByRole('button').splice(0, 9);
  const status = getByRole('status');

  fireEvent.click(board[0]);
  fireEvent.click(board[2]);
  fireEvent.click(board[7]);
  fireEvent.click(board[5]);

  const currentBoard = board.map((square) => square.textContent);
  expect(currentBoard).toEqual([
    'X', 'O', 'X',
    'O', 'O', 'X',
    '', 'X', 'O',
  ]);
  expect(status).toHaveTextContent('Next player: X');
});

test('game 2 -> O wins', () => {
  const { getAllByRole, getByRole } = render(<TicTacToe />);
  const board = getAllByRole('button').splice(0, 9);
  const status = getByRole('status');

  fireEvent.click(board[4]);
  fireEvent.click(board[1]);
  fireEvent.click(board[5]);
  fireEvent.click(board[8]);

  const currentBoard = board.map((square) => square.textContent);
  expect(currentBoard).toEqual([
    'O', 'X', '',
    'O', 'X', 'X',
    'O', 'O', 'X',
  ]);
  expect(status).toHaveTextContent('The winner is: Player O!');
});

test('game 3 -> A draw', () => {
  const { getAllByRole, getByRole } = render(<TicTacToe />);
  const board = getAllByRole('button').splice(0, 9);
  const status = getByRole('status');

  fireEvent.click(board[0]);
  fireEvent.click(board[2]);
  fireEvent.click(board[7]);
  fireEvent.click(board[5]);
  fireEvent.click(board[6]);

  const currentBoard = board.map((square) => square.textContent);
  expect(currentBoard).toEqual([
    'X', 'O', 'X',
    'O', 'O', 'X',
    'X', 'X', 'O',
  ]);
  expect(status).toHaveTextContent('It\'s a draw!');
});


// TODO: test repeat click rejections
test.todo('test repeat click rejection');
// TODO: test moving through history
test.todo('test moving through history');
