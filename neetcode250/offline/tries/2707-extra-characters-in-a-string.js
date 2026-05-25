/**
 * 2707. Extra Characters in a String
 * https://leetcode.com/problems/extra-characters-in-a-string/
 *
 * You are given a 0-indexed string s and a dictionary of words. You can split
 * s into several non-overlapping substrings. The goal is to minimize the
 * number of extra characters left over if you split s optimally.
 *
 * Return the minimum number of extra characters left over if you split the
 * string optimally.
 *
 * Approach: DP where dp[i] = min extra chars in s[0..i-1].
 *   - dp[0] = 0 (empty prefix)
 *   - For each position i, either skip s[i] (dp[i+1] = dp[i] + 1) or match
 *     any dictionary word ending at i.
 *
 * Example 1: s="leetscode", dictionary=["leet","code","leetcode"]  →  1
 *   ("leet" + "s" (extra) + "code", or "leet" + "scode" where "scode" not in dict → min 1)
 * Example 2: s="sayhelloworld", dictionary=["hello","world"]  →  3
 *   ("say"(3 extra) + "hello" + "world")
 *
 * Constraints:
 *   - 1 <= s.length <= 50
 *   - 1 <= dictionary.length <= 50
 *   - 1 <= dictionary[i].length <= 50
 *   - s and dictionary[i] consist of lowercase English letters only.
 *   - dictionary contains distinct words.
 */

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {};

// --- Tests ---
console.assert(
  minExtraChar('leetscode', ['leet', 'code', 'leetcode']) === 1,
  'Test 1 failed: "leetscode" with dict should have 1 extra char ("s")'
);

console.assert(
  minExtraChar('sayhelloworld', ['hello', 'world']) === 3,
  'Test 2 failed: "sayhelloworld" should have 3 extra chars ("say")'
);

console.assert(
  minExtraChar('abcde', ['a', 'b', 'c', 'd', 'e']) === 0,
  'Test 3 failed: each character is in the dictionary so 0 extras expected'
);

console.assert(
  minExtraChar('xyz', ['ab', 'cd']) === 3,
  'Test 4 failed: no dictionary word matches, all 3 chars are extra'
);

console.log('All tests passed!');
