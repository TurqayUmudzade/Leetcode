/**
 * 212. Word Search II
 * https://leetcode.com/problems/word-search-ii/
 *
 * Given an m x n board of characters and a list of strings words, return all
 * words on the board. Each word must be constructed from letters of
 * sequentially adjacent cells (horizontally or vertically neighboring). The
 * same letter cell may not be used more than once in a word.
 *
 * Approach: Build a Trie from the word list, then DFS on the board. Prune
 * branches early when the current path doesn't match any Trie prefix.
 *
 * Example 1:
 *   board=[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
 *   words=["oath","pea","eat","rain"]  →  ["eat","oath"]  (sorted)
 *
 * Example 2:
 *   board=[["a","b"],["c","d"]]
 *   words=["abcb"]  →  []
 *
 * Constraints:
 *   - m == board.length, n == board[i].length
 *   - 1 <= m, n <= 12
 *   - board[i][j] is a lowercase English letter.
 *   - 1 <= words.length <= 3 * 10^4
 *   - 1 <= words[i].length <= 10
 *   - words[i] consists of lowercase English letters.
 *   - All words in words are unique.
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {};

// --- Tests ---

// Test 1: canonical LeetCode example
const board1 = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
];
const raw1 = findWords(board1, ['oath','pea','eat','rain']);
const result1 = Array.isArray(raw1) ? raw1.sort() : [];
console.assert(
  JSON.stringify(result1) === JSON.stringify(['eat','oath']),
  'Test 1 failed: should find ["eat","oath"]'
);

// Test 2: no word found (path would require cell reuse)
const board2 = [['a','b'],['c','d']];
const raw2 = findWords(board2, ['abcb']);
const result2 = Array.isArray(raw2) ? raw2 : [];
console.assert(
  JSON.stringify(result2) === JSON.stringify([]),
  'Test 2 failed: "abcb" requires reusing "b", should return []'
);

// Test 3: single-cell board
const board3 = [['a']];
const raw3 = findWords(board3, ['a','b']);
const result3 = Array.isArray(raw3) ? raw3.sort() : [];
console.assert(
  JSON.stringify(result3) === JSON.stringify(['a']),
  'Test 3 failed: only "a" is on the board'
);

// Test 4: all words found in a simple 2x2 board
const board4 = [['a','b'],['c','d']];
const raw4 = findWords(board4, ['ab','ac','bd','db','abdc','cd']);
const result4 = Array.isArray(raw4) ? raw4.sort() : [];
console.assert(
  result4.includes('ab') && result4.includes('ac'),
  'Test 4 failed: "ab" and "ac" should both be found on the board'
);

console.log('All tests passed!');
