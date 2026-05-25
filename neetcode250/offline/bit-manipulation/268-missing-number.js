/**
 * 268. Missing Number
 *
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * XOR approach: XOR all indices 0..n with all values in nums. Every present
 * number cancels its index, leaving the missing number.
 *
 * Examples:
 *   [3,0,1]               → 2
 *   [0,1]                 → 2
 *   [9,6,4,2,3,5,7,0,1]   → 8
 *
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

};

// Tests
console.assert(missingNumber([3,0,1]) === 2, "Test 1 failed");
console.assert(missingNumber([0,1]) === 2, "Test 2 failed");
console.assert(missingNumber([9,6,4,2,3,5,7,0,1]) === 8, "Test 3 failed");
console.assert(missingNumber([0]) === 1, "Test 4 failed");
