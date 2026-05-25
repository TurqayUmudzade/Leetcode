/**
 * 219. Contains Duplicate II
 *
 * Given an integer array nums and an integer k, return true if there exist two
 * distinct indices i and j in the array such that nums[i] == nums[j] and
 * |i - j| <= k.
 *
 * Example 1:
 *   Input: nums = [1,2,3,1], k = 3
 *   Output: true
 *
 * Example 2:
 *   Input: nums = [1,0,1,1], k = 1
 *   Output: true
 *
 * Example 3:
 *   Input: nums = [1,2,3,1,2,3], k = 2
 *   Output: false
 *
 * Constraints:
 *   - 1 <= nums.length <= 10^5
 *   - -10^9 <= nums[i] <= 10^9
 *   - 0 <= k <= 10^5
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

};

// Tests
console.assert(containsNearbyDuplicate([1,2,3,1], 3) === true, "Test 1 failed");
console.assert(containsNearbyDuplicate([1,0,1,1], 1) === true, "Test 2 failed");
console.assert(containsNearbyDuplicate([1,2,3,1,2,3], 2) === false, "Test 3 failed");
console.assert(containsNearbyDuplicate([1], 1) === false, "Test 4 failed");
console.log("All tests passed!");
