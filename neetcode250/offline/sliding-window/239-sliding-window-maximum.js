/**
 * 239. Sliding Window Maximum
 *
 * You are given an array of integers nums. There is a sliding window of size k
 * which is moving from the very left of the array to the very right. You can
 * only see the k numbers in the window. Each time the sliding window moves right
 * by one position, return the max of each window.
 *
 * Example 1:
 *   Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 *   Output: [3,3,5,5,6,7]
 *   Explanation:
 *     Window [1,3,-1]  -> 3
 *     Window [3,-1,-3] -> 3
 *     Window [-1,-3,5] -> 5
 *     Window [-3,5,3]  -> 5
 *     Window [5,3,6]   -> 6
 *     Window [3,6,7]   -> 7
 *
 * Example 2:
 *   Input: nums = [1], k = 1
 *   Output: [1]
 *
 * Constraints:
 *   - 1 <= nums.length <= 10^5
 *   - -10^4 <= nums[i] <= 10^4
 *   - 1 <= k <= nums.length
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

};

// Helper for deep equality in assertions
const arrayEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

console.assert(arrayEqual(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3), [3,3,5,5,6,7]), "Test 1 failed");
console.assert(arrayEqual(maxSlidingWindow([1], 1), [1]), "Test 2 failed");
console.assert(arrayEqual(maxSlidingWindow([1,-1], 1), [1,-1]), "Test 3 failed");
console.assert(arrayEqual(maxSlidingWindow([9,11], 2), [11]), "Test 4 failed");
console.log("All tests passed!");
