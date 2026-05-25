/**
 * 213. House Robber II
 *
 * All houses are arranged in a circle. That means the first house is the
 * neighbor of the last one. You cannot rob two adjacent houses on the same
 * night (including the wrap-around adjacency between the first and last house).
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob without alerting police.
 *
 * Example 1: nums = [2, 3, 2] → 3
 * Example 2: nums = [1, 2, 3, 1] → 4
 *
 * Hint: Run the linear House Robber on nums[0..n-2] and nums[1..n-1],
 *       return the max of both.
 *
 * Constraints:
 *   1 <= nums.length <= 100
 *   0 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {};

// Tests
console.assert(rob([2, 3, 2]) === 3, "Test 1 failed");
console.assert(rob([1, 2, 3, 1]) === 4, "Test 2 failed");
console.assert(rob([1, 2, 3]) === 3, "Test 3 failed");
console.assert(rob([200]) === 200, "Test 4 failed");
console.log("All tests passed for 213. House Robber II");
