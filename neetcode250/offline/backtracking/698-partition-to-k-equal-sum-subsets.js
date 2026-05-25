/**
 * 698. Partition to K Equal Sum Subsets
 *
 * Given an integer array nums and an integer k, return true if it is possible
 * to divide this array into k non-empty subsets whose sums are all equal.
 *
 * Example 1:
 *   Input:  nums = [4, 3, 2, 3, 5, 2, 1], k = 4
 *   Output: true
 *   Explanation: (5), (1,4), (2,3), (2,3)
 *
 * Example 2:
 *   Input:  nums = [1, 2, 3, 4], k = 3
 *   Output: false
 *
 * Constraints:
 *   1 <= k <= nums.length <= 16
 *   1 <= nums[i] <= 10^4
 *   The frequency of each element is in the range [1, 4].
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {

};

// --- tests ---
console.assert(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4) === true,  'Test 1 failed');
console.assert(canPartitionKSubsets([1, 2, 3, 4], 3)          === false, 'Test 2 failed');
console.assert(canPartitionKSubsets([2, 2, 2, 2], 4)          === true,  'Test 3 failed: 4 equal subsets of size 1');
console.assert(canPartitionKSubsets([1, 2, 3, 4, 5, 6, 7, 8], 4) === true, 'Test 4 failed: sum=36, each subset=9');

console.log('All tests passed for 698-partition-to-k-equal-sum-subsets');
