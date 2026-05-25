/**
 * 424. Longest Repeating Character Replacement
 *
 * You are given a string s and an integer k. You can choose any character of
 * the string and change it to any other uppercase English character. You can
 * perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter you can
 * get after performing the above operations.
 *
 * Example 1:
 *   Input: s = "ABAB", k = 2
 *   Output: 4
 *   Explanation: Replace the two 'A's with two 'B's or vice versa.
 *
 * Example 2:
 *   Input: s = "AABABBA", k = 1
 *   Output: 4
 *   Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
 *
 * Constraints:
 *   - 1 <= s.length <= 10^5
 *   - s consists of only uppercase English letters.
 *   - 0 <= k <= s.length
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

};

// Tests
console.assert(characterReplacement("ABAB", 2) === 4, "Test 1 failed");
console.assert(characterReplacement("AABABBA", 1) === 4, "Test 2 failed");
console.assert(characterReplacement("AAAA", 0) === 4, "Test 3 failed");
console.assert(characterReplacement("ABCD", 2) === 3, "Test 4 failed");
console.log("All tests passed!");
