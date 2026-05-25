/**
 * 139. Word Break
 *
 * Given a string s and a dictionary of strings wordDict, return true if s can
 * be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times.
 *
 * Example 1: s = "leetcode",     wordDict = ["leet","code"]          → true
 * Example 2: s = "applepenapple", wordDict = ["apple","pen"]         → true
 * Example 3: s = "catsandog",    wordDict = ["cats","dog","sand","and","cat"] → false
 *
 * Constraints:
 *   1 <= s.length <= 300
 *   1 <= wordDict.length <= 1000
 *   1 <= wordDict[i].length <= 20
 *   s and wordDict[i] consist of only lowercase English letters.
 *   All strings in wordDict are unique.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {};

// Tests
console.assert(wordBreak("leetcode", ["leet", "code"]) === true, "Test 1 failed");
console.assert(wordBreak("applepenapple", ["apple", "pen"]) === true, "Test 2 failed");
console.assert(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]) === false, "Test 3 failed");
console.assert(wordBreak("cars", ["car", "ca", "rs"]) === true, "Test 4 failed");
console.log("All tests passed for 139. Word Break");
