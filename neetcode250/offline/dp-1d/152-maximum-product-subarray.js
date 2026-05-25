/**
 * 152. Maximum Product Subarray
 *
 * Given an integer array nums, find a contiguous subarray (containing at
 * least one number) which has the largest product, and return that product.
 *
 * Example 1: nums = [2, 3, -2, 4]  → 6   (subarray [2, 3])
 * Example 2: nums = [-2, 0, -1]    → 0   (subarray [0])
 *
 * Hint: Track both the current maximum and current minimum products at each
 *       step, since a negative times a negative becomes positive.
 *
 * Constraints:
 *   1 <= nums.length <= 2 * 10^4
 *   -10 <= nums[i] <= 10
 *   The product of any prefix or suffix of nums fits in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {};

// Tests
console.assert(maxProduct([2, 3, -2, 4]) === 6, "Test 1 failed");
console.assert(maxProduct([-2, 0, -1]) === 0, "Test 2 failed");
console.assert(maxProduct([-2]) === -2, "Test 3 failed");
console.assert(maxProduct([-2, 3, -4]) === 24, "Test 4 failed");
console.log("All tests passed for 152. Maximum Product Subarray");
