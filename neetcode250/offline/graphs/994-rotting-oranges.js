/**
 * 994. Rotting Oranges
 *
 * You are given an m x n grid where each cell can have one of three values:
 *   0 — representing an empty cell,
 *   1 — representing a fresh orange,
 *   2 — representing a rotten orange.
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten
 * orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a
 * fresh orange. If this is impossible, return -1.
 *
 * Example 1:
 *   grid = [[2,1,1],[1,1,0],[0,1,1]] => 4
 *
 * Example 2:
 *   grid = [[2,1,1],[0,1,1],[1,0,1]] => -1
 *   (bottom-left fresh orange can never be reached)
 *
 * Example 3:
 *   grid = [[0,2]] => 0
 *   (no fresh oranges)
 *
 * Constraints:
 *   - m == grid.length
 *   - n == grid[i].length
 *   - 1 <= m, n <= 10
 *   - grid[i][j] is 0, 1, or 2
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

};

// Tests
console.assert(
  orangesRotting([[2,1,1],[1,1,0],[0,1,1]]) === 4,
  'Test 1 failed: expected 4'
);

console.assert(
  orangesRotting([[2,1,1],[0,1,1],[1,0,1]]) === -1,
  'Test 2 failed: expected -1'
);

console.assert(
  orangesRotting([[0,2]]) === 0,
  'Test 3 failed: expected 0'
);

console.assert(
  orangesRotting([[1,2]]) === 1,
  'Test 4 failed: expected 1'
);

console.log('All tests passed for 994-rotting-oranges');
