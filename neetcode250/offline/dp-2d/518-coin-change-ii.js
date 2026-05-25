/**
 * 518. Coin Change II
 *
 * You are given an integer array coins representing coins of different denominations
 * and an integer amount representing a total amount of money. Return the number of
 * combinations (not permutations) that make up that amount. If the amount cannot be
 * made up by any combination of the coins, return 0.
 * You may assume you have an infinite number of each kind of coin.
 *
 * Example:
 *   Input: amount = 5, coins = [1,2,5]  =>  Output: 4
 *     Explanation: 5=5, 5=2+2+1, 5=2+1+1+1, 5=1+1+1+1+1
 *   Input: amount = 3, coins = [2]      =>  Output: 0
 *   Input: amount = 10, coins = [10]    =>  Output: 1
 *
 * Constraints:
 *   1 <= coins.length <= 300
 *   1 <= coins[i] <= 5000
 *   0 <= amount <= 5000
 */

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {

};

// Tests
console.assert(change(5, [1,2,5]) === 4, 'Test 1 failed');
console.assert(change(3, [2]) === 0, 'Test 2 failed');
console.assert(change(10, [10]) === 1, 'Test 3 failed');
console.assert(change(0, [1,2,3]) === 1, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
