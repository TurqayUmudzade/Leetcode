/**
 * 1. Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target. You may assume that each input
 * would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Examples:
 *   twoSum([2,7,11,15], 9) => [0,1]
 *   twoSum([3,2,4], 6)     => [1,2]
 *   twoSum([3,3], 6)       => [0,1]
 *
 * Constraints:
 *   - 2 <= nums.length <= 10^4
 *   - -10^9 <= nums[i] <= 10^9
 *   - -10^9 <= target <= 10^9
 *   - Only one valid answer exists.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
};

// Tests
console.assert(
  JSON.stringify(twoSum([2, 7, 11, 15], 9)) === JSON.stringify([0, 1]),
  "Test 1 failed: [2,7,11,15], 9 => [0,1]"
);
console.assert(
  JSON.stringify(twoSum([3, 2, 4], 6)) === JSON.stringify([1, 2]),
  "Test 2 failed: [3,2,4], 6 => [1,2]"
);
console.assert(
  JSON.stringify(twoSum([3, 3], 6)) === JSON.stringify([0, 1]),
  "Test 3 failed: [3,3], 6 => [0,1]"
);
console.assert(
  JSON.stringify(twoSum([1, 5, 3, 7], 8)) === JSON.stringify([1, 3]),
  "Test 4 failed: [1,5,3,7], 8 => [1,3]"
);

console.log("All tests passed for 1-two-sum");
