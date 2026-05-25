/**
 * 704. Binary Search
 * https://leetcode.com/problems/binary-search/
 *
 * Classic binary search on a sorted array.
 * Time: O(log n)  Space: O(1)
 *
 * @param {number[]} nums - sorted array of distinct integers
 * @param {number} target
 * @return {number} index of target, or -1 if not found
 */
var search = function(nums, target) {};

// --- Tests ---
console.assert(search([-1,0,3,5,9,12], 9) === 4,  'Test 1 failed');
console.assert(search([-1,0,3,5,9,12], 2) === -1, 'Test 2 failed');
console.assert(search([5], 5) === 0,               'Test 3 failed');
console.assert(search([1,2,3,4,5], 1) === 0,       'Test 4 failed');
console.log('All tests passed (or stubs — implement the function)');
