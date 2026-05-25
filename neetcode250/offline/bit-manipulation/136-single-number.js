/**
 * 136. Single Number
 *
 * Given a non-empty array of integers where every element appears twice except
 * for one, find that single element. Use XOR: a ^ a = 0 and a ^ 0 = a, so
 * XORing all values cancels duplicates and leaves the unique element.
 *
 * Examples:
 *   [2,2,1]       → 1
 *   [4,1,2,1,2]   → 4
 *   [1]           → 1
 *
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

};

// Tests
console.assert(singleNumber([2,2,1]) === 1, "Test 1 failed");
console.assert(singleNumber([4,1,2,1,2]) === 4, "Test 2 failed");
console.assert(singleNumber([1]) === 1, "Test 3 failed");
console.assert(singleNumber([0,1,0]) === 1, "Test 4 failed");
