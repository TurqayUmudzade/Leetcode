/**
 * 76. Minimum Window Substring
 *
 * Given two strings s and t of lengths m and n respectively, return the minimum
 * window substring of s such that every character in t (including duplicates) is
 * included in the window. If there is no such substring, return the empty string "".
 *
 * Example 1:
 *   Input: s = "ADOBECODEBANC", t = "ABC"
 *   Output: "BANC"
 *   Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from t.
 *
 * Example 2:
 *   Input: s = "a", t = "a"
 *   Output: "a"
 *
 * Example 3:
 *   Input: s = "a", t = "aa"
 *   Output: ""
 *   Explanation: Both 'a's from t must be included but s only has one 'a'.
 *
 * Constraints:
 *   - m == s.length, n == t.length
 *   - 1 <= m, n <= 10^5
 *   - s and t consist of uppercase and lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

};

// Tests
console.assert(minWindow("ADOBECODEBANC", "ABC") === "BANC", "Test 1 failed");
console.assert(minWindow("a", "a") === "a", "Test 2 failed");
console.assert(minWindow("a", "aa") === "", "Test 3 failed");
console.assert(minWindow("aa", "aa") === "aa", "Test 4 failed");
console.log("All tests passed!");
