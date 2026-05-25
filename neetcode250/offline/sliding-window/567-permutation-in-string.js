/**
 * 567. Permutation in String
 *
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1,
 * or false otherwise. In other words, return true if one of s1's permutations
 * is a substring of s2.
 *
 * Example 1:
 *   Input: s1 = "ab", s2 = "eidbaooo"
 *   Output: true
 *   Explanation: s2 contains one permutation of s1 ("ba").
 *
 * Example 2:
 *   Input: s1 = "ab", s2 = "eidboaoo"
 *   Output: false
 *
 * Constraints:
 *   - 1 <= s1.length, s2.length <= 10^4
 *   - s1 and s2 consist of lowercase English letters.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

};

// Tests
console.assert(checkInclusion("ab", "eidbaooo") === true, "Test 1 failed");
console.assert(checkInclusion("ab", "eidboaoo") === false, "Test 2 failed");
console.assert(checkInclusion("adc", "dcda") === true, "Test 3 failed");
console.assert(checkInclusion("hello", "ooolleoooleh") === false, "Test 4 failed");
console.log("All tests passed!");
