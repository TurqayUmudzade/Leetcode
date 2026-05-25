/**
 * 394. Decode String
 *
 * Given an encoded string, return its decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside
 * the square brackets is repeated exactly k times. k is a positive integer.
 *
 * You may assume that the input string is always valid; there are no extra
 * white spaces, square brackets are well-formed, and digits only appear as
 * part of the repeat number k (i.e., there are no digits inside encoded_string
 * itself).
 *
 * Approach: use a stack. When '[' is encountered, push (currentString, k) and
 * reset. When ']' is encountered, pop and append currentString repeated k times.
 *
 * Example:
 *   "3[a]2[bc]"      → "aaabcbc"
 *   "3[a2[c]]"       → "accaccacc"
 *   "2[abc]3[cd]ef"  → "abcabccdcdcdef"
 *
 * Constraints:
 *   1 <= s.length <= 30
 *   s consists of lowercase English letters, digits, and square brackets.
 *   s is guaranteed to be a valid input.
 *   All integers are in the range [1, 300].
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

};

// --- Tests ---
console.assert(decodeString("3[a]2[bc]")     === "aaabcbc",        'Test 1 failed');
console.assert(decodeString("3[a2[c]]")      === "accaccacc",      'Test 2 failed');
console.assert(decodeString("2[abc]3[cd]ef") === "abcabccdcdcdef", 'Test 3 failed');
console.assert(decodeString("1[a]")          === "a",              'Test 4 failed');
console.log('All tests passed (or assertions above show failures)');
