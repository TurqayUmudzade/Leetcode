/**
 * 1137. N-th Tribonacci Number
 *
 * The Tribonacci sequence is defined as:
 *   T0 = 0, T1 = 1, T2 = 1
 *   Tn = Tn-1 + Tn-2 + Tn-3  for n >= 3
 *
 * Given n, return the value of Tn.
 *
 * Example 1: n = 4  → 4
 * Example 2: n = 25 → 1389537
 *
 * Constraints: 0 <= n <= 37
 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {};

// Tests
console.assert(tribonacci(0) === 0, "Test 1 failed");
console.assert(tribonacci(1) === 1, "Test 2 failed");
console.assert(tribonacci(4) === 4, "Test 3 failed");
console.assert(tribonacci(25) === 1389537, "Test 4 failed");
console.log("All tests passed for 1137. N-th Tribonacci Number");
