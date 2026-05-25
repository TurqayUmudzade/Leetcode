/**
 * 304. Range Sum Query 2D - Immutable
 *
 * Given a 2D matrix matrix, handle multiple queries of the following type:
 *   sumRegion(row1, col1, row2, col2) — returns the sum of the elements of
 *   matrix inside the rectangle defined by its upper left corner (row1, col1)
 *   and lower right corner (row2, col2).
 *
 * Implement the NumMatrix class:
 *   - NumMatrix(matrix)                      Initializes with the matrix.
 *   - sumRegion(row1, col1, row2, col2)      Returns the sum of elements
 *                                            in the given rectangle.
 *
 * Examples:
 *   matrix = [
 *     [3, 0, 1, 4, 2],
 *     [5, 6, 3, 2, 1],
 *     [1, 2, 0, 1, 5],
 *     [4, 1, 0, 1, 7],
 *     [1, 0, 3, 0, 5]
 *   ]
 *   sumRegion(2,1,4,3) => 8
 *   sumRegion(1,1,2,2) => 11
 *   sumRegion(1,2,2,4) => 12
 *
 * Constraints:
 *   - m == matrix.length, n == matrix[i].length
 *   - 1 <= m, n <= 200
 *   - -10^4 <= matrix[i][j] <= 10^4
 *   - 0 <= row1 <= row2 < m, 0 <= col1 <= col2 < n
 *   - At most 10^4 calls to sumRegion.
 *
 * Hint: Precompute a 2D prefix sum table for O(1) queries.
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
};

// Tests
(function() {
  const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ];
  const nm = new NumMatrix(matrix);

  console.assert(nm.sumRegion(2, 1, 4, 3) === 8,
    "Test 1 failed: sumRegion(2,1,4,3) => 8, got " + nm.sumRegion(2, 1, 4, 3));
  console.assert(nm.sumRegion(1, 1, 2, 2) === 11,
    "Test 2 failed: sumRegion(1,1,2,2) => 11, got " + nm.sumRegion(1, 1, 2, 2));
  console.assert(nm.sumRegion(1, 2, 2, 4) === 12,
    "Test 3 failed: sumRegion(1,2,2,4) => 12, got " + nm.sumRegion(1, 2, 2, 4));
  console.assert(nm.sumRegion(0, 0, 0, 0) === 3,
    "Test 4 failed: sumRegion(0,0,0,0) => 3, got " + nm.sumRegion(0, 0, 0, 0));
})();

console.log("All tests passed for 304-range-sum-query-2d-immutable");
