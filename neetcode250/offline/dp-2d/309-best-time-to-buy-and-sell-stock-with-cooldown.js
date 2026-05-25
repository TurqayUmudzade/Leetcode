/**
 * 309. Best Time to Buy and Sell Stock with Cooldown
 *
 * You are given an array prices where prices[i] is the price of a given stock on
 * the i-th day. Find the maximum profit you can achieve. You may complete as many
 * transactions as you like with the following restrictions:
 *   - After you sell your stock, you cannot buy stock on the next day (cooldown).
 *   - You may not engage in multiple transactions simultaneously (must sell before buying again).
 *
 * Example:
 *   Input: prices = [1,2,3,0,2]  =>  Output: 3
 *     Explanation: Buy day 0, sell day 1 (profit 1), cooldown day 2, buy day 3, sell day 4 (profit 2)
 *   Input: prices = [1]          =>  Output: 0
 *
 * Constraints:
 *   1 <= prices.length <= 5000
 *   0 <= prices[i] <= 1000
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

};

// Tests
console.assert(maxProfit([1,2,3,0,2]) === 3, 'Test 1 failed');
console.assert(maxProfit([1]) === 0, 'Test 2 failed');
console.assert(maxProfit([2,1]) === 0, 'Test 3 failed');
console.assert(maxProfit([6,1,3,2,4,7]) === 6, 'Test 4 failed');
console.log('All tests passed (or assertion errors shown above)');
