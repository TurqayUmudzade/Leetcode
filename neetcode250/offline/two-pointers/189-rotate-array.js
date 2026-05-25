/**
 * 189. Rotate Array
 *
 * Given an integer array nums, rotate the array to the right by k steps,
 * where k is non-negative. Modify the array in-place.
 *
 * Examples:
 *   Input:  nums = [1,2,3,4,5,6,7], k = 3
 *   Output: [5,6,7,1,2,3,4]
 *   Explanation:
 *     rotate 1 step  to the right: [7,1,2,3,4,5,6]
 *     rotate 2 steps to the right: [6,7,1,2,3,4,5]
 *     rotate 3 steps to the right: [5,6,7,1,2,3,4]
 *
 *   Input:  nums = [-1,-100,3,99], k = 2
 *   Output: [3,99,-1,-100]
 *
 * Constraints:
 *   - 1 <= nums.length <= 10^5
 *   - -2^31 <= nums[i] <= 2^31 - 1
 *   - 0 <= k <= 10^5
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
};

// Tests
const r1 = [1,2,3,4,5,6,7];
rotate(r1, 3);
console.assert(JSON.stringify(r1) === JSON.stringify([5,6,7,1,2,3,4]), `Test 1 failed: ${JSON.stringify(r1)}`);

const r2 = [-1,-100,3,99];
rotate(r2, 2);
console.assert(JSON.stringify(r2) === JSON.stringify([3,99,-1,-100]), `Test 2 failed: ${JSON.stringify(r2)}`);

const r3 = [1,2,3];
rotate(r3, 0);
console.assert(JSON.stringify(r3) === JSON.stringify([1,2,3]), `Test 3 failed: ${JSON.stringify(r3)}`);

const r4 = [1,2];
rotate(r4, 5);
console.assert(JSON.stringify(r4) === JSON.stringify([2,1]), `Test 4 failed: ${JSON.stringify(r4)}`);

console.log("All tests passed for 189-rotate-array");
