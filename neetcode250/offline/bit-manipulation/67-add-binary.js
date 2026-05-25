/**
 * 67. Add Binary
 *
 * Given two binary strings a and b, return their sum as a binary string.
 * Process from the least significant bits (right-to-left) tracking carry.
 *
 * Examples:
 *   "11"   + "1"    → "100"
 *   "1010" + "1011" → "10101"
 *   "0"    + "0"    → "0"
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

};

// Tests
console.assert(addBinary("11", "1") === "100", "Test 1 failed");
console.assert(addBinary("1010", "1011") === "10101", "Test 2 failed");
console.assert(addBinary("0", "0") === "0", "Test 3 failed");
console.assert(addBinary("1111", "1111") === "11110", "Test 4 failed");
