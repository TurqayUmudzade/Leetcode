/**
 * 211. Design Add and Search Words Data Structure
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 *
 * Design a data structure that supports adding new words and finding if a
 * string matches any previously added string.
 *
 * Implement WordDictionary:
 *   - WordDictionary(): Initializes the object.
 *   - addWord(word): Adds word to the data structure.
 *   - search(word): Returns true if there is any string in the data structure
 *     that matches word. word may contain dots '.' where a dot can match any
 *     letter.
 *
 * Constraints:
 *   - 1 <= word.length <= 25
 *   - word in addWord consists of lowercase English letters.
 *   - word in search consists of '.' or lowercase English letters.
 *   - There will be at most 2 dots in word for search queries.
 *   - At most 10^4 calls will be made to addWord and search.
 */

var WordDictionary = function() {};

/** @param {string} word @return {void} */
WordDictionary.prototype.addWord = function(word) {};

/** @param {string} word @return {boolean} */
WordDictionary.prototype.search = function(word) {};

// --- Tests ---

// Test 1: canonical example
const wd = new WordDictionary();
wd.addWord('bad');
wd.addWord('dad');
wd.addWord('mad');
console.assert(wd.search('pad') === false, 'Test 1a failed: "pad" was not added');
console.assert(wd.search('bad') === true,  'Test 1b failed: "bad" was added');
console.assert(wd.search('.ad') === true,  'Test 1c failed: ".ad" should match bad/dad/mad');
console.assert(wd.search('b..') === true,  'Test 1d failed: "b.." should match "bad"');

// Test 2: all-dots pattern
const wd2 = new WordDictionary();
wd2.addWord('cat');
console.assert(wd2.search('...') === true,  'Test 2a failed: "..." should match any 3-letter word');
console.assert(wd2.search('....') === false,'Test 2b failed: "...." should not match "cat" (wrong length)');

// Test 3: dot at start only
const wd3 = new WordDictionary();
wd3.addWord('run');
console.assert(wd3.search('.un') === true,  'Test 3a failed: ".un" should match "run"');
console.assert(wd3.search('.an') === false, 'Test 3b failed: ".an" should not match "run"');

// Test 4: overlapping words with wildcard
const wd4 = new WordDictionary();
wd4.addWord('at');
wd4.addWord('and');
wd4.addWord('an');
console.assert(wd4.search('a.') === true,   'Test 4a failed: "a." should match "at" or "an"');
console.assert(wd4.search('a..') === true,  'Test 4b failed: "a.." should match "and"');
console.assert(wd4.search('...d') === false,'Test 4c failed: "...d" (4 chars) should not match "and" (3 chars)');

console.log('All tests passed!');
