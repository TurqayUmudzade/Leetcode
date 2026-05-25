/**
 * 35. Search Insert Position
 * https://leetcode.com/problems/search-insert-position/
 *
 * Return the index if target is found, otherwise return the index where it
 * would be inserted to keep the array sorted.
 * Time: O(log n)  Space: O(1)
 *
 * @param {number[]} nums - sorted array of distinct integers
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {};

// --- Tests ---
console.assert(searchInsert([1,3,5,6], 5) === 2, 'Test 1 failed');
console.assert(searchInsert([1,3,5,6], 2) === 1, 'Test 2 failed');
console.assert(searchInsert([1,3,5,6], 7) === 4, 'Test 3 failed');
console.assert(searchInsert([1,3,5,6], 0) === 0, 'Test 4 failed');
console.log('All tests passed (or stubs — implement the function)');
