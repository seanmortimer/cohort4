import React from 'react';
import { fireEvent, screen, render, act } from '@testing-library/react';
import TicTacToe from './TicTacToe';


function click(txt) {
    const regTxt = new RegExp(txt, 'i')
    fireEvent.click(screen.getByText(regTxt));
}


test('that the game even renders', () => {
    const { getByText, getAllByRole } = render(<TicTacToe />);

    const nextPlayer = getByText(/next player:/i);
    expect(nextPlayer).toBeInTheDocument();

    const board = getAllByRole('button').splice(0, 9)
    const currentBoard = board.map(square => square.textContent)
    expect(currentBoard).toEqual([
        '', '', '',
        '', '', '',
        '', '', ''
    ]);

});

test('game 1 -> X wins', () => {
    const { getAllByRole, getByText } = render(<TicTacToe />);
    const board = getAllByRole('button').splice(0, 9)

    fireEvent.click(board[0]);
    fireEvent.click(board[1]);
    fireEvent.click(board[2]);
    fireEvent.click(board[3]);
    fireEvent.click(board[4]);
    fireEvent.click(board[5]);
    fireEvent.click(board[6]);

    const currentBoard = board.map(square => square.textContent)
    expect(currentBoard).toEqual([
        'X', 'O', 'X',
        'O', 'X', 'O',
        'X', '', ''
    ]);
    expect(getByText(/The winner/)).toHaveTextContent('The winner is: Player X!')
});

test('game 2 -> O wins', () => {
    const { getAllByRole, getByText } = render(<TicTacToe />);
    const board = getAllByRole('button').splice(0, 9)

    fireEvent.click(board[2]);
    fireEvent.click(board[6]);
    fireEvent.click(board[0]);
    fireEvent.click(board[8]);
    fireEvent.click(board[4]);
    fireEvent.click(board[7]);

    const currentBoard = board.map(square => square.textContent)
    expect(currentBoard).toEqual([
        'X', '', 'X',
        '', 'X', '',
        'O', 'O', 'O'
    ]);
    expect(getByText(/The winner/)).toHaveTextContent('The winner is: Player O!')
});

test('game 3 -> A draw', () => {
    const { getAllByRole, getByText } = render(<TicTacToe />);
    const board = getAllByRole('button').splice(0, 9)

    fireEvent.click(board[0]);
    fireEvent.click(board[1]);
    fireEvent.click(board[2]);
    fireEvent.click(board[3]);
    fireEvent.click(board[4]);
    fireEvent.click(board[8]);
    fireEvent.click(board[5]);
    fireEvent.click(board[6]);
    fireEvent.click(board[7]);

    const currentBoard = board.map(square => square.textContent)
    expect(currentBoard).toEqual([
        'X', 'O', 'X',
        'O', 'X', 'X',
        'O', 'X', 'O'
    ]);
    expect(getByText(/draw/)).toHaveTextContent('It\'s a draw!');
});

// Board layout for reference

// <div class="clGame">
// <div class="board-row">
// <button class="square"></button>
// <button class="square"></button>
// <button class="square"></button>
// </div>
// <div class="board-row">
// <button class="square"></button>
// <button class="square"></button>
// <button class="square"></button>
// </div>
// <div class="board-row">
// <button class="square">
// </button>
// <button class="square">

// </button>
// <button class="square">

// </button></div>
// </div>
