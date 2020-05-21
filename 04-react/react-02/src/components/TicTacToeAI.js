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
  nextMove(board) {

    const open = this.isOpen(board);
    let bestScore = -Infinity;
    let bestMove = null;

    open.forEach(move => {
      let score = this.minimax(board, move)
      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }

    })
    return bestMove;
  },

  // This function returns the min/max value for a given move
  // Or should it return the next move to make? that makes sense to me
  // Yeah, now it returns the next move to make
  minimax(board, isXNext, loopNumber) {
    let open = this.isOpen(board);
    let bestScoreX = -Infinity;
    let bestScoreO = +Infinity;
    let bestScore = 0;
    let bestMoveX = null;
    let bestMoveO = null;

    let bestMove = null;
    const marker = isXNext ? 'X' : 'O';
    console.log('minimax!:', loopNumber, marker, open);

    // const comp = isCompX ? 'X' : 'O';
    // const player = isCompX ? 'O' : 'X';

    open.forEach((move) => {
      let nextBoard = board.slice();
      console.log('loop move:', marker, move);
      nextBoard[move] = marker;
      let result = this.calculateWinner(nextBoard)
      // console.log('marker:', marker);
      // console.log('nb:', nextBoard);
      if (result) {
        let score = this.getScore(nextBoard);
        console.log('RESULT:', result, score);

        // console.log('score:', score, move);
        if (isXNext) {
          if (score > bestScoreX) {
            // console.log('current score X:', bestScoreX);
            bestScore = score;
            bestMove = move;
            // console.log('best score X:', bestScoreX);
            console.log('best move X:', bestMove, score);
          }
        } else if (!isXNext) {
          if (score < bestScoreO) {
            // console.log('current score O:', bestScoreO);
            bestScore = score;
            bestMove = move;
            // console.log('best score O:', bestScoreO);
            console.log('best move O:', bestMove, score);
          }
        }
      } else {
        // console.log('in the else')
        bestMove = this.minimax(nextBoard, !isXNext, loopNumber + 1);
      }
      // console.log('BEST MOVE:', loopNumber, bestMove);

    })

    // const bestScore = isXNext ? bestScoreX : bestScoreO

    // const bestMove = isXNext ? bestMoveX : bestMoveO
    console.log('FINALLY:', loopNumber, marker, bestMove,
      bestScore);
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