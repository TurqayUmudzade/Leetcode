/**
 * 242. Valid Anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise. An anagram is a word formed by rearranging the letters of another.
 *
 * Examples:
 *   isAnagram("anagram", "nagaram") => true
 *   isAnagram("rat", "car") => false
 *
 * Constraints:
 *   - 1 <= s.length, t.length <= 5 * 10^4
 *   - s and t consist of lowercase English letters
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
};

// Tests
console.assert(
  isAnagram("anagram", "nagaram") === true,
  "Test 1 failed: 'anagram','nagaram' => true"
);
console.assert(
  isAnagram("rat", "car") === false,
  "Test 2 failed: 'rat','car' => false"
);
console.assert(
  isAnagram("a", "a") === true,
  "Test 3 failed: 'a','a' => true"
);
console.assert(
  isAnagram("ab", "a") === false,
  "Test 4 failed: 'ab','a' => false (different lengths)"
);

console.log("All tests passed for 242-valid-anagram");
