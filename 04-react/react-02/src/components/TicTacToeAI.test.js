import ai from './TicTacToeAI'

let boards = null;

beforeEach(() => {
  boards = {
    empty: [
      '', '', '',
      '', '', '',
      '', '', ''
    ],
    open1: [        // for X 6, O 6
      'X', 'O', 'O',
      'X', 'O', 'O',
      '', 'X', 'X'
    ],
    open2: [        // for X 4, O 4
      'X', 'O', 'O',
      '', '', 'X',
      'O', 'X', 'X'
    ],
    open2b: [        // for X 6 , O 7
      'X', 'O', 'X',
      'X', 'O', 'O',
      '', '', 'X'
    ],
    open3: [        // for X 8, O 8
      'O', 'X', 'O',
      '', 'O', '',
      'X', 'X', ''
    ],
    open3B: [        // for X 8, O 8
      'O', '', 'X',
      'X', '', '',
      'X', 'O', 'O'
    ],
    xWins1: [       // score: 5
      'X', 'O', '',
      'X', 'O', '',
      'X', '', ''
    ],
    xWins2: [       // score: 1
      'X', 'O', 'O',
      'X', 'O', 'O',
      'X', 'X', 'X'
    ],
    oWins1: [       // score: -2
      'X', 'O', 'O',
      'X', 'O', 'X',
      'O', 'X', ''
    ],
    oWins2: [       // score: -3
      'X', 'O', 'O',
      'X', 'O', '',
      'O', 'X', ''
    ],
    tie: [          // score: 0
      'X', 'O', 'X',
      'X', 'O', 'O',
      'O', 'X', 'X'
    ]
  }
  // console.log('before boards:', boards);
});

afterEach(() => {
  boards = null;
  // console.log('after boards:', boards);
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

  // expect(ai.minimax(boards.open1, false)).toBe(6);
  // expect(ai.minimax(boards.open1, true, 1)).toBe(6);
  // expect(ai.minimax(boards.open2, false, 1)).toBe(4);
  // expect(ai.minimax(boards.open2, true, 1)).toBe(4);
  // expect(ai.minimax(boards.open2b, false, 1)).toBe(7);
  // expect(ai.minimax(boards.open2b, true, 1)).toBe(6);
  // console.log('NEW TEST 110 open3');
  expect(ai.minimax(boards.open3, false, 1)).toBe(8);
});