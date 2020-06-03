const ai = {

  // Find the open spots
  isOpen(board) {
    const open = [];
    board.forEach((square, i) => {
      if (square === '') {
        open.push(i);
      }
    });

    return open;
  },

  // Take array representing current board, return index for next move.
  makeMove(board, isXNext, isHardModeOn) {
    const marker = isXNext ? 'X' : 'O';
    let bestMove = null;
    const open = this.isOpen(board);

    if (open.length === 0) {
      // console.log('No move to make!');
      return board;
    }
    if (isHardModeOn) {
      if (isXNext) {
        let bestScore = -Infinity;
        open.forEach((move) => {
          const nextBoard = board.slice();
          nextBoard[move] = marker;
          const score = this.minimax(nextBoard, isXNext);
          if (score > bestScore) {
            bestScore = score;
            bestMove = move;
          }
        });
      } else {
        let bestScore = Infinity;
        open.forEach((move) => {
          const nextBoard = board.slice();
          nextBoard[move] = marker;
          // console.log('doing min move:', move, 'for', marker);
          const score = this.minimax(nextBoard, !isXNext);
          if (score < bestScore) {
            bestScore = score;
            bestMove = move;
          }
        });
      }
    }

    if (!isHardModeOn) {
      bestMove = this.rando(board);
      // console.log('Random:', marker, move);
    }

    const newBoard = board.slice();
    newBoard[bestMove] = marker;

    return newBoard;
  },

  // just a little counter for entertainment purposes
  // loops: 0,

  // This function returns the min/max value for a given move
  // Or should it return the next move to make? that makes sense to me
  // Yeah, now it returns the next move to make
  // Nope, turns out returning the score is much easier

  minimax(board, isXNext, depth = 1) {
    // this.loops++;
    const open = this.isOpen(board);
    const marker = isXNext ? 'X' : 'O';
    const result = this.calculateWinner(board);

    if (result) {
      const score = this.getScore(board);
      return score;
    }
    if (isXNext) {
      let bestScore = -Infinity;
      open.forEach((move) => {
        // const attempt = `Trying ${marker} to square ${move}, depth ${depth}`;
        // console.log(attempt);
        const nextBoard = board.slice();
        nextBoard[move] = marker;
        const score = this.minimax(nextBoard, false, depth + 1);
        bestScore = Math.max(score, bestScore);
      });
      return bestScore;
    }
    let bestScore = Infinity;
    open.forEach((move) => {
      const nextBoard = board.slice();
      nextBoard[move] = marker;
      const score = this.minimax(nextBoard, true, depth + 1);
      bestScore = Math.min(score, bestScore);
    });
    return bestScore;
  },

  // Here lies the original logic that almost worked. When you have a moment you should
  // see if you can find the flaws
  // open.forEach((move) => {
  //   const attempt = `Trying ${marker} to square ${move}, depth ${depth}`
  //   // console.log(attempt)

  //   const nextBoard = board.slice();
  //   nextBoard[move] = marker;

  //   const result = this.calculateWinner(nextBoard)

  //   if (result) {
  //     let score = this.getScore(nextBoard);
  //     // console.log('score:', score);
  //     if (isXNext) {
  //       if (score > bestX.score) {
  //         console.log('X scored:', score, 'depth', depth);
  //         // console.log(`bsX before: ${marker} ${bestX.score}, score: ${score},
  //            depth: ${depth}`);
  //         bestX = Object.assign({}, { score, move });
  //       }
  //       // console.log(`bsX after score: ${bestX.score}, move: ${bestX.move},
  //          depth: ${depth}`);
  //     } else if (!isXNext) {
  //       if (score < bestO.score) {
  //         console.log('O scored:', score, 'depth:', depth);
  //         // console.log(`bsO before: ${marker} ${bestO.score}, score: ${score},
  //           depth: ${depth}`);
  //         bestO = Object.assign({}, { score, move });
  //         console.log('updating best o final to score:', bestO.score, 'depth:', depth);
  //       }
  //       console.log(`bsO after score: ${bestO.score}, move: ${bestO.move}, depth: ${depth}`);
  //     }
  //   } else {
  //     // console.log(`ELSE: ${marker} to square ${move}, depth ${depth}, result ${result}`)
  //     const m = this.minimax(nextBoard, !isXNext, depth + 1);
  //     if (isXNext) {
  //       if (m.score > bestX.score) bestX = Object.assign({}, m);
  //     }
  //     if (!isXNext) {
  //       if (depth === 1) console.log('DEPTH 1')
  //       console.log('m score:', m.score, 'best O score', bestO.score, 'depth', depth);
  //       if (m.score < bestO.score) {
  //         bestO = Object.assign({}, m)
  //         console.log('updating best o to score:', bestO.score, 'depth:', depth);
  //       }
  //     }
  //   }
  //   // if (isXNext  ) console.log(`At depth ${depth} our best for X is move ${bestX.move},
  //       score ${bestX.score}`)
  //   // if (!isXNext ) console.log(`At depth ${depth} our best for O is move ${bestO.move},
  //        score ${bestO.score}`)
  // })

  // // console.log(`FIN: Player: ${marker}, BMove: ${bestMove} Depth: ${depth}`);
  // if (isXNext) return bestX;
  // else return bestO;
  // const bestMove = isXNext ? bestMoveX : bestMoveO;
  // const bestScore = isXNext ? bestScoreX : bestScoreO;
  // console.log('x / o:', bestMoveX, bestMoveO);
  //  ScoreX: ${bestScoreX}, ScoreO: ${bestScoreO}`);

  getScore(board) {
    const scores = {
      X: 1,
      O: -1,
      T: 0,
    };
    const result = this.calculateWinner(board);
    const score = (1 + this.isOpen(board).length) * scores[result];
    return score;
  },

  rando(board) {
    const open = this.isOpen(board);
    if (!open.length) return null;
    const min = 0;
    const max = open.length - 1;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
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
        return board[a];
      }
    }
    if (this.isOpen(board).length === 0) {
      return 'T';
    }
    return null;
  },

  // Helper function to make a pretty console log of a board
  // logBoard(board, text = '') {
  //   console.log(`${text}\n`,
  //     board.slice(0, 3), '\n',
  //     board.slice(3, 6), '\n',
  //     board.slice(6), '\n');
  // },
};
export default ai;
