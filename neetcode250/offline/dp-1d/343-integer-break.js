/**
 * 343. Integer Break
 *
 * Given an integer n, break it into the sum of k positive integers where
 * k >= 2, and maximize the product of those integers. Return the maximum product.
 *
 * Example 1: n = 2  → 1   (2 = 1 + 1, product = 1)
 * Example 2: n = 10 → 36  (10 = 3 + 3 + 4, product = 36)
 *
 * Constraints: 2 <= n <= 58
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {};

// Tests
console.assert(integerBreak(2) === 1, "Test 1 failed");
console.assert(integerBreak(3) === 2, "Test 2 failed");
console.assert(integerBreak(10) === 36, "Test 3 failed");
console.assert(integerBreak(4) === 4, "Test 4 failed");
console.log("All tests passed for 343. Integer Break");
