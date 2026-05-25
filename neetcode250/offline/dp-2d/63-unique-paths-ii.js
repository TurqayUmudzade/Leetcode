/**
 * 63. Unique Paths II
 *
 * A robot is located at the top-left corner of an m x n grid.
 * The robot can only move either down or right at any point in time.
 * Some cells contain obstacles (1 = obstacle, 0 = free).
 * How many possible unique paths are there to the bottom-right corner?
 *
 * Example:
 *   Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]  =>  Output: 2
 *   Input: obstacleGrid = [[0,1],[0,0]]              =>  Output: 1
 *
 * Constraints:
 *   m == obstacleGrid.length
 *   n == obstacleGrid[i].length
 *   1 <= m, n <= 100
 *   obstacleGrid[i][j] is 0 or 1
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

};

// Tests
console.assert(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]) === 2, 'Test 1 failed');
console.assert(uniquePathsWithObstacles([[0,1],[0,0]]) === 1, 'Test 2 failed');
console.assert(uniquePathsWithObstacles([[1]]) === 0, 'Test 3 failed');
console.assert(uniquePathsWithObstacles([[0,0],[0,0]]) === 2, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
