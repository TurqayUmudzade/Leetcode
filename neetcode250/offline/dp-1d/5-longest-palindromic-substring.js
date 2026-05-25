/**
 * 5. Longest Palindromic Substring
 *
 * Given a string s, return the longest palindromic substring in s.
 * A palindrome reads the same forward and backward.
 *
 * Example 1: s = "babad" → "bab"  (or "aba", both are valid)
 * Example 2: s = "cbbd"  → "bb"
 *
 * Approach: Expand Around Center
 *   For each character (and each pair of adjacent characters), expand outward
 *   as long as characters on both sides match. Track the longest palindrome found.
 *
 * Constraints:
 *   1 <= s.length <= 1000
 *   s consists of only digits and English letters.
 */

/**
 * @param {number} s
 * @return {string}
 */
var longestPalindrome = function(s) {};

// Helper: check if a string is a palindrome
function isPalin(str) {
    return str === str.split("").reverse().join("");
}

// Tests
const r1 = longestPalindrome("babad");
console.assert(r1 === "bab" || r1 === "aba", "Test 1 failed: got " + r1);

const r2 = longestPalindrome("cbbd");
console.assert(r2 === "bb", "Test 2 failed: got " + r2);

const r3 = longestPalindrome("a");
console.assert(r3 === "a", "Test 3 failed: got " + r3);

const r4 = longestPalindrome("racecar");
console.assert(r4 === "racecar", "Test 4 failed: got " + r4);

console.log("All tests passed for 5. Longest Palindromic Substring");
