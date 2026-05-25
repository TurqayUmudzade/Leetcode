/**
 * 271. Encode and Decode Strings
 *
 * Design an algorithm to encode a list of strings to a single string. The
 * encoded string is then sent over the network and is decoded back to the
 * original list of strings.
 *
 * Implement encode and decode:
 *   - encode(strs): Encodes a list of strings to a single string.
 *   - decode(s):    Decodes a single string to a list of strings.
 *
 * Examples:
 *   encode(["Hello","World"]) => some encoded string
 *   decode(encode(["Hello","World"])) => ["Hello","World"]
 *   encode([""])   => some encoded string
 *   decode(encode([""])) => [""]
 *
 * Constraints:
 *   - 1 <= strs.length <= 200
 *   - 0 <= strs[i].length <= 200
 *   - strs[i] contains any possible characters out of 256 valid ASCII chars.
 *
 * Hint: Use length-prefixed encoding: "<length>#<string>" for each string.
 * This avoids issues with delimiter characters appearing inside strings.
 */

/**
 * Encodes a list of strings to a single string.
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
};

/**
 * Decodes a single string to a list of strings.
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
};

// Tests
console.assert(
  JSON.stringify(decode(encode(["Hello", "World"]))) === JSON.stringify(["Hello", "World"]),
  "Test 1 failed: ['Hello','World'] round-trip"
);
console.assert(
  JSON.stringify(decode(encode([""]))) === JSON.stringify([""]),
  "Test 2 failed: [''] round-trip"
);
console.assert(
  JSON.stringify(decode(encode(["a", "b", "c"]))) === JSON.stringify(["a", "b", "c"]),
  "Test 3 failed: ['a','b','c'] round-trip"
);
console.assert(
  JSON.stringify(decode(encode(["hello#world", "foo#bar"]))) ===
    JSON.stringify(["hello#world", "foo#bar"]),
  "Test 4 failed: strings containing '#' should round-trip correctly"
);

console.log("All tests passed for 271-encode-and-decode-strings");
