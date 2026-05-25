/**
 * 416. Partition Equal Subset Sum
 *
 * Given an integer array nums, return true if you can partition the array into
 * two subsets such that the sum of elements in both subsets is equal,
 * or false otherwise.
 *
 * Example 1: nums = [1, 5, 11, 5] → true   (subsets [1, 5, 5] and [11])
 * Example 2: nums = [1, 2, 3, 5]  → false  (no equal partition possible)
 *
 * Hint: If the total sum is odd, immediately return false.
 *       Otherwise check if a subset summing to total/2 exists (0/1 knapsack).
 *
 * Constraints:
 *   1 <= nums.length <= 200
 *   1 <= nums[i] <= 100
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {};

// Tests
console.assert(canPartition([1, 5, 11, 5]) === true, "Test 1 failed");
console.assert(canPartition([1, 2, 3, 5]) === false, "Test 2 failed");
console.assert(canPartition([1, 1]) === true, "Test 3 failed");
console.assert(canPartition([3, 3, 3, 4, 5]) === true, "Test 4 failed");
console.log("All tests passed for 416. Partition Equal Subset Sum");
