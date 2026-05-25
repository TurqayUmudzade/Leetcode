/**
 * 1049. Last Stone Weight II
 *
 * You are given an array of integers stones where stones[i] is the weight of the
 * i-th stone. We play a game with the stones. On each turn, we choose any two stones
 * and smash them together. If they are equal, both are destroyed. Otherwise the
 * smaller one is destroyed and the larger one loses the smaller one's weight.
 *
 * The goal is to minimize the weight of the last remaining stone (or 0 if all are gone).
 * This is equivalent to partitioning stones into two groups and minimizing the
 * absolute difference of their sums.
 *
 * Example:
 *   Input: stones = [2,7,4,1,8,1]  =>  Output: 1
 *   Input: stones = [31,26,33,21,40]  =>  Output: 5
 *
 * Constraints:
 *   1 <= stones.length <= 30
 *   1 <= stones[i] <= 100
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {

};

// Tests
console.assert(lastStoneWeightII([2,7,4,1,8,1]) === 1, 'Test 1 failed');
console.assert(lastStoneWeightII([31,26,33,21,40]) === 5, 'Test 2 failed');
console.assert(lastStoneWeightII([1]) === 1, 'Test 3 failed');
console.assert(lastStoneWeightII([2,2]) === 0, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
