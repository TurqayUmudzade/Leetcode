/**
 * 131. Palindrome Partitioning
 *
 * Given a string s, partition s such that every substring of the partition
 * is a palindrome. Return all possible palindrome partitioning of s.
 *
 * Example 1:
 *   Input:  s = "aab"
 *   Output: [["a","a","b"],["aa","b"]]
 *
 * Example 2:
 *   Input:  s = "a"
 *   Output: [["a"]]
 *
 * Constraints:
 *   1 <= s.length <= 16
 *   s contains only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

};

// --- helpers ---
const sortPartitions = arr =>
    JSON.stringify(
        arr.map(a => a.slice())
           .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))
    );

// --- tests ---
const expected1 = [['a', 'a', 'b'], ['aa', 'b']];
console.assert(
    sortPartitions(partition('aab')) === sortPartitions(expected1),
    'Test 1 failed'
);

const expected2 = [['a']];
console.assert(
    sortPartitions(partition('a')) === sortPartitions(expected2),
    'Test 2 failed'
);

const r3 = partition('aa');
const expected3 = [['a', 'a'], ['aa']];
console.assert(
    sortPartitions(r3) === sortPartitions(expected3),
    'Test 3 failed'
);

const r4 = partition('aba');
console.assert(
    r4.some(p => JSON.stringify(p) === JSON.stringify(['aba'])),
    'Test 4 failed: "aba" is itself a palindrome partition'
);

console.log('All tests passed for 131-palindrome-partitioning');
