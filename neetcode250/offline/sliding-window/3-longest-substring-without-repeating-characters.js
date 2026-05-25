/**
 * 3. Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without repeating
 * characters.
 *
 * Example 1:
 *   Input: s = "abcabcbb"
 *   Output: 3
 *   Explanation: The answer is "abc", with length 3.
 *
 * Example 2:
 *   Input: s = "bbbbb"
 *   Output: 1
 *   Explanation: The answer is "b", with length 1.
 *
 * Example 3:
 *   Input: s = "pwwkew"
 *   Output: 3
 *   Explanation: The answer is "wke", with length 3.
 *
 * Constraints:
 *   - 0 <= s.length <= 5 * 10^4
 *   - s consists of English letters, digits, symbols and spaces.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

};

// Tests
console.assert(lengthOfLongestSubstring("abcabcbb") === 3, "Test 1 failed");
console.assert(lengthOfLongestSubstring("bbbbb") === 1, "Test 2 failed");
console.assert(lengthOfLongestSubstring("pwwkew") === 3, "Test 3 failed");
console.assert(lengthOfLongestSubstring("") === 0, "Test 4 failed");
console.log("All tests passed!");
