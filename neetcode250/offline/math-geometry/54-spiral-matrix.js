/**
 * 54. Spiral Matrix
 *
 * Given an m×n matrix, return all elements of the matrix in spiral order
 * (clockwise from the top-left corner).
 *
 * Examples:
 *   [[1,2,3],[4,5,6],[7,8,9]]
 *     → [1,2,3,6,9,8,7,4,5]
 *
 *   [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 *     → [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

};

// Tests
console.assert(
    JSON.stringify(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])) === JSON.stringify([1,2,3,6,9,8,7,4,5]),
    "Test 1 failed"
);
console.assert(
    JSON.stringify(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])) === JSON.stringify([1,2,3,4,8,12,11,10,9,5,6,7]),
    "Test 2 failed"
);
console.assert(
    JSON.stringify(spiralOrder([[1]])) === JSON.stringify([1]),
    "Test 3 failed"
);
console.assert(
    JSON.stringify(spiralOrder([[1,2],[3,4]])) === JSON.stringify([1,2,4,3]),
    "Test 4 failed"
);
