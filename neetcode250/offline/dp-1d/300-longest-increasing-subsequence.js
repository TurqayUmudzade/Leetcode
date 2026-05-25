/**
 * 300. Longest Increasing Subsequence
 *
 * Given an integer array nums, return the length of the longest strictly
 * increasing subsequence. A subsequence is derived by deleting some (or no)
 * elements from the array without changing the order of remaining elements.
 *
 * Example 1: nums = [10, 9, 2, 5, 3, 7, 101, 18] → 4  (e.g. [2, 3, 7, 101])
 * Example 2: nums = [0, 1, 0, 3, 2, 3]            → 4  (e.g. [0, 1, 2, 3])
 *
 * Constraints:
 *   1 <= nums.length <= 2500
 *   -10^4 <= nums[i] <= 10^4
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {};

// Tests
console.assert(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]) === 4, "Test 1 failed");
console.assert(lengthOfLIS([0, 1, 0, 3, 2, 3]) === 4, "Test 2 failed");
console.assert(lengthOfLIS([7, 7, 7, 7, 7]) === 1, "Test 3 failed");
console.assert(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]) === 6, "Test 4 failed");
console.log("All tests passed for 300. Longest Increasing Subsequence");
