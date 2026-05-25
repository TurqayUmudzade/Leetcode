/**
 * 695. Max Area of Island
 *
 * You are given an m x n binary matrix grid. An island is a group of 1's
 * (representing land) connected 4-directionally (horizontal or vertical.)
 * You may assume all four edges of the grid are surrounded by water.
 *
 * The area of an island is the number of cells with a value 1 in the island.
 *
 * Return the maximum area of an island in grid. If there is no island, return 0.
 *
 * Example 1:
 *   grid = [
 *     [0,0,1,0,0,0,0,1,0,0,0,0,0],
 *     [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *     [0,1,1,0,1,0,0,0,0,0,0,0,0],
 *     [0,1,0,0,1,1,0,0,1,0,1,0,0],
 *     [0,1,0,0,1,1,0,0,1,1,1,0,0],
 *     [0,0,0,0,0,0,0,0,0,0,1,0,0],
 *     [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *     [0,0,0,0,0,0,0,1,1,0,0,0,0]
 *   ] => 6
 *
 * Example 2:
 *   grid = [[0,0,0,0,0,0,0,0]] => 0
 *
 * Constraints:
 *   - m == grid.length
 *   - n == grid[i].length
 *   - 1 <= m, n <= 50
 *   - grid[i][j] is either 0 or 1
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

};

// Tests
console.assert(
  maxAreaOfIsland([
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
  ]) === 6,
  'Test 1 failed: expected 6'
);

console.assert(
  maxAreaOfIsland([[0,0,0,0,0,0,0,0]]) === 0,
  'Test 2 failed: expected 0'
);

console.assert(
  maxAreaOfIsland([[1,1],[1,0]]) === 3,
  'Test 3 failed: expected 3'
);

console.assert(
  maxAreaOfIsland([[1]]) === 1,
  'Test 4 failed: expected 1'
);

console.log('All tests passed for 695-max-area-of-island');
