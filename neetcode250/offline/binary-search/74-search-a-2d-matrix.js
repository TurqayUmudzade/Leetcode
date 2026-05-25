/**
 * 74. Search a 2D Matrix
 * https://leetcode.com/problems/search-a-2d-matrix/
 *
 * m×n matrix where:
 *   - each row is sorted left→right
 *   - first element of each row > last element of previous row
 * Binary search by treating the matrix as a flattened sorted array.
 * Time: O(log(m*n))  Space: O(1)
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {};

// --- Tests ---
const m1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
console.assert(searchMatrix(m1, 3)  === true,  'Test 1 failed');
console.assert(searchMatrix(m1, 13) === false, 'Test 2 failed');
console.assert(searchMatrix([[1]], 1) === true, 'Test 3 failed');
console.assert(searchMatrix([[1,3,5]], 4) === false, 'Test 4 failed');
console.log('All tests passed (or stubs — implement the function)');
