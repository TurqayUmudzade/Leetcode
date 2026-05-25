/**
 * 51. N-Queens
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n
 * chessboard such that no two queens attack each other. Given an integer n,
 * return all distinct solutions to the n-queens puzzle.
 *
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space,
 * respectively.
 *
 * Example 1:
 *   Input:  n = 1
 *   Output: [["Q"]]
 *
 * Example 2:
 *   Input:  n = 4
 *   Output: 2 solutions:
 *     [[".Q..","...Q","Q...","..Q."],
 *      ["..Q.","Q...","...Q",".Q.."]]
 *
 * Constraints:
 *   1 <= n <= 9
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {

};

// --- tests ---
const r1 = solveNQueens(1);
console.assert(r1.length === 1 && r1[0][0] === 'Q', 'Test 1 failed: n=1 → 1 solution');

const r4 = solveNQueens(4);
console.assert(r4.length === 2, `Test 2 failed: n=4 → 2 solutions, got ${r4 && r4.length}`);

// Every solution must have exactly n queens
const r4Valid = r4.every(board =>
    board.length === 4 &&
    board.reduce((acc, row) => acc + (row.split('').filter(c => c === 'Q').length), 0) === 4
);
console.assert(r4Valid, 'Test 3 failed: each n=4 solution must contain exactly 4 queens');

const r5 = solveNQueens(5);
console.assert(r5.length === 10, `Test 4 failed: n=5 → 10 solutions, got ${r5 && r5.length}`);

console.log('All tests passed for 51-n-queens');
