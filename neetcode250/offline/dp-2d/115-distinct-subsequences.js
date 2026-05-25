/**
 * 115. Distinct Subsequences
 *
 * Given two strings s and t, return the number of distinct subsequences of s which
 * equals t. A subsequence of a string is a new string formed from the original string
 * by deleting some (can be none) of the characters without disturbing the relative
 * positions of the remaining characters.
 *
 * The answer fits in a 32-bit integer.
 *
 * Example:
 *   Input: s = "rabbbit", t = "rabbit"  =>  Output: 3
 *     Explanation: The 3 ways are: ra[b]bbit, rab[b]bit, rabb[b]it
 *   Input: s = "babgbag", t = "bag"     =>  Output: 5
 *
 * Constraints:
 *   1 <= s.length, t.length <= 1000
 *   s and t consist of English letters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {

};

// Tests
console.assert(numDistinct('rabbbit', 'rabbit') === 3, 'Test 1 failed');
console.assert(numDistinct('babgbag', 'bag') === 5, 'Test 2 failed');
console.assert(numDistinct('a', 'a') === 1, 'Test 3 failed');
console.assert(numDistinct('aaa', 'a') === 3, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
