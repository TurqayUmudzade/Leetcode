/**
 * 238. Product of Array Except Self
 *
 * Given an integer array nums, return an array answer such that answer[i] is
 * equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
 * integer. You must write an algorithm that runs in O(n) time and without using
 * the division operation.
 *
 * Examples:
 *   productExceptSelf([1,2,3,4])     => [24,12,8,6]
 *   productExceptSelf([-1,1,0,-3,3]) => [0,0,9,0,0]
 *
 * Constraints:
 *   - 2 <= nums.length <= 10^5
 *   - -30 <= nums[i] <= 30
 *   - The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * Follow-up: Can you solve the problem in O(1) extra space complexity?
 * (The output array does not count as extra space for this purpose.)
 * Hint: Use prefix and suffix product passes.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
};

// Tests
console.assert(
  JSON.stringify(productExceptSelf([1, 2, 3, 4])) === JSON.stringify([24, 12, 8, 6]),
  "Test 1 failed: [1,2,3,4] => [24,12,8,6]"
);
console.assert(
  JSON.stringify(productExceptSelf([-1, 1, 0, -3, 3])) === JSON.stringify([0, 0, 9, 0, 0]),
  "Test 2 failed: [-1,1,0,-3,3] => [0,0,9,0,0]"
);
console.assert(
  JSON.stringify(productExceptSelf([2, 3])) === JSON.stringify([3, 2]),
  "Test 3 failed: [2,3] => [3,2]"
);
console.assert(
  JSON.stringify(productExceptSelf([1, 1, 1, 1])) === JSON.stringify([1, 1, 1, 1]),
  "Test 4 failed: [1,1,1,1] => [1,1,1,1]"
);

console.log("All tests passed for 238-product-of-array-except-self");
