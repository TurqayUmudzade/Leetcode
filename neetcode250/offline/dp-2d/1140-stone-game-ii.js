/**
 * 1140. Stone Game II
 *
 * Alice and Bob continue their games with piles of stones. There are a number of piles
 * arranged in a row, and each pile has a positive integer number of stones piles[i].
 * The objective is to end with the most stones.
 *
 * Alice and Bob take turns, with Alice starting first. Initially, M = 1.
 * On each player's turn, that player can take all the stones in the first X remaining
 * piles where 1 <= X <= 2M. Then, M = max(M, X).
 * The game continues until all piles have been taken.
 *
 * Return the maximum number of stones Alice can get.
 *
 * Example:
 *   Input: piles = [2,7,9,4,4]  =>  Output: 10
 *     Explanation: Alice takes 1 pile (2 stones), M becomes 1. Bob takes 2 piles (7+9=16). Alice takes 2 piles (4+4=8). Total Alice = 2+8=10.
 *   Input: piles = [1,2,3,4,5,100]  =>  Output: 104
 *
 * Constraints:
 *   1 <= piles.length <= 100
 *   1 <= piles[i] <= 10^4
 */

/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {

};

// Tests
console.assert(stoneGameII([2,7,9,4,4]) === 10, 'Test 1 failed');
console.assert(stoneGameII([1,2,3,4,5,100]) === 104, 'Test 2 failed');
console.assert(stoneGameII([2,7,9,4,4]) === 10, 'Test 3 failed');
console.assert(stoneGameII([1]) === 1, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
