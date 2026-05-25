/**
 * 48. Rotate Image
 *
 * Given an n×n 2D matrix representing an image, rotate the image 90 degrees
 * clockwise in-place. You must modify the matrix directly without allocating
 * another matrix.
 *
 * Strategy: transpose then reverse each row.
 *
 * Examples:
 *   [[1,2,3],[4,5,6],[7,8,9]]
 *     → [[7,4,1],[8,5,2],[9,6,3]]
 *
 *   [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 *     → [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 *
 * @param {number[][]} matrix
 * @return {void} - mutates matrix in-place
 */
var rotate = function(matrix) {

};

// Tests
const m1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate(m1);
console.assert(JSON.stringify(m1) === JSON.stringify([[7,4,1],[8,5,2],[9,6,3]]), "Test 1 failed");

const m2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(m2);
console.assert(JSON.stringify(m2) === JSON.stringify([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]), "Test 2 failed");

const m3 = [[1]];
rotate(m3);
console.assert(JSON.stringify(m3) === JSON.stringify([[1]]), "Test 3 failed");

const m4 = [[1,2],[3,4]];
rotate(m4);
console.assert(JSON.stringify(m4) === JSON.stringify([[3,1],[4,2]]), "Test 4 failed");
