/**
 * 647. Palindromic Substrings
 *
 * Given a string s, return the number of palindromic substrings in it.
 * A string is a palindrome when it reads the same backward as forward.
 * A substring is a contiguous sequence of characters within the string.
 *
 * Example 1: s = "abc" → 3   ("a", "b", "c")
 * Example 2: s = "aaa" → 6   ("a", "a", "a", "aa", "aa", "aaa")
 *
 * Approach: Expand Around Center — for each center (single char and between
 *   two chars), expand while the characters match and count each palindrome.
 *
 * Constraints:
 *   1 <= s.length <= 1000
 *   s consists of lowercase English letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {};

// Tests
console.assert(countSubstrings("abc") === 3, "Test 1 failed");
console.assert(countSubstrings("aaa") === 6, "Test 2 failed");
console.assert(countSubstrings("a") === 1, "Test 3 failed");
console.assert(countSubstrings("abba") === 6, "Test 4 failed");
console.log("All tests passed for 647. Palindromic Substrings");
