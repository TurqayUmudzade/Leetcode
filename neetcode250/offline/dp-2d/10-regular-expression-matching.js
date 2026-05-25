/**
 * 10. Regular Expression Matching
 *
 * Given an input string s and a pattern p, implement regular expression matching
 * with support for '.' and '*' where:
 *   '.' matches any single character.
 *   '*' matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 *
 * Example:
 *   Input: s = "aa", p = "a"    =>  Output: false
 *     Explanation: "a" does not match the entire string "aa"
 *   Input: s = "aa", p = "a*"   =>  Output: true
 *     Explanation: '*' means zero or more of the preceding 'a', so "aa" matches
 *   Input: s = "ab", p = ".*"   =>  Output: true
 *     Explanation: ".*" means zero or more of any character
 *
 * Constraints:
 *   1 <= s.length <= 20
 *   1 <= p.length <= 30
 *   s contains only lowercase English letters.
 *   p contains only lowercase English letters, '.', and '*'.
 *   It is guaranteed for each occurrence of '*', there will be a valid preceding element to match.
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

};

// Tests
console.assert(isMatch('aa', 'a') === false, 'Test 1 failed');
console.assert(isMatch('aa', 'a*') === true, 'Test 2 failed');
console.assert(isMatch('ab', '.*') === true, 'Test 3 failed');
console.assert(isMatch('mississippi', 'mis*is*p*.') === false, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
