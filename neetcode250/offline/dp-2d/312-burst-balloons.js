/**
 * 312. Burst Balloons
 *
 * You are given n balloons, indexed from 0 to n-1. Each balloon is painted with a
 * number on it represented by an array nums. You are asked to burst all the balloons.
 * If you burst the i-th balloon, you will get
 *   nums[i-1] * nums[i] * nums[i+1] coins.
 * If i-1 or i+1 goes out of bounds of the array, treat it as if there is a balloon
 * with a 1 painted on it. Return the maximum coins you can collect by bursting all balloons wisely.
 *
 * Example:
 *   Input: nums = [3,1,5,8]  =>  Output: 167
 *     Explanation: Burst 1→3*1*5=15, then 5→3*5*8=120, then 3→1*3*8=24, then 8→1*8*1=8
 *                  Total = 15+120+24+8 = 167
 *   Input: nums = [1,5]      =>  Output: 10
 *
 * Constraints:
 *   n == nums.length
 *   1 <= n <= 300
 *   0 <= nums[i] <= 100
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {

};

// Tests
console.assert(maxCoins([3,1,5,8]) === 167, 'Test 1 failed');
console.assert(maxCoins([1,5]) === 10, 'Test 2 failed');
console.assert(maxCoins([1]) === 1, 'Test 3 failed');
console.assert(maxCoins([0]) === 0, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
