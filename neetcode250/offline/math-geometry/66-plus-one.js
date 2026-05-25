/**
 * 66. Plus One
 *
 * You are given a large integer represented as an array of digits, where
 * digits[i] is the i-th digit of the integer. The digits are ordered from
 * most significant to least significant (left-to-right). Increment the large
 * integer by one and return the resulting array of digits.
 *
 * Examples:
 *   [1,2,3] → [1,2,4]
 *   [9,9]   → [1,0,0]
 *   [0]     → [1]
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

};

// Tests
console.assert(JSON.stringify(plusOne([1,2,3])) === JSON.stringify([1,2,4]), "Test 1 failed");
console.assert(JSON.stringify(plusOne([9,9])) === JSON.stringify([1,0,0]), "Test 2 failed");
console.assert(JSON.stringify(plusOne([0])) === JSON.stringify([1]), "Test 3 failed");
console.assert(JSON.stringify(plusOne([9,9,9])) === JSON.stringify([1,0,0,0]), "Test 4 failed");
