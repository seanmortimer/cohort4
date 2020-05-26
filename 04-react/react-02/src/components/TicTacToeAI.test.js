/* eslint-disable no-multi-spaces */
import ai from './TicTacToeAI';

let boards = null;

beforeEach(() => {
  boards = {
    empty: [
      '', '', '',
      '', '', '',
      '', '', '',
    ],
    open1: [
      'X', 'O', 'O',
      'X', 'O', 'O',
      '', 'X', 'X',
    ],
    open2: [
      'X', 'O', 'O',
      '', '', 'X',
      'O', 'X', 'X',
    ],
    open2b: [
      'X', 'O', 'X',
      'X', 'O', 'O',
      '', '', 'X',
    ],
    open3: [
      'O', 'X', 'O',
      '', 'O', '',
      'X', 'X', '',
    ],
    open3B: [
      'O', '', 'X',
      'X', '', '',
      'X', 'O', 'O',
    ],
    xWins1: [       // score: 5
      'X', 'O', '',
      'X', 'O', '',
      'X', '', '',
    ],
    xWins2: [       // score: 1
      'X', 'O', 'O',
      'X', 'O', 'O',
      'X', 'X', 'X',
    ],
    oWins1: [       // score: -2
      'X', 'O', 'O',
      'X', 'O', 'X',
      'O', 'X', '',
    ],
    oWins2: [       // score: -3
      'X', 'O', 'O',
      'X', 'O', '',
      'O', 'X', '',
    ],
    tie: [          // score: 0
      'X', 'O', 'X',
      'X', 'O', 'O',
      'O', 'X', 'X',
    ],
  };
});

afterEach(() => {
  boards = null;
});


test('finding open spots', () => {
  expect(ai.isOpen(boards.empty)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  expect(ai.isOpen(boards.open3)).toEqual([3, 5, 8]);
  expect(ai.isOpen(boards.xWins1)).toEqual([2, 5, 7, 8]);
  expect(ai.isOpen(boards.xWins2)).toEqual([]);
  expect(ai.isOpen(boards.oWins1)).toEqual([8]);
});

test('calculating winner', () => {
  expect(ai.calculateWinner(boards.empty)).toBe(null);
  expect(ai.calculateWinner(boards.open1)).toBe(null);
  expect(ai.calculateWinner(boards.open3)).toBe(null);
  expect(ai.calculateWinner(boards.xWins1)).toBe('X');
  expect(ai.calculateWinner(boards.xWins2)).toBe('X');
  expect(ai.calculateWinner(boards.oWins1)).toBe('O');
  expect(ai.calculateWinner(boards.oWins2)).toBe('O');
  expect(ai.calculateWinner(boards.tie)).toBe('T');
});

test('Minimax score function', () => {
  expect(ai.getScore(boards.xWins1)).toBe(5);
  expect(ai.getScore(boards.xWins2)).toBe(1);
  expect(ai.getScore(boards.oWins1)).toBe(-2);
  expect(ai.getScore(boards.oWins2)).toBe(-3);
  expect(ai.getScore(boards.tie)).toBe(0);
});

test('test minimax function', () => {
  expect(ai.minimax(boards.open1, false)).toBe(-1);
  expect(ai.minimax(boards.open1, true)).toBe(1);
  expect(ai.minimax(boards.open2, false)).toBe(-2);
  expect(ai.minimax(boards.open2, true)).toBe(2);
  expect(ai.minimax(boards.open2b, false)).toBe(-2);
  expect(ai.minimax(boards.open2b, true)).toBe(2);
  expect(ai.minimax(boards.open3, false)).toBe(-3);

  expect(ai.minimax([
    'O', 'O', '',
    'X', 'X', '',
    '', '', '',
  ], false)).toBe(-5);
  expect(ai.minimax([
    '', '', '',
    '', 'X', 'X',
    'X', 'O', 'O',
  ], false)).toBe(3);
});

test('random player function', () => {
  expect([0, 1, 2, 3, 4, 5, 6, 7, 8])
    .toContain(ai.rando(boards.empty));
  expect([3, 5, 8])
    .toContain(ai.rando(boards.open3));
  expect([2, 5, 7, 8])
    .toContain(ai.rando(boards.xWins1));
  expect([5, 8])
    .toContain(ai.rando(boards.oWins2));
  expect(ai.rando(boards.tie)).toBeNull();
});

test('the make move function', () => {
  expect(ai.makeMove(boards.open1, true, true)).toEqual([
    'X', 'O', 'O',
    'X', 'O', 'O',
    'X', 'X', 'X',
  ]);
  expect(ai.makeMove(boards.open1, false, true)).toEqual([
    'X', 'O', 'O',
    'X', 'O', 'O',
    'O', 'X', 'X',
  ]);
  expect(ai.makeMove(boards.open1, true, false)).toEqual([
    'X', 'O', 'O',
    'X', 'O', 'O',
    'X', 'X', 'X',
  ]);
  expect(ai.makeMove(boards.open1, false, false)).toEqual([
    'X', 'O', 'O',
    'X', 'O', 'O',
    'O', 'X', 'X',
  ]);

  expect(ai.makeMove([
    'O', 'X', 'O',
    'X', 'X', 'O',
    '', '', '',
  ], false, true)).toEqual([
    'O', 'X', 'O',
    'X', 'X', 'O',
    '', '', 'O',
  ]);
  expect(ai.makeMove([
    'O', 'X', 'O',
    '', 'O', 'O',
    'X', 'O', 'X',
  ], false, true)).toEqual([
    'O', 'X', 'O',
    'O', 'O', 'O',
    'X', 'O', 'X',
  ]);
  expect(ai.makeMove([
    'X', 'X', '',
    'O', 'O', '',
    'O', 'X', '',
  ], false, true)).toEqual([
    'X', 'X', 'O',
    'O', 'O', '',
    'O', 'X', '',
  ]);
  expect(ai.makeMove([
    'O', 'O', '',
    'X', 'X', '',
    '', '', '',
  ], false, true)).toEqual([
    'O', 'O', 'O',
    'X', 'X', '',
    '', '', '',
  ]);
});


test('Can the random player ever beat minimax? (it shouldn\'t!)', () => {
  // X is random player, O is minimax
  const numGames = 100;
  let ties = 0;
  let xWins = 0;
  let oWins = 0;
  let result = null;
  // let totalMoves = 0;

  // eslint-disable-next-line no-console
  console.log(`Playing ${numGames} games. X (random) is first`);

  for (let i = 0; i < numGames; i++) {
    let hardMode = false;
    let isX = true;
    let currentBoard = boards.empty.slice();
    while (!ai.calculateWinner(currentBoard)) {
      currentBoard = ai.makeMove(currentBoard, isX, hardMode);
      // ai.logBoard(currentBoard);
      hardMode = !hardMode;
      isX = !isX;
      // totalMoves++;
    }

    result = ai.calculateWinner(currentBoard);
    if (result === 'X') {
      xWins++;
    }
    if (result === 'O') oWins++;
    if (result === 'T') ties++;
    // ai.logBoard(currentBoard, 'FINISHED');
  }


  // const loops = ai.loops.toLocaleString();
  // totalMoves = totalMoves.toLocaleString();
  // oWins = oWins.toLocaleString();
  // ties = ties.toLocaleString();
  // console.log(`Ties: ${ties}, X won: ${xWins}, O won: ${oWins}`);
  // console.log(`Total moves: ${totalMoves}, loops: ${loops}`);
  expect(xWins).toBe(0);
  expect(ties + oWins).toBe(numGames);
});
