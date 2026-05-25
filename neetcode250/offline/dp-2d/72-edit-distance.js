/**
 * 72. Edit Distance
 *
 * Given two strings word1 and word2, return the minimum number of operations required
 * to convert word1 to word2. You have the following three operations permitted:
 *   - Insert a character
 *   - Delete a character
 *   - Replace a character
 *
 * Example:
 *   Input: word1 = "horse", word2 = "ros"        =>  Output: 3
 *     Explanation: horse→rorse (replace 'h'→'r'), rorse→rose (delete 'r'), rose→ros (delete 'e')
 *   Input: word1 = "intention", word2 = "execution"  =>  Output: 5
 *
 * Constraints:
 *   0 <= word1.length, word2.length <= 500
 *   word1 and word2 consist of lowercase English letters.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {

};

// Tests
console.assert(minDistance('horse', 'ros') === 3, 'Test 1 failed');
console.assert(minDistance('intention', 'execution') === 5, 'Test 2 failed');
console.assert(minDistance('', '') === 0, 'Test 3 failed');
console.assert(minDistance('abc', '') === 3, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
