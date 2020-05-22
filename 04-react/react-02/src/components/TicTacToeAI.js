const ai = {

  // Find the open spots
  isOpen(board) {
    const open = [];
    board.forEach((square, i) => {
      if (square === '') {
        open.push(i);
      }
    });
    //  console.log('open:', open);
    return open;
  },

  // Take array representing current board, return index for next move.
  makeMove(board, isXNext, isHardModeOn) {
    const marker = isXNext ? 'X' : 'O';
    let move = null;

    if (this.isOpen(board).length === 9) {
      // console.log('New game!')
      move = this.rando(board);
    }
    else {
      if (isHardModeOn) {
        console.log('board:', isXNext, board);
        let move2 = this.minimax(board, isXNext);
        console.log('Minimax:', marker, move2);
      }
      if (!isHardModeOn) {
        move = this.rando(board);
        console.log('Random:', marker, move);
      }
    }
    const newBoard = board.slice();
    newBoard[move] = marker;

    if (this.calculateWinner(newBoard) === 'X') {
      console.log('X Won! Move:', move);
      console.log('',
        newBoard.slice(0, 3), '\n',
        newBoard.slice(3, 6), '\n',
        newBoard.slice(6), '\n',
      );
    }
    return newBoard;
  },

  // This function returns the min/max value for a given move
  // Or should it return the next move to make? that makes sense to me
  // Yeah, now it returns the next move to make
  loops: 0,

  minimax(board, isXNext) {
    this.loops++;
    let open = this.isOpen(board);
    let bestScoreX = -Infinity;
    let bestScoreO = +Infinity;
    let bestMoveX = null;
    let bestMoveO = null;
    const marker = isXNext ? 'X' : 'O';

    open.forEach((move) => {
      let nextBoard = board.slice();
      nextBoard[move] = marker;
      let result = this.calculateWinner(nextBoard)
      if (result) {
        let score = this.getScore(nextBoard);
        // console.log('Score:', score, '\n',
        //   nextBoard.slice(0, 3), '\n',
        //   nextBoard.slice(3, 6), '\n',
        //   nextBoard.slice(6), '\n',
        // );
        if (isXNext) {
          if (score > bestScoreX) {
            bestScoreX = score;
            bestMoveX = move;
            console.log('Update X move:', bestScoreX, move);
          }
        } else if (!isXNext) {
          if (score < bestScoreO) {
            bestScoreO = score;
            bestMoveO = move;
            console.log('Update O move:', bestScoreO, move);
          }
        }
      } else {
        this.minimax(nextBoard, !isXNext);
      }
    })
    const bestMove = isXNext ? bestMoveX : bestMoveO;
    console.log('x / o:', bestMoveX, bestMoveO);
    console.log(`FIN: Player: ${marker}, Move: ${bestMove}`);
    return bestMove;
  },

  getScore(board) {
    const scores = {
      X: 1,
      O: -1,
      T: 0
    };
    const result = this.calculateWinner(board);
    const score = (1 + this.isOpen(board).length) * scores[result];
    return score;
  },

  rando(board) {
    const open = this.isOpen(board);
    const min = 0;
    const max = open.length - 1;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log('rand:', open[rand]);
    return open[rand];
  },

  calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // console.log('a:', board[a], 'b:', board[b], 'c:', board[c]);
        return board[a];
      }

    }
    if (this.isOpen(board).length === 0) {
      return 'T';
    }
    return null;
  }
}
export default ai;