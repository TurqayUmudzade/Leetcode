/**
 * 1143. Longest Common Subsequence
 *
 * Given two strings text1 and text2, return the length of their longest common
 * subsequence. A subsequence is a sequence derived from another string by deleting
 * some (possibly zero) characters without changing the relative order of the remaining
 * characters. If there is no common subsequence, return 0.
 *
 * Example:
 *   Input: text1 = "abcde", text2 = "ace"  =>  Output: 3
 *     Explanation: LCS is "ace"
 *   Input: text1 = "abc",   text2 = "abc"  =>  Output: 3
 *   Input: text1 = "abc",   text2 = "def"  =>  Output: 0
 *
 * Constraints:
 *   1 <= text1.length, text2.length <= 1000
 *   text1 and text2 consist of only lowercase English characters.
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {

};

// Tests
console.assert(longestCommonSubsequence('abcde', 'ace') === 3, 'Test 1 failed');
console.assert(longestCommonSubsequence('abc', 'abc') === 3, 'Test 2 failed');
console.assert(longestCommonSubsequence('abc', 'def') === 0, 'Test 3 failed');
console.assert(longestCommonSubsequence('bsbininm', 'jmjkbkjkv') === 1, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
