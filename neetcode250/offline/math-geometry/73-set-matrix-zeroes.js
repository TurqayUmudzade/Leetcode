/**
 * 73. Set Matrix Zeroes
 *
 * Given an m×n integer matrix, if an element is 0, set its entire row and
 * column to 0. Do it in-place.
 *
 * Examples:
 *   [[1,1,1],[1,0,1],[1,1,1]]
 *     → [[1,0,1],[0,0,0],[1,0,1]]
 *
 *   [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 *     → [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 *
 * @param {number[][]} matrix
 * @return {void} - mutates matrix in-place
 */
var setZeroes = function(matrix) {

};

// Tests
const m1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(m1);
console.assert(JSON.stringify(m1) === JSON.stringify([[1,0,1],[0,0,0],[1,0,1]]), "Test 1 failed");

const m2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(m2);
console.assert(JSON.stringify(m2) === JSON.stringify([[0,0,0,0],[0,4,5,0],[0,3,1,0]]), "Test 2 failed");

const m3 = [[1,2,3],[4,5,6]];
setZeroes(m3);
console.assert(JSON.stringify(m3) === JSON.stringify([[1,2,3],[4,5,6]]), "Test 3 failed");

const m4 = [[1,0]];
setZeroes(m4);
console.assert(JSON.stringify(m4) === JSON.stringify([[0,0]]), "Test 4 failed");
