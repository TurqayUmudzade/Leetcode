/**
 * 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 *
 * A trie (pronounced as "try") or prefix tree is a tree data structure used
 * to efficiently store and retrieve keys in a dataset of strings. There are
 * various applications of this data structure, such as autocomplete and
 * spellchecker.
 *
 * Implement the Trie class:
 *   - Trie(): Initializes the trie object.
 *   - insert(word): Inserts string word into the trie.
 *   - search(word): Returns true if word is in the trie, false otherwise.
 *   - startsWith(prefix): Returns true if there is a previously inserted word
 *     that has the prefix, false otherwise.
 *
 * Constraints:
 *   - 1 <= word.length, prefix.length <= 2000
 *   - word and prefix consist only of lowercase English letters.
 *   - At most 3 * 10^4 calls will be made to insert, search, and startsWith.
 */

var Trie = function() {};

/** @param {string} word @return {void} */
Trie.prototype.insert = function(word) {};

/** @param {string} word @return {boolean} */
Trie.prototype.search = function(word) {};

/** @param {string} prefix @return {boolean} */
Trie.prototype.startsWith = function(prefix) {};

// --- Tests ---

// Test 1: canonical LeetCode example
const t1 = new Trie();
t1.insert('apple');
console.assert(t1.search('apple') === true,   'Test 1a failed: "apple" should be found after insert');
console.assert(t1.search('app') === false,    'Test 1b failed: "app" should not be found (not fully inserted)');
console.assert(t1.startsWith('app') === true, 'Test 1c failed: "app" should be a valid prefix');
t1.insert('app');
console.assert(t1.search('app') === true,     'Test 1d failed: "app" should be found after insert');

// Test 2: startsWith for non-existent prefix
const t2 = new Trie();
t2.insert('hello');
console.assert(t2.startsWith('wor') === false, 'Test 2a failed: "wor" is not a prefix of any word');
console.assert(t2.startsWith('hell') === true, 'Test 2b failed: "hell" is a prefix of "hello"');

// Test 3: search returns false for missing word
const t3 = new Trie();
t3.insert('word');
console.assert(t3.search('wor') === false,  'Test 3a failed: "wor" was not inserted');
console.assert(t3.search('word') === true,  'Test 3b failed: "word" was inserted');

// Test 4: insert overlapping words
const t4 = new Trie();
t4.insert('do');
t4.insert('dog');
console.assert(t4.search('do') === true,     'Test 4a failed: "do" should be found');
console.assert(t4.search('dog') === true,    'Test 4b failed: "dog" should be found');
console.assert(t4.search('dot') === false,   'Test 4c failed: "dot" was not inserted');

console.log('All tests passed!');
