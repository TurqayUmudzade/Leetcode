/**
 * 3133. Minimum Array End
 *
 * You are given two integers n and x. Construct an array of strictly
 * increasing positive integers such that:
 *   1. All elements have a bitwise AND equal to x.
 *   2. The array has exactly n elements.
 *   3. The last element is minimized.
 *
 * The minimum last element is found by "filling" the zero-bits of x with the
 * binary representation of (n-1):
 *   - The set bits of x must remain set in every element (AND constraint).
 *   - The zero-bits of x are the only positions that can vary.
 *   - To make the smallest possible nth element, insert the bits of (n-1) into
 *     the zero-bit positions of x (from least significant to most significant).
 *
 * Examples:
 *   n=3, x=4  → 6
 *     x = ...100, zero-bit positions: 0,1
 *     n-1 = 2 = 10 in binary → fill bit-pos 0 with 0, bit-pos 1 with 1
 *     result = ...110 = 6
 *
 *   n=2, x=7  → 15
 *     x = ...0111, zero-bit positions: 3,4,...
 *     n-1 = 1 = 1 in binary → fill bit-pos 3 with 1
 *     result = 0...01111 = 15
 *
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {

};

// Tests
console.assert(minEnd(3, 4) === 6, "Test 1 failed");
console.assert(minEnd(2, 7) === 15, "Test 2 failed");
console.assert(minEnd(1, 1) === 1, "Test 3 failed");
console.assert(minEnd(6, 10) === 47, "Test 4 failed");
