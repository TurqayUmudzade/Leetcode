/**
 * 41. First Missing Positive
 *
 * Given an unsorted integer array `nums`, return the smallest missing positive
 * integer.
 *
 * You must implement an algorithm that runs in O(n) time and uses O(1)
 * auxiliary space (i.e., you may modify the input array in-place).
 *
 * Key insight: The answer must be in [1, n+1]. Place each number x in the
 * range [1, n] at index x-1 (cyclic sort), then scan for the first index i
 * where nums[i] !== i+1.
 *
 * Example:
 *   nums = [1,2,0]        → 3
 *   nums = [3,4,-1,1]     → 2
 *   nums = [7,8,9,11,12]  → 1
 *   nums = [1]            → 2
 *
 * Constraints:
 *   1 <= nums.length <= 10^5
 *   -2^31 <= nums[i] <= 2^31 - 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {

};

// --- Tests ---
console.assert(firstMissingPositive([1,2,0])       === 3, 'Test 1 failed');
console.assert(firstMissingPositive([3,4,-1,1])    === 2, 'Test 2 failed');
console.assert(firstMissingPositive([7,8,9,11,12]) === 1, 'Test 3 failed');
console.assert(firstMissingPositive([1])           === 2, 'Test 4 failed');
console.log('All tests passed (or assertions above show failures)');
