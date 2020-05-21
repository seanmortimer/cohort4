import ai from './TicTacToeAI'

let blank, open3, xWins, oWins, tie = null;

beforeEach(() => {
    blank = [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
    open3 = [
        'X', 'O', 'O',
        '', 'O', '',
        '', 'X', 'X'
    ]
    xWins = [
        'X', 'O', 'O',
        'X', 'O', 'O',
        'X', 'X', 'X'
    ]
    oWins = [
        'X', 'O', 'O',
        'X', 'O', '',
        'O', 'X', ''
    ]
    tie = [
        'X', 'O', 'X',
        'X', 'O', 'O',
        'O', 'X', 'X'
    ]
});

afterEach(() => {
    blank, open3, xWins, oWins, tie = null;
});


test('finding open spots', () => {
    expect(ai.open(blank)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expect(ai.open(open3)).toEqual([3, 5, 6]);
    expect(ai.open(xWins)).toEqual([]);
    expect(ai.open(oWins)).toEqual([5, 8]);
});

test('calculating winner', () => {
    expect(ai.calculateWinner(blank)).toBe(null);
    expect(ai.calculateWinner(open3)).toBe(null);
    expect(ai.calculateWinner(xWins)).toBe('X');
    expect(ai.calculateWinner(oWins)).toBe('O');
    expect(ai.calculateWinner(tie)).toBe('T');
});



test('test minimax function', () => {
    const board1 = [
        'X', 'O', 'O',
        'X', 'O', 'O',
        '', 'X', 'X'
    ]

    expect(ai.minimax(board1)).toBe(6);
});