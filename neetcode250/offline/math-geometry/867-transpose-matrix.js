/**
 * 867. Transpose Matrix
 *
 * Given a 2D integer array matrix, return the transpose of matrix. The
 * transpose of a matrix is the matrix flipped over its main diagonal,
 * swapping the row and column indices of each element.
 *
 * Examples:
 *   [[1,2,3],[4,5,6],[7,8,9]] → [[1,4,7],[2,5,8],[3,6,9]]
 *   [[1,2],[3,4]]             → [[1,3],[2,4]]
 *
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {

};

// Tests
console.assert(
    JSON.stringify(transpose([[1,2,3],[4,5,6],[7,8,9]])) === JSON.stringify([[1,4,7],[2,5,8],[3,6,9]]),
    "Test 1 failed"
);
console.assert(
    JSON.stringify(transpose([[1,2],[3,4]])) === JSON.stringify([[1,3],[2,4]]),
    "Test 2 failed"
);
console.assert(
    JSON.stringify(transpose([[1,2,3]])) === JSON.stringify([[1],[2],[3]]),
    "Test 3 failed"
);
console.assert(
    JSON.stringify(transpose([[1],[2],[3]])) === JSON.stringify([[1,2,3]]),
    "Test 4 failed"
);
