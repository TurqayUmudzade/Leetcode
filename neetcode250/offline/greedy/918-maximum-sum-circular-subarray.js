/**
 * 918. Maximum Sum Circular Subarray
 *
 * Given a circular integer array nums (the next element of nums[nums.length - 1] is nums[0]),
 * return the maximum possible sum of a non-empty subarray of nums.
 *
 * Hint: max circular sum = total sum - min subarray sum (when the subarray wraps around).
 * Take the larger of: max linear subarray sum, or (total - min linear subarray sum).
 * Edge case: if all elements are negative, return max linear subarray sum.
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
};

console.assert(maxSubarraySumCircular([1, -2, 3, -2]) === 3, "Test 1 failed");
console.assert(maxSubarraySumCircular([5, -3, 5]) === 10, "Test 2 failed");
console.assert(maxSubarraySumCircular([-3, -2, -3]) === -2, "Test 3 failed");
console.assert(maxSubarraySumCircular([3, -1, 2, -1]) === 4, "Test 4 failed");
