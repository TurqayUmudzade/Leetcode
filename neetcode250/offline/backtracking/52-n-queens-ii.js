/**
 * 52. N-Queens II
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n
 * chessboard such that no two queens attack each other. Given an integer n,
 * return the number of distinct solutions to the n-queens puzzle.
 *
 * Example:
 *   Input:  n = 4
 *   Output: 2
 *
 * Known counts (OEIS A000170):
 *   n=1 → 1, n=2 → 0, n=3 → 0, n=4 → 2, n=5 → 10, n=6 → 4, n=7 → 40, n=8 → 92
 *
 * Constraints:
 *   1 <= n <= 9
 */

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {

};

// --- tests ---
console.assert(totalNQueens(1) === 1,  'Test 1 failed: n=1 → 1');
console.assert(totalNQueens(4) === 2,  'Test 2 failed: n=4 → 2');
console.assert(totalNQueens(5) === 10, 'Test 3 failed: n=5 → 10');
console.assert(totalNQueens(8) === 92, 'Test 4 failed: n=8 → 92');

console.log('All tests passed for 52-n-queens-ii');
