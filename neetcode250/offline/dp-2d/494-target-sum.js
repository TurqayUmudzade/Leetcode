/**
 * 494. Target Sum
 *
 * You are given an integer array nums and an integer target. You want to build an
 * expression out of nums by adding one of the symbols '+' or '-' before each integer
 * in nums and then concatenate all the integers. Return the number of different
 * expressions that you can build which evaluate to target.
 *
 * Example:
 *   Input: nums = [1,1,1,1,1], target = 3  =>  Output: 5
 *     Explanation: There are 5 ways: -1+1+1+1+1, +1-1+1+1+1, +1+1-1+1+1, +1+1+1-1+1, +1+1+1+1-1
 *   Input: nums = [1], target = 1          =>  Output: 1
 *
 * Constraints:
 *   1 <= nums.length <= 20
 *   0 <= nums[i] <= 1000
 *   0 <= sum(nums[i]) <= 1000
 *   -1000 <= target <= 1000
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {

};

// Tests
console.assert(findTargetSumWays([1,1,1,1,1], 3) === 5, 'Test 1 failed');
console.assert(findTargetSumWays([1], 1) === 1, 'Test 2 failed');
console.assert(findTargetSumWays([1], 2) === 0, 'Test 3 failed');
console.assert(findTargetSumWays([0,0,0,0,0,0,0,0,1], 1) === 256, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
