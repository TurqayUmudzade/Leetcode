/**
 * 198. House Robber
 *
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed. Adjacent houses have
 * security systems connected, so you cannot rob two adjacent houses on the
 * same night.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting police.
 *
 * Example 1: nums = [1, 2, 3, 1] → 4   (rob house 1 and 3: 1 + 3)
 * Example 2: nums = [2, 7, 9, 3, 1] → 12  (rob house 1, 3, 5: 2 + 9 + 1)
 *
 * Constraints:
 *   1 <= nums.length <= 100
 *   0 <= nums[i] <= 400
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {};

// Tests
console.assert(rob([1, 2, 3, 1]) === 4, "Test 1 failed");
console.assert(rob([2, 7, 9, 3, 1]) === 12, "Test 2 failed");
console.assert(rob([1]) === 1, "Test 3 failed");
console.assert(rob([2, 1]) === 2, "Test 4 failed");
console.log("All tests passed for 198. House Robber");
