/**
 * 49. Group Anagrams
 *
 * Given an array of strings strs, group the anagrams together. You can return
 * the answer in any order. An anagram is a word formed by rearranging all the
 * letters of another word, using each letter exactly once.
 *
 * Examples:
 *   groupAnagrams(["eat","tea","tan","ate","nat","bat"])
 *     => [["bat"],["nat","tan"],["ate","eat","tea"]] (any order)
 *   groupAnagrams([""]) => [[""]]
 *   groupAnagrams(["a"]) => [["a"]]
 *
 * Constraints:
 *   - 1 <= strs.length <= 10^4
 *   - 0 <= strs[i].length <= 100
 *   - strs[i] consists of lowercase English letters
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
};

// Helper: compare grouped anagram results regardless of inner/outer order
function sameGroups(a, b) {
  if (a.length !== b.length) return false;
  const normalize = arr => arr.map(g => [...g].sort().join(",")).sort().join("|");
  return normalize(a) === normalize(b);
}

// Tests
console.assert(
  sameGroups(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
    [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
  ),
  "Test 1 failed: groupAnagrams(['eat','tea','tan','ate','nat','bat'])"
);
console.assert(
  sameGroups(groupAnagrams([""]), [[""]]),
  "Test 2 failed: groupAnagrams(['']) => [['']]"
);
console.assert(
  sameGroups(groupAnagrams(["a"]), [["a"]]),
  "Test 3 failed: groupAnagrams(['a']) => [['a']]"
);
console.assert(
  sameGroups(groupAnagrams(["ab", "ba", "cd"]), [["ab", "ba"], ["cd"]]),
  "Test 4 failed: groupAnagrams(['ab','ba','cd'])"
);

console.log("All tests passed for 49-group-anagrams");
