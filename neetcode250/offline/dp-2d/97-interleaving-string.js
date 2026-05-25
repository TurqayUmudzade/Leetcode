/**
 * 97. Interleaving String
 *
 * Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of
 * s1 and s2. An interleaving of two strings s and t is a configuration where
 * s and t are divided into n and m substrings respectively such that:
 *   s = s1 + s2 + ... + sn
 *   t = t1 + t2 + ... + tm
 *   |n - m| <= 1
 * The interleaving is s1 + t1 + s2 + t2 + ... or t1 + s1 + t2 + s2 + ...
 * (Preserving the relative order of characters from each string.)
 *
 * Example:
 *   Input: s1="aabcc", s2="dbbca", s3="aadbbcbcac"  =>  Output: true
 *   Input: s1="aabcc", s2="dbbca", s3="aadbbbaccc"  =>  Output: false
 *   Input: s1="", s2="", s3=""                      =>  Output: true
 *
 * Constraints:
 *   0 <= s1.length, s2.length <= 100
 *   0 <= s3.length <= 200
 *   s1, s2, s3 consist of lowercase English letters.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {

};

// Tests
console.assert(isInterleave('aabcc', 'dbbca', 'aadbbcbcac') === true, 'Test 1 failed');
console.assert(isInterleave('aabcc', 'dbbca', 'aadbbbaccc') === false, 'Test 2 failed');
console.assert(isInterleave('', '', '') === true, 'Test 3 failed');
console.assert(isInterleave('a', 'b', 'ab') === true, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
