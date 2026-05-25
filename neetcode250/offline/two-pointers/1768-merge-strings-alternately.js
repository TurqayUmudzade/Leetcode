/**
 * 1768. Merge Strings Alternately
 *
 * You are given two strings word1 and word2. Merge the strings by adding
 * letters in alternating order, starting with word1. If a string is longer
 * than the other, append the additional letters onto the end of the merged
 * string.
 *
 * Return the merged string.
 *
 * Examples:
 *   Input:  word1 = "abc", word2 = "pqr"
 *   Output: "apbqcr"
 *   Explanation: word1: a b c, word2: p q r, merged: a p b q c r
 *
 *   Input:  word1 = "ab", word2 = "pqrs"
 *   Output: "apbqrs"
 *   Explanation: word1: a b, word2: p q r s, merged: a p b q r s
 *
 *   Input:  word1 = "abcd", word2 = "pq"
 *   Output: "apbqcd"
 *
 * Constraints:
 *   - 1 <= word1.length, word2.length <= 100
 *   - word1 and word2 consist of lowercase English letters
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
};

// Tests
console.assert(mergeAlternately("abc", "pqr") === "apbqcr", "Test 1 failed");
console.assert(mergeAlternately("ab", "pqrs") === "apbqrs", "Test 2 failed");
console.assert(mergeAlternately("abcd", "pq") === "apbqcd", "Test 3 failed");
console.assert(mergeAlternately("a", "b") === "ab", "Test 4 failed");

console.log("All tests passed for 1768-merge-strings-alternately");
