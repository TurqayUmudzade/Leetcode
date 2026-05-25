/**
 * 338. Counting Bits
 *
 * Given an integer n, return an array ans of length n+1 such that for each
 * i (0 <= i <= n), ans[i] is the number of 1-bits in the binary representation
 * of i.
 *
 * DP insight: ans[i] = ans[i >> 1] + (i & 1)  — shift off the lowest bit and
 * add whether that bit was set.
 *
 * Examples:
 *   n=2 → [0,1,1]
 *   n=5 → [0,1,1,2,1,2]
 *
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

};

// Tests
console.assert(JSON.stringify(countBits(2)) === JSON.stringify([0,1,1]), "Test 1 failed");
console.assert(JSON.stringify(countBits(5)) === JSON.stringify([0,1,1,2,1,2]), "Test 2 failed");
console.assert(JSON.stringify(countBits(0)) === JSON.stringify([0]), "Test 3 failed");
console.assert(JSON.stringify(countBits(1)) === JSON.stringify([0,1]), "Test 4 failed");
