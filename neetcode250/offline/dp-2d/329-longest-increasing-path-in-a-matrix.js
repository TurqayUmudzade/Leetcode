/**
 * 329. Longest Increasing Path in a Matrix
 *
 * Given an m x n integers matrix, return the length of the longest increasing path
 * in the matrix. From each cell, you can either move in four directions: left, right,
 * up, or down. You may NOT move diagonally or move outside the boundary.
 * The path must be strictly increasing.
 *
 * Example:
 *   Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]  =>  Output: 4
 *     Explanation: Longest increasing path is [1,2,6,9]
 *   Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]  =>  Output: 4
 *     Explanation: Longest increasing path is [3,4,5,6]
 *   Input: matrix = [[1]]                      =>  Output: 1
 *
 * Constraints:
 *   m == matrix.length
 *   n == matrix[i].length
 *   1 <= m, n <= 200
 *   0 <= matrix[i][j] <= 2^31 - 1
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {

};

// Tests
console.assert(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]) === 4, 'Test 1 failed');
console.assert(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]) === 4, 'Test 2 failed');
console.assert(longestIncreasingPath([[1]]) === 1, 'Test 3 failed');
console.assert(longestIncreasingPath([[0,1,2,3,4,5,6,7,8,9],[19,18,17,16,15,14,13,12,11,10]]) === 20, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
