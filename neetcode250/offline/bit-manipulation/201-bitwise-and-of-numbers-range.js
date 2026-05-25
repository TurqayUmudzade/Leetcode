/**
 * 201. Bitwise AND of Numbers Range
 *
 * Given two integers left and right that represent a range [left, right],
 * return the bitwise AND of all numbers in that range, inclusive.
 *
 * Key insight: the result is the common left prefix (in binary) of left and
 * right. Any bits that differ get zeroed out by the AND of the consecutive
 * values between them. Shift both right until they are equal, tracking shifts,
 * then shift the result back left.
 *
 * Examples:
 *   left=5,  right=7          → 4  (101 & 110 & 111 = 100)
 *   left=0,  right=0          → 0
 *   left=1,  right=2147483647 → 0
 *
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {

};

// Tests
console.assert(rangeBitwiseAnd(5, 7) === 4, "Test 1 failed");
console.assert(rangeBitwiseAnd(0, 0) === 0, "Test 2 failed");
console.assert(rangeBitwiseAnd(1, 2147483647) === 0, "Test 3 failed");
console.assert(rangeBitwiseAnd(6, 7) === 6, "Test 4 failed");
