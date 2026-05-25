/**
 * 130. Surrounded Regions
 *
 * Given an m x n matrix board containing 'X' and 'O', capture all regions that
 * are 4-directionally surrounded by 'X'.
 *
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 *
 * An 'O' cell is NOT captured if it is on the border or is connected (directly or
 * indirectly) to an 'O' on the border.
 *
 * Modify the board in-place.
 *
 * Example:
 *   board = [
 *     ["X","X","X","X"],
 *     ["X","O","O","X"],
 *     ["X","X","O","X"],
 *     ["X","O","X","X"]
 *   ]
 *   After solve:
 *   [
 *     ["X","X","X","X"],
 *     ["X","X","X","X"],
 *     ["X","X","X","X"],
 *     ["X","O","X","X"]
 *   ]
 *   (bottom-left O is on the border, so it stays)
 *
 * Constraints:
 *   - m == board.length
 *   - n == board[i].length
 *   - 1 <= m, n <= 200
 *   - board[i][j] is 'X' or 'O'
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

};

// Tests
const b1 = [
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
];
solve(b1);
console.assert(
  JSON.stringify(b1) === JSON.stringify([
    ["X","X","X","X"],
    ["X","X","X","X"],
    ["X","X","X","X"],
    ["X","O","X","X"]
  ]),
  'Test 1 failed'
);

const b2 = [["X"]];
solve(b2);
console.assert(
  JSON.stringify(b2) === JSON.stringify([["X"]]),
  'Test 2 failed: single X should be unchanged'
);

const b3 = [["O"]];
solve(b3);
console.assert(
  JSON.stringify(b3) === JSON.stringify([["O"]]),
  'Test 3 failed: border O should remain O'
);

const b4 = [
  ["X","O","X"],
  ["O","X","O"],
  ["X","O","X"]
];
solve(b4);
// All O's are on the border so none are captured
console.assert(
  JSON.stringify(b4) === JSON.stringify([
    ["X","O","X"],
    ["O","X","O"],
    ["X","O","X"]
  ]),
  'Test 4 failed: all O\'s are on border, none should be flipped'
);

console.log('All tests passed for 130-surrounded-regions');
