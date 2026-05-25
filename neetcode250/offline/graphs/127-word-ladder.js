/**
 * 127. Word Ladder
 *
 * A transformation sequence from word beginWord to word endWord using a dictionary
 * wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
 *
 *   - Every adjacent pair of words differs by a single letter.
 *   - Every si for 1 <= i <= k is in wordList. Note that beginWord does not need
 *     to be in wordList.
 *   - sk == endWord
 *
 * Given two words, beginWord and endWord, and a dictionary wordList, return the
 * number of words in the shortest transformation sequence from beginWord to endWord,
 * or 0 if no such sequence exists.
 *
 * Example 1:
 *   beginWord = "hit", endWord = "cog",
 *   wordList = ["hot","dot","dog","lot","log","cog"] => 5
 *   (hit -> hot -> dot -> dog -> cog)
 *
 * Example 2:
 *   beginWord = "hit", endWord = "cog",
 *   wordList = ["hot","dot","dog","lot","log"] => 0
 *   (endWord not in wordList)
 *
 * Constraints:
 *   - 1 <= beginWord.length <= 10
 *   - endWord.length == beginWord.length
 *   - 1 <= wordList.length <= 5000
 *   - wordList[i].length == beginWord.length
 *   - beginWord, endWord, and wordList[i] consist of lowercase English letters.
 *   - beginWord != endWord
 *   - All the words in wordList are unique.
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {

};

// Tests
console.assert(
  ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]) === 5,
  'Test 1 failed: expected 5'
);

console.assert(
  ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]) === 0,
  'Test 2 failed: endWord not in list, expected 0'
);

console.assert(
  ladderLength("a", "c", ["a","b","c"]) === 2,
  'Test 3 failed: expected 2'
);

console.assert(
  ladderLength("hot", "dog", ["hot","dog","dot"]) === 3,
  'Test 4 failed: expected 3 (hot->dot->dog)'
);

console.log('All tests passed for 127-word-ladder');
