/**
 * 680. Valid Palindrome II
 *
 * Given a string s, return true if the s can be palindrome after deleting at
 * most one character from it.
 *
 * Examples:
 *   Input:  s = "aba"
 *   Output: true
 *
 *   Input:  s = "abca"
 *   Output: true
 *   Explanation: You could delete the character 'c'.
 *
 *   Input:  s = "abc"
 *   Output: false
 *
 * Constraints:
 *   - 1 <= s.length <= 10^5
 *   - s consists of lowercase English letters
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
};

// Tests
console.assert(validPalindrome("aba") === true, "Test 1 failed");
console.assert(validPalindrome("abca") === true, "Test 2 failed");
console.assert(validPalindrome("abc") === false, "Test 3 failed");
console.assert(validPalindrome("deeee") === true, "Test 4 failed");

console.log("All tests passed for 680-valid-palindrome-ii");
