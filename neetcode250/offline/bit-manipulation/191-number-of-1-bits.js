/**
 * 191. Number of 1 Bits
 *
 * Given a positive integer n, return the number of set bits (1s) in its
 * binary representation (also known as the Hamming weight).
 *
 * Examples:
 *   n = 11         → 3   (binary: 1011)
 *   n = 128        → 1   (binary: 10000000)
 *   n = 4294967293 → 31  (binary: 11111111111111111111111111111101)
 *
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {

};

// Tests
console.assert(hammingWeight(11) === 3, "Test 1 failed");
console.assert(hammingWeight(128) === 1, "Test 2 failed");
console.assert(hammingWeight(4294967293) === 31, "Test 3 failed");
console.assert(hammingWeight(0) === 0, "Test 4 failed");
