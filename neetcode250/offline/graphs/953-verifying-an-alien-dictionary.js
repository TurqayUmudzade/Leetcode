/**
 * 953. Verifying an Alien Dictionary
 *
 * In an alien language, surprisingly, they also use English lowercase letters,
 * but possibly in a different order. The order of the alphabet is some permutation
 * of lowercase letters.
 *
 * Given a sequence of words written in the alien language, and the order of the
 * alphabet, return true if and only if the given words are sorted lexicographically
 * in this alien language.
 *
 * Example 1:
 *   words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz" => true
 *
 * Example 2:
 *   words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz" => false
 *
 * Example 3:
 *   words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz" => false
 *
 * Constraints:
 *   - 1 <= words.length <= 100
 *   - 1 <= words[i].length <= 20
 *   - order.length == 26
 *   - All characters in words[i] and order are English lowercase letters.
 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {

};

// Tests
console.assert(
  isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz") === true,
  'Test 1 failed: expected true'
);

console.assert(
  isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz") === false,
  'Test 2 failed: expected false'
);

console.assert(
  isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz") === false,
  'Test 3 failed: expected false'
);

console.assert(
  isAlienSorted(["z","x"], "zxabcdefghijklmnopqrstuvwy") === true,
  'Test 4 failed: expected true'
);

console.log('All tests passed for 953-verifying-an-alien-dictionary');
