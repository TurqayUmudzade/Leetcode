/**
 * 121. Best Time to Buy and Sell Stock
 *
 * You are given an array prices where prices[i] is the price of a given stock
 * on the i-th day. You want to maximize your profit by choosing a single day to
 * buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot
 * achieve any profit, return 0.
 *
 * Example 1:
 *   Input: prices = [7,1,5,3,6,4]
 *   Output: 5
 *   Explanation: Buy on day 2 (price=1), sell on day 5 (price=6), profit = 5.
 *
 * Example 2:
 *   Input: prices = [7,6,4,3,1]
 *   Output: 0
 *   Explanation: No profitable transaction is possible.
 *
 * Constraints:
 *   - 1 <= prices.length <= 10^5
 *   - 0 <= prices[i] <= 10^4
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

};

// Tests
console.assert(maxProfit([7,1,5,3,6,4]) === 5, "Test 1 failed");
console.assert(maxProfit([7,6,4,3,1]) === 0, "Test 2 failed");
console.assert(maxProfit([1,2]) === 1, "Test 3 failed");
console.assert(maxProfit([2,4,1]) === 2, "Test 4 failed");
console.log("All tests passed!");
