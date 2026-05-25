/**
 * 91. Decode Ways
 *
 * A message containing letters from A–Z can be encoded into numbers using:
 *   'A' → "1", 'B' → "2", ..., 'Z' → "26"
 *
 * Given a string s containing only digits, return the number of ways to
 * decode it. If there are no valid ways to decode the string, return 0.
 *
 * Note: "06" is invalid because "06" cannot map to "F" (leading zero).
 *
 * Example 1: s = "12"  → 2  ("AB" or "L")
 * Example 2: s = "226" → 3  ("BZ", "VF", "BBF")
 * Example 3: s = "06"  → 0  (leading zero makes it invalid)
 *
 * Constraints:
 *   1 <= s.length <= 100
 *   s contains only digits and may contain leading zeros.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {};

// Tests
console.assert(numDecodings("12") === 2, "Test 1 failed");
console.assert(numDecodings("226") === 3, "Test 2 failed");
console.assert(numDecodings("06") === 0, "Test 3 failed");
console.assert(numDecodings("11106") === 2, "Test 4 failed");
console.log("All tests passed for 91. Decode Ways");
