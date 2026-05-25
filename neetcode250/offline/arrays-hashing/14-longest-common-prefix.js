/**
 * 14. Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings. If there is no common prefix, return an empty string "".
 *
 * Examples:
 *   longestCommonPrefix(["flower","flow","flight"]) => "fl"
 *   longestCommonPrefix(["dog","racecar","car"])    => ""
 *
 * Constraints:
 *   - 1 <= strs.length <= 200
 *   - 0 <= strs[i].length <= 200
 *   - strs[i] consists of only lowercase English letters
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
};

// Tests
console.assert(
  longestCommonPrefix(["flower", "flow", "flight"]) === "fl",
  "Test 1 failed: ['flower','flow','flight'] => 'fl'"
);
console.assert(
  longestCommonPrefix(["dog", "racecar", "car"]) === "",
  "Test 2 failed: ['dog','racecar','car'] => ''"
);
console.assert(
  longestCommonPrefix(["interview", "interact", "interface"]) === "inter",
  "Test 3 failed: ['interview','interact','interface'] => 'inter'"
);
console.assert(
  longestCommonPrefix(["abc"]) === "abc",
  "Test 4 failed: ['abc'] => 'abc'"
);

console.log("All tests passed for 14-longest-common-prefix");
