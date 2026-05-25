/**
 * 153. Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 *
 * Array was sorted then rotated. Find the minimum element.
 * All values are unique.
 * Time: O(log n)  Space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {};

// --- Tests ---
console.assert(findMin([3,4,5,1,2])       === 1, 'Test 1 failed');
console.assert(findMin([4,5,6,7,0,1,2])   === 0, 'Test 2 failed');
console.assert(findMin([11,13,15,17])      === 11,'Test 3 failed');
console.assert(findMin([2,1])              === 1, 'Test 4 failed');
console.log('All tests passed (or stubs — implement the function)');
