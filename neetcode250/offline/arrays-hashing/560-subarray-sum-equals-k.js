/**
 * 560. Subarray Sum Equals K
 *
 * Given an array of integers `nums` and an integer `k`, return the total
 * number of subarrays whose sum equals to k.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * Approach: prefix sum + hashmap in O(n) time, O(n) space.
 *   Keep a running prefix sum. For each position, check how many previous
 *   prefix sums equal (currentSum - k); those subarrays sum to k.
 *
 * Example:
 *   nums = [1,1,1], k = 2  → 2
 *   nums = [1,2,3], k = 3  → 2  ([1,2] and [3])
 *   nums = [1],     k = 0  → 0
 *   nums = [-1,-1,1], k = -1 → 2
 *
 * Constraints:
 *   1 <= nums.length <= 2 * 10^4
 *   -1000 <= nums[i] <= 1000
 *   -10^7 <= k <= 10^7
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

};

// --- Tests ---
console.assert(subarraySum([1,1,1], 2)    === 2, 'Test 1 failed');
console.assert(subarraySum([1,2,3], 3)    === 2, 'Test 2 failed');
console.assert(subarraySum([1], 0)        === 0, 'Test 3 failed');
console.assert(subarraySum([-1,-1,1], -1) === 2, 'Test 4 failed');
console.log('All tests passed (or assertions above show failures)');
