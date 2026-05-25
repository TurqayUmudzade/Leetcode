/**
 * 377. Combination Sum IV
 *
 * Given an array of distinct integers nums and a target integer target,
 * return the number of possible combinations that add up to target.
 * The order of the combination matters (i.e., different orderings count as
 * different combinations).
 *
 * Example 1: nums = [1, 2, 3], target = 4 → 7
 *   Combinations: (1,1,1,1), (1,1,2), (1,2,1), (1,3), (2,1,1), (2,2), (3,1)
 *
 * Constraints:
 *   1 <= nums.length <= 200
 *   1 <= nums[i] <= 1000
 *   All elements of nums are unique.
 *   1 <= target <= 1000
 *   The answer will fit in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {};

// Tests
console.assert(combinationSum4([1, 2, 3], 4) === 7, "Test 1 failed");
console.assert(combinationSum4([9], 3) === 0, "Test 2 failed");
console.assert(combinationSum4([1, 2, 3], 1) === 1, "Test 3 failed");
console.assert(combinationSum4([1, 2, 3], 3) === 4, "Test 4 failed");
console.log("All tests passed for 377. Combination Sum IV");
