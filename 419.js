var countBattleships = function (board) {
    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const dfs = (i, j) => {
        board[i][j] = '.'
        for (const [di, dj] of dirs) {
            let newI = i + di
            let newJ = j + dj
            if (newI >= 0 && newJ >= 0 && newI < board.length && newJ < board[0].length && board[newI][newJ] === 'X') {
                dfs(newI, newJ)
            }
        }
    }

    let c = 0
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'X') {
                dfs(i, j)
                c++
            }
        }
    }
    return c
};

var countBattleships = function (board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'X'
                && board[i][j - 1] !== 'X'
                && (!board[i - 1] || board[i - 1][j] !== 'X')) count++;
        }
    }
    return count;
};

let board = [["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]]

console.log(countBattleships(board));