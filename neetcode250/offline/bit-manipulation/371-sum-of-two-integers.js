/**
 * 371. Sum of Two Integers
 *
 * Given two integers a and b, return the sum of the two integers without using
 * the operators + or -.
 *
 * Use bit manipulation:
 *   - XOR gives the sum without carry: a ^ b
 *   - AND shifted left gives the carry: (a & b) << 1
 * Repeat until carry is 0. Use & 0xFFFFFFFF to handle 32-bit overflow, then
 * convert back to signed if the high bit is set.
 *
 * Examples:
 *   a=1,  b=2  → 3
 *   a=-2, b=3  → 1
 *   a=0,  b=0  → 0
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {

};

// Tests
console.assert(getSum(1, 2) === 3, "Test 1 failed");
console.assert(getSum(-2, 3) === 1, "Test 2 failed");
console.assert(getSum(0, 0) === 0, "Test 3 failed");
console.assert(getSum(-1, -1) === -2, "Test 4 failed");
