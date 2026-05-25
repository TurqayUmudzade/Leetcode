/**
 * 33. Search in Rotated Sorted Array
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 * Array was sorted (distinct values) then rotated at some pivot.
 * Search for target in O(log n).
 * Time: O(log n)  Space: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number} index, or -1 if not found
 */
var search = function(nums, target) {};

// --- Tests ---
console.assert(search([4,5,6,7,0,1,2], 0) === 4,  'Test 1 failed');
console.assert(search([4,5,6,7,0,1,2], 3) === -1, 'Test 2 failed');
console.assert(search([1], 0)             === -1, 'Test 3 failed');
console.assert(search([1,3], 3)           === 1,  'Test 4 failed');
console.log('All tests passed (or stubs — implement the function)');
