/**
 * 36. Valid Sudoku
 *
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to
 * be validated according to the following rules:
 *   1. Each row must contain the digits 1-9 without repetition.
 *   2. Each column must contain the digits 1-9 without repetition.
 *   3. Each of the nine 3x3 sub-boxes must contain digits 1-9 without repetition.
 *
 * Note: A Sudoku board (partially filled) could be valid but is not necessarily
 * solvable. Only the filled cells need to be validated. '.' represents empty cells.
 *
 * Examples:
 *   Valid board (see test below) => true
 *   Invalid board with duplicate 8 in top-left box => false
 *
 * Constraints:
 *   - board.length == 9
 *   - board[i].length == 9
 *   - board[i][j] is a digit 1-9 or '.'.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
};

// Tests
const validBoard = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

const invalidBoard = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

// Duplicate in column 0
const invalidBoardCol = [
  ["5","3",".",".","7",".",".",".","."],
  ["5",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.assert(isValidSudoku(validBoard) === true,
  "Test 1 failed: valid board => true");
console.assert(isValidSudoku(invalidBoard) === false,
  "Test 2 failed: board with duplicate 8 in top-left box and col 0 => false");
console.assert(isValidSudoku(invalidBoardCol) === false,
  "Test 3 failed: board with duplicate 5 in column 0 => false");

// All-dots board should be valid
const emptyBoard = Array.from({ length: 9 }, () => Array(9).fill("."));
console.assert(isValidSudoku(emptyBoard) === true,
  "Test 4 failed: all-empty board => true");

console.log("All tests passed for 36-valid-sudoku");
