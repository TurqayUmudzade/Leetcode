/**
 * 200. Number of Islands
 *
 * Given an m x n 2D binary grid which represents a map of '1's (land) and
 * '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are
 * all surrounded by water.
 *
 * Example 1:
 *   grid = [
 *     ["1","1","1","1","0"],
 *     ["1","1","0","1","0"],
 *     ["1","1","0","0","0"],
 *     ["0","0","0","0","0"]
 *   ] => 1
 *
 * Example 2:
 *   grid = [
 *     ["1","1","0","0","0"],
 *     ["1","1","0","0","0"],
 *     ["0","0","1","0","0"],
 *     ["0","0","0","1","1"]
 *   ] => 3
 *
 * Constraints:
 *   - m == grid.length
 *   - n == grid[i].length
 *   - 1 <= m, n <= 300
 *   - grid[i][j] is '0' or '1'
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

};

// Tests
console.assert(
  numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]) === 1,
  'Test 1 failed: expected 1'
);

console.assert(
  numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]) === 3,
  'Test 2 failed: expected 3'
);

console.assert(
  numIslands([["1"]]) === 1,
  'Test 3 failed: expected 1'
);

console.assert(
  numIslands([["0"]]) === 0,
  'Test 4 failed: expected 0'
);

console.log('All tests passed for 200-number-of-islands');
