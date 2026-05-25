/**
 * 322. Coin Change
 *
 * You are given an integer array coins representing coins of different
 * denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins needed to make up that amount.
 * If that amount cannot be made up by any combination of the coins, return -1.
 * You may assume you have an infinite number of each kind of coin.
 *
 * Example 1: coins = [1, 2, 5], amount = 11  → 3  (5 + 5 + 1)
 * Example 2: coins = [2],       amount = 3   → -1
 * Example 3: coins = [1],       amount = 0   → 0
 *
 * Constraints:
 *   1 <= coins.length <= 12
 *   1 <= coins[i] <= 2^31 - 1
 *   0 <= amount <= 10^4
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {};

// Tests
console.assert(coinChange([1, 2, 5], 11) === 3, "Test 1 failed");
console.assert(coinChange([2], 3) === -1, "Test 2 failed");
console.assert(coinChange([1], 0) === 0, "Test 3 failed");
console.assert(coinChange([1, 5, 11], 15) === 3, "Test 4 failed");
console.log("All tests passed for 322. Coin Change");
