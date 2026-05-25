/**
 * 88. Merge Sorted Array
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing
 * order, and two integers m and n, representing the number of elements in
 * nums1 and nums2 respectively.
 *
 * Merge nums2 into nums1 as one sorted array in-place. The final sorted array
 * should not be returned by the function, but instead be stored inside the
 * array nums1. To accommodate this, nums1 has a length of m + n, where the
 * first m elements denote the elements that should be merged, and the last n
 * elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * Examples:
 *   Input:  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 *   Output: [1,2,2,3,5,6]
 *
 *   Input:  nums1 = [1], m = 1, nums2 = [], n = 0
 *   Output: [1]
 *
 *   Input:  nums1 = [0], m = 0, nums2 = [1], n = 1
 *   Output: [1]
 *
 * Constraints:
 *   - nums1.length == m + n
 *   - nums2.length == n
 *   - 0 <= m, n <= 200
 *   - 1 <= m + n <= 200
 *   - -10^9 <= nums1[i], nums2[j] <= 10^9
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
};

// Tests
const a1 = [1,2,3,0,0,0];
merge(a1, 3, [2,5,6], 3);
console.assert(JSON.stringify(a1) === JSON.stringify([1,2,2,3,5,6]), `Test 1 failed: ${JSON.stringify(a1)}`);

const a2 = [1];
merge(a2, 1, [], 0);
console.assert(JSON.stringify(a2) === JSON.stringify([1]), `Test 2 failed: ${JSON.stringify(a2)}`);

const a3 = [0];
merge(a3, 0, [1], 1);
console.assert(JSON.stringify(a3) === JSON.stringify([1]), `Test 3 failed: ${JSON.stringify(a3)}`);

const a4 = [4,5,6,0,0,0];
merge(a4, 3, [1,2,3], 3);
console.assert(JSON.stringify(a4) === JSON.stringify([1,2,3,4,5,6]), `Test 4 failed: ${JSON.stringify(a4)}`);

console.log("All tests passed for 88-merge-sorted-array");
