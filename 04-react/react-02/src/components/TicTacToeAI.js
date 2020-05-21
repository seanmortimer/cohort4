const ai = {

    // Find the open spots
    open(board) {
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
        const oopen = this.open(board);
        let bestScore = -Infinity;
        let bestMove = null;

        oopen.forEach(move => {
            let score = this.minimax(board, move)
            if (score > bestScore) {
                bestScore = score;
                bestMove = move;
            }

        })
        return bestMove;
    },

    minimax(board, move, depth, isCompX) {
        // This function returns the min/max value for a given move
        let result = this.calculateWinner(board);
        let scores = {
            X: 1,
            O: -1,
            T: 0
        };

        if (result) {
            let score = scores[result];
            return score;
        }

        if (isCompX) {

        }
        return 0;
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
        if (this.open(board).length === 0) {
            return 'T';
        }
        return null;
    }
}
export default ai;