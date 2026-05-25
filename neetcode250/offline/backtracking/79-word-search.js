/**
 * 79. Word Search
 *
 * Given an m x n grid of characters board and a string word, return true if
 * word exists in the grid. The word can be constructed from letters of
 * sequentially adjacent cells, where adjacent cells are horizontally or
 * vertically neighboring. The same letter cell may not be used more than once.
 *
 * Example:
 *   board = [["A","B","C","E"],
 *            ["S","F","C","S"],
 *            ["A","D","E","E"]]
 *   "ABCCED" → true
 *   "SEE"    → true
 *   "ABCB"   → false
 *
 * Constraints:
 *   m == board.length, n == board[i].length
 *   1 <= m, n <= 6
 *   1 <= word.length <= 15
 *   board and word consist of only uppercase and lowercase English letters.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

};

// --- tests ---
const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
];

console.assert(exist(board, 'ABCCED') === true,  'Test 1 failed: ABCCED should be true');
console.assert(exist(board, 'SEE')    === true,  'Test 2 failed: SEE should be true');
console.assert(exist(board, 'ABCB')   === false, 'Test 3 failed: ABCB should be false');
console.assert(exist([['a']], 'a')    === true,  'Test 4 failed: single cell match');

console.log('All tests passed for 79-word-search');
