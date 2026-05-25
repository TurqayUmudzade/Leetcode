/**
 * 473. Matchsticks to Square
 *
 * You are given an integer array matchsticks where matchsticks[i] is the
 * length of the i-th matchstick. You want to use all the matchsticks to make
 * one square. You should not break any stick, but you can link them up, and
 * each matchstick must be used exactly one time.
 *
 * Return true if you can make this square and false otherwise.
 *
 * Example 1:
 *   Input:  matchsticks = [1, 1, 2, 2, 2]
 *   Output: true  (square with side 2: [1,1], [2], [2], [2])
 *
 * Example 2:
 *   Input:  matchsticks = [3, 3, 3, 3, 4]
 *   Output: false  (total = 16, not divisible evenly into 4 equal sides)
 *
 * Example 3:
 *   Input:  matchsticks = [5, 5, 5, 5]
 *   Output: true
 *
 * Constraints:
 *   1 <= matchsticks.length <= 15
 *   1 <= matchsticks[i] <= 10^8
 */

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {

};

// --- tests ---
console.assert(makesquare([1, 1, 2, 2, 2])    === true,  'Test 1 failed: [1,1,2,2,2] → true');
console.assert(makesquare([3, 3, 3, 3, 4])    === false, 'Test 2 failed: [3,3,3,3,4] → false');
console.assert(makesquare([5, 5, 5, 5])       === true,  'Test 3 failed: [5,5,5,5] → true');
console.assert(makesquare([1, 1, 1, 1, 1, 1]) === false, 'Test 4 failed: total 6, side 1.5 → false');

console.log('All tests passed for 473-matchsticks-to-square');
