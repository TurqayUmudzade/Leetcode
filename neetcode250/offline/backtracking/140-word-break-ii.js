/**
 * 140. Word Break II
 *
 * Given a string s and a dictionary of strings wordDict, add spaces in s to
 * construct a sentence where each word is a valid dictionary word. Return all
 * such possible sentences in any order.
 *
 * Note: The same word in the dictionary may be reused multiple times in the
 * segmentation.
 *
 * Example 1:
 *   Input:  s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
 *   Output: ["cats and dog","cat sand dog"]
 *
 * Example 2:
 *   Input:  s = "pineapplepenapple",
 *           wordDict = ["apple","pen","applepen","pine","pineapple"]
 *   Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
 *   (3 sentences)
 *
 * Example 3:
 *   Input:  s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
 *   Output: []
 *
 * Constraints:
 *   1 <= s.length <= 20
 *   1 <= wordDict.length <= 1000
 *   1 <= wordDict[i].length <= 10
 *   s and wordDict[i] consist of only lowercase English letters.
 *   All strings in wordDict are unique.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {

};

// --- tests ---
const r1 = wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']);
console.assert(
    JSON.stringify(r1.slice().sort()) ===
    JSON.stringify(['cat sand dog', 'cats and dog'].sort()),
    'Test 1 failed'
);

const r2 = wordBreak('pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple']);
console.assert(r2.length === 3, `Test 2 failed: expected 3 sentences, got ${r2 && r2.length}`);

const r3 = wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']);
console.assert(Array.isArray(r3) && r3.length === 0, 'Test 3 failed: no valid segmentation → []');

const r4 = wordBreak('aaaa', ['a', 'aa', 'aaa', 'aaaa']);
console.assert(r4.length > 0, 'Test 4 failed: multiple segmentations should exist');

console.log('All tests passed for 140-word-break-ii');
