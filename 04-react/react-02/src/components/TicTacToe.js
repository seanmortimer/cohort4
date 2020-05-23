import React from 'react';
import ai from './TicTacToeAI'

function Square(props) {
  return (
    <button
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
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(''),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    let history = this.state.history.slice(0, this.state.stepNumber + 1);
    let current = history[history.length - 1];
    let squares = current.squares.slice();

    if (ai.calculateWinner(squares) || squares[i]) {
      return;
    }
    if (this.state.xIsNext) squares[i] = this.state.xIsNext ? 'X' : 'O';
    history = history.slice(0, this.state.stepNumber + 1);
    current = history[history.length - 1];
    squares = this.computerTurn(squares).slice();

    this.setState(
      {
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        // xIsNext: !this.state.xIsNext,
      }
    );
  }

  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  // Make an ai move for O
  computerTurn = (board) => {
    const newSquares = ai.makeMove(board, false, true);

    return newSquares;

    // this.setState({
    //   history: history.concat([{
    //     squares: newSquares,
    //   }]),
    //   stepNumber: history.length,
    //   xIsNext: !this.state.xIsNext,
    // });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = ai.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move ' + move :
        'Reset game';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
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
    }
    else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game" >
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
