/* eslint-disable react/no-array-index-key */
/* eslint-disable max-classes-per-file */
import React from 'react';
import ai from './TicTacToeAI';

function Square(props) {
  return (
    <button
      type="button"
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="clGame">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(''),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  // Make an ai move for O
  computerTurn = (board) => {
    const newSquares = ai.makeMove(board, false, true);
    return newSquares;
  }

  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      // xIsNext: (step % 2) === 0,
    });
  }

  handleClick(i) {
    const step = this.state.stepNumber;
    let history = this.state.history.slice(0, step + 1);
    const current = history[history.length - 1];
    let squares = current.squares.slice();

    if (ai.calculateWinner(squares) || squares[i]) {
      return;
    }
    // if (this.state.xIsNext) squares[i] = this.state.xIsNext ? 'X' : 'O';
    if (this.state.xIsNext) squares[i] = 'X';
    squares = this.computerTurn(squares).slice();
    history = history.concat([{ squares }]);

    this.setState(() => ({
      history,
      stepNumber: history.length - 1,
      // xIsNext: !this.state.xIsNext,
    }));
  }

  render() {
    const { history } = this.state;
    // console.log('history :>> ', history);
    const current = history[this.state.stepNumber];
    const winner = ai.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move ${move}`
        : 'Reset game';
      return (
        <li key={move}>
          <button type="button" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner === 'X' || winner === 'O') {
      status = `The winner is: Player ${winner}!`;
    } else if (winner === 'T') {
      status = 'It\'s a draw!';
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div role="status" className="clStatus">{status}</div>
        <div className="clMainGame">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  }
}


export default Game;
