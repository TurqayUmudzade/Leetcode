/**
 * 81. Search in Rotated Sorted Array II
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 *
 * Same as problem 33 but the array may contain duplicates.
 * Return true if target exists, false otherwise.
 * Worst case O(n) due to duplicates; average O(log n).
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {};

// --- Tests ---
console.assert(search([2,5,6,0,0,1,2], 0) === true,  'Test 1 failed');
console.assert(search([2,5,6,0,0,1,2], 3) === false, 'Test 2 failed');
console.assert(search([1,0,1,1,1], 0)     === true,  'Test 3 failed');
console.assert(search([1,1,1,1,1], 2)     === false, 'Test 4 failed');
console.log('All tests passed (or stubs — implement the function)');
