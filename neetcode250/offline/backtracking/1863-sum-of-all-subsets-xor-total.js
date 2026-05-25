/**
 * 1863. Sum of All Subset XOR Totals
 *
 * The XOR total of an array is defined as the bitwise XOR of all its elements,
 * or 0 if the array is empty. Given an array nums, return the sum of all XOR
 * totals for every subset of nums.
 *
 * Note: Subsets with the same elements should be counted multiple times.
 *
 * Example 1:
 *   Input:  nums = [1, 3]
 *   Output: 6
 *   Explanation: subsets → {} = 0, {1} = 1, {3} = 3, {1,3} = 2  →  sum = 6
 *
 * Example 2:
 *   Input:  nums = [5, 1, 6]
 *   Output: 28
 *
 * Constraints:
 *   1 <= nums.length <= 12
 *   1 <= nums[i] <= 20
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {

};

// --- tests ---
console.assert(subsetXORSum([1, 3]) === 6,        'Test 1 failed');
console.assert(subsetXORSum([5, 1, 6]) === 28,     'Test 2 failed');
console.assert(subsetXORSum([3, 4, 5, 6, 7, 8]) === 480, 'Test 3 failed');
console.assert(subsetXORSum([2]) === 2,            'Test 4 failed');
console.log('All tests passed for 1863-sum-of-all-subsets-xor-total');
