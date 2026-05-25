/**
 * 877. Stone Game
 *
 * Alice and Bob play a game with piles of stones. There are an even number of piles
 * arranged in a row, and each pile has a positive integer number of stones.
 * The objective of the game is to end with the most stones. The total number of stones
 * across all piles is odd, so there are no ties.
 *
 * Alice and Bob take turns, with Alice starting first. Each turn, a player takes the
 * entire pile of stones from either the beginning or the end of the row. The game
 * continues until there are no more piles left, at which point the person with the
 * most stones wins.
 *
 * Alice always wins (she picks first and can always choose optimally). Return true.
 *
 * Example:
 *   Input: piles = [5,3,4,5]  =>  Output: true
 *     Explanation: Alice starts. She can win regardless of Bob's moves.
 *   Input: piles = [3,7,2,3]  =>  Output: true
 *
 * Constraints:
 *   2 <= piles.length <= 500
 *   piles.length is even
 *   1 <= piles[i] <= 500
 *   sum(piles[i]) is odd
 */

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {

};

// Tests
console.assert(stoneGame([5,3,4,5]) === true, 'Test 1 failed');
console.assert(stoneGame([3,7,2,3]) === true, 'Test 2 failed');
console.assert(stoneGame([1,5,2,9]) === true, 'Test 3 failed');
console.assert(stoneGame([2,1]) === true, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
