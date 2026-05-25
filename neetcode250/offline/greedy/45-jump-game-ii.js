/**
 * 45. Jump Game II
 *
 * You are given a 0-indexed array of integers nums of length n. You are initially positioned
 * at nums[0]. Each element nums[i] represents the maximum jump length from index i.
 * Return the minimum number of jumps to reach nums[n - 1].
 * It is guaranteed you can always reach the last index.
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
};

console.assert(jump([2, 3, 1, 1, 4]) === 2, "Test 1 failed");
console.assert(jump([2, 3, 0, 1, 4]) === 2, "Test 2 failed");
console.assert(jump([1, 1, 1, 1]) === 3, "Test 3 failed");
console.assert(jump([1]) === 0, "Test 4 failed");
