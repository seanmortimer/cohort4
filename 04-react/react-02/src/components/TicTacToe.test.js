import React from 'react';
import { fireEvent, screen, act, render } from '@testing-library/react';
import TicTacToe from './TicTacToe';


function click(txt) {
    const regTxt = new RegExp(txt, 'i')
    fireEvent.click(screen.getByText(regTxt));
}


test('that the game even renders', () => {
    const { getByText } = render(<TicTacToe />);
    const nextPlayer = getByText(/next player:/i);
    expect(nextPlayer).toBeInTheDocument();
});

test('play around ', () => {
    const { getAllByRole, getByText } = render(<TicTacToe />);
    const board = getAllByRole('button').splice(0, 9)
    
    fireEvent.click(board[0]);
    fireEvent.click(board[1]);
    fireEvent.click(board[2]);
    fireEvent.click(board[3]);
    fireEvent.click(board[4]);
    fireEvent.click(board[5]);
    fireEvent.click(board[6]);
    
    
    console.log('xBoard:', xBoard);
    expect(getByText(/The winner/)).toHaveTextContent('The winner is: Player X!')

    // screen.debug();
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
