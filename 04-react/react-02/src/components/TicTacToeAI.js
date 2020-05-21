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

    // This is the recursive function that will loop through all possible moves
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
  minimax(board, isCompX, isXNext) {
    let open = this.isOpen(board);
    let bestScore = 0;
    let bestMove = null;
    const comp = isCompX ? 'X' : 'O';
    // const player = isCompX ? 'O' : 'X';
    let nextBoard = board.slice();
    let scores = {
      X: 1,
      O: -1,
      T: 0
    };


    open.forEach((move) => {
      nextBoard[move] = comp;
      let result = this.calculateWinner(nextBoard)
      // console.log('marker:', marker);
      // console.log('result:', result);
      // console.log('nb:', nextBoard);
      if (result) {
        let score = (1 + this.isOpen(nextBoard).length) * scores[result];
        console.log('score:', score, move);
        if (score < bestScore) {
          bestScore = score;
          bestMove = move;

        console.log('best score:', bestScore, move);
        console.log('best move:', bestMove, move);
        // return bestMove;
      }
      this.minimax(nextBoard, isCompX, !isXNext);
    }})
    // if (isCompX) {

    // }
    return bestMove;
  },


  rando(board) {
    return 0;
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