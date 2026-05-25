/**
 * 50. Pow(x, n)
 *
 * Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
 * Use fast exponentiation (binary exponentiation) for O(log n) time.
 * Handle negative exponents: x^-n = 1 / x^n.
 *
 * Examples:
 *   2.0  ^ 10 → 1024.0
 *   2.1  ^ 3  → 9.261 (approximately)
 *   2.0  ^ -2 → 0.25
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

};

// Tests (use epsilon for float comparisons)
const eps = 0.001;
console.assert(Math.abs(myPow(2.0, 10) - 1024.0) < eps, "Test 1 failed");
console.assert(Math.abs(myPow(2.1, 3) - 9.261) < eps, "Test 2 failed");
console.assert(Math.abs(myPow(2.0, -2) - 0.25) < eps, "Test 3 failed");
console.assert(Math.abs(myPow(1.0, 2147483647) - 1.0) < eps, "Test 4 failed");
