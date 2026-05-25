/**
 * 55. Jump Game
 *
 * You are given an integer array nums where nums[i] is the maximum jump length from index i.
 * Return true if you can reach the last index starting from index 0, or false otherwise.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
};

console.assert(canJump([2, 3, 1, 1, 4]) === true, "Test 1 failed");
console.assert(canJump([3, 2, 1, 0, 4]) === false, "Test 2 failed");
console.assert(canJump([0]) === true, "Test 3 failed");
console.assert(canJump([1, 0, 1, 0]) === false, "Test 4 failed");
