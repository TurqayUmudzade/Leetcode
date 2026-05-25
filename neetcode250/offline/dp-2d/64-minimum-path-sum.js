/**
 * 64. Minimum Path Sum
 *
 * Given an m x n grid filled with non-negative numbers, find a path from the
 * top-left to the bottom-right that minimizes the sum of all numbers along the path.
 * You can only move either down or right at any point in time.
 *
 * Example:
 *   Input: grid = [[1,3,1],[1,5,1],[4,2,1]]  =>  Output: 7
 *     Explanation: Path 1→3→1→1→1 sums to 7
 *   Input: grid = [[1,2,3],[4,5,6]]          =>  Output: 12
 *
 * Constraints:
 *   m == grid.length
 *   n == grid[i].length
 *   1 <= m, n <= 200
 *   0 <= grid[i][j] <= 200
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

};

// Tests
console.assert(minPathSum([[1,3,1],[1,5,1],[4,2,1]]) === 7, 'Test 1 failed');
console.assert(minPathSum([[1,2,3],[4,5,6]]) === 12, 'Test 2 failed');
console.assert(minPathSum([[1]]) === 1, 'Test 3 failed');
console.assert(minPathSum([[1,2],[1,1]]) === 3, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
