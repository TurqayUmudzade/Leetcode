/**
 * 209. Minimum Size Subarray Sum
 *
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a subarray whose sum is greater than or equal
 * to target. If there is no such subarray, return 0 instead.
 *
 * Example 1:
 *   Input: target = 7, nums = [2,3,1,2,4,3]
 *   Output: 2
 *   Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 *
 * Example 2:
 *   Input: target = 4, nums = [1,4,4]
 *   Output: 1
 *
 * Example 3:
 *   Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 *   Output: 0
 *
 * Constraints:
 *   - 1 <= target <= 10^9
 *   - 1 <= nums.length <= 10^5
 *   - 1 <= nums[i] <= 10^4
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

};

// Tests
console.assert(minSubArrayLen(7, [2,3,1,2,4,3]) === 2, "Test 1 failed");
console.assert(minSubArrayLen(4, [1,4,4]) === 1, "Test 2 failed");
console.assert(minSubArrayLen(11, [1,1,1,1,1,1,1,1]) === 0, "Test 3 failed");
console.assert(minSubArrayLen(15, [1,2,3,4,5]) === 5, "Test 4 failed");
console.log("All tests passed!");
