/**
 * 7. Reverse Integer
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If
 * reversing x causes the value to go outside the signed 32-bit integer range
 * [-2^31, 2^31 - 1], return 0.
 *
 * Do not store the reversed number as a 64-bit integer. Check for overflow
 * before multiplying: if the accumulator would exceed INT_MAX / 10, stop.
 *
 * Examples:
 *   123        → 321
 *   -123       → -321
 *   120        → 21
 *   1534236469 → 0  (overflow)
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

};

// Tests
console.assert(reverse(123) === 321, "Test 1 failed");
console.assert(reverse(-123) === -321, "Test 2 failed");
console.assert(reverse(120) === 21, "Test 3 failed");
console.assert(reverse(1534236469) === 0, "Test 4 failed");
