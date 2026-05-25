/**
 * 901. Online Stock Span
 *
 * Design an algorithm that collects daily price quotes for some asset and
 * returns the span of that asset's price for the current day.
 *
 * The span of the stock's price today is defined as the maximum number of
 * consecutive days (starting from today and going backwards) for which the
 * stock price was less than or equal to today's price.
 *
 * Implement the StockSpanner class:
 *   StockSpanner()   Initializes the object.
 *   next(price)      Returns the span of the stock's price for today.
 *
 * Approach: monotonic stack storing [price, span] pairs. When a new price
 * arrives, pop all pairs with price <= current price, accumulating their spans.
 *
 * Example call sequence:
 *   next(100) → 1
 *   next(80)  → 1
 *   next(60)  → 1
 *   next(70)  → 2
 *   next(60)  → 1
 *   next(75)  → 4
 *   next(85)  → 6
 *
 * Constraints:
 *   1 <= price <= 10^5
 *   At most 10^4 calls to next.
 */

class StockSpanner {
  constructor() {

  }

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {

  }
}

// --- Tests ---
const spanner = new StockSpanner();
console.assert(spanner.next(100) === 1, 'Test 1 failed');
console.assert(spanner.next(80)  === 1, 'Test 2 failed');
console.assert(spanner.next(60)  === 1, 'Test 3 failed');
console.assert(spanner.next(70)  === 2, 'Test 4 failed');
console.assert(spanner.next(60)  === 1, 'Test 5 failed');
console.assert(spanner.next(75)  === 4, 'Test 6 failed');
console.assert(spanner.next(85)  === 6, 'Test 7 failed');
console.log('All tests passed (or assertions above show failures)');
