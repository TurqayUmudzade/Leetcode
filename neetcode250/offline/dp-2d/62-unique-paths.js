/**
 * 62. Unique Paths
 *
 * A robot is located at the top-left corner of an m x n grid.
 * The robot can only move either down or right at any point in time.
 * The robot is trying to reach the bottom-right corner of the grid.
 * How many possible unique paths are there?
 *
 * Example:
 *   Input: m = 3, n = 7  =>  Output: 28
 *   Input: m = 3, n = 2  =>  Output: 3
 *
 * Constraints:
 *   1 <= m, n <= 100
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

};

// Tests
console.assert(uniquePaths(3, 7) === 28, 'Test 1 failed');
console.assert(uniquePaths(3, 2) === 3, 'Test 2 failed');
console.assert(uniquePaths(1, 1) === 1, 'Test 3 failed');
console.assert(uniquePaths(2, 2) === 2, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
