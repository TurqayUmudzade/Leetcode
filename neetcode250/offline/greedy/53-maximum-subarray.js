/**
 * 53. Maximum Subarray
 *
 * Given an integer array nums, find the subarray with the largest sum and return its sum.
 * Use Kadane's algorithm for an O(n) solution.
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
};

console.assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6, "Test 1 failed");
console.assert(maxSubArray([1]) === 1, "Test 2 failed");
console.assert(maxSubArray([5, 4, -1, 7, 8]) === 23, "Test 3 failed");
console.assert(maxSubArray([-1, -2, -3]) === -1, "Test 4 failed");
