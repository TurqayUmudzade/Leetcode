/**
 * 122. Best Time to Buy and Sell Stock II
 *
 * You are given an integer array `prices` where `prices[i]` is the price of a
 * given stock on the i-th day. On each day you may decide to buy and/or sell
 * the stock. You can only hold at most one share of the stock at any time.
 * However, you can buy it then immediately sell it on the same day.
 *
 * Find and return the maximum profit you can achieve.
 *
 * Multiple transactions are allowed (buy then sell, no overlapping positions).
 *
 * Example:
 *   prices = [7,1,5,3,6,4] → 7  (buy@1 sell@5 = +4, buy@3 sell@6 = +3)
 *   prices = [1,2,3,4,5]   → 4  (buy@1 sell@5)
 *   prices = [7,6,4,3,1]   → 0  (no profitable trade)
 *
 * Constraints:
 *   1 <= prices.length <= 3 * 10^4
 *   0 <= prices[i] <= 10^4
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

};

// --- Tests ---
console.assert(maxProfit([7,1,5,3,6,4]) === 7, 'Test 1 failed');
console.assert(maxProfit([1,2,3,4,5])   === 4, 'Test 2 failed');
console.assert(maxProfit([7,6,4,3,1])   === 0, 'Test 3 failed');
console.assert(maxProfit([1])           === 0, 'Test 4 failed');
console.log('All tests passed (or assertions above show failures)');
