/**
 * 463. Island Perimeter
 *
 * You are given row x col grid representing a map where grid[i][j] = 1 represents
 * land and grid[i][j] = 0 represents water.
 *
 * Grid cells are connected horizontally/vertically (not diagonally).
 * The grid is completely surrounded by water, and there is exactly one island
 * (i.e., one or more connected land cells).
 *
 * The island doesn't have "lakes", meaning the water inside isn't connected to
 * the water around the island. One cell is a square with side length 1.
 * The grid is rectangular, width and height don't exceed 100.
 *
 * Return the perimeter of the island.
 *
 * Example:
 *   grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]] => 16
 *
 * Constraints:
 *   - row == grid.length
 *   - col == grid[i].length
 *   - 1 <= row, col <= 100
 *   - grid[i][j] is 0 or 1
 *   - There is exactly one island in grid.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

};

// Tests
console.assert(
  islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]) === 16,
  'Test 1 failed: expected 16'
);

console.assert(
  islandPerimeter([[1]]) === 4,
  'Test 2 failed: expected 4'
);

console.assert(
  islandPerimeter([[1,0]]) === 4,
  'Test 3 failed: expected 4'
);

console.assert(
  islandPerimeter([[1,1],[1,1]]) === 8,
  'Test 4 failed: expected 8'
);

console.log('All tests passed for 463-island-perimeter');
