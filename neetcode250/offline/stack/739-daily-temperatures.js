/**
 * 739. Daily Temperatures
 *
 * Given an array of integers `temperatures` representing the daily
 * temperatures, return an array `answer` such that `answer[i]` is the number
 * of days you have to wait after the i-th day to get a warmer temperature.
 * If there is no future day for which this is possible, keep `answer[i] == 0`.
 *
 * Approach: monotonic decreasing stack of indices. When a warmer temperature
 * is found, pop indices and record the distance.
 *
 * Example:
 *   temperatures = [73,74,75,71,69,72,76,73]
 *     → [1,1,4,2,1,1,0,0]
 *   temperatures = [30,40,50,60] → [1,1,1,0]
 *   temperatures = [30,60,90]    → [1,1,0]
 *
 * Constraints:
 *   1 <= temperatures.length <= 10^5
 *   30 <= temperatures[i] <= 100
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

};

// --- Tests ---
console.assert(
  JSON.stringify(dailyTemperatures([73,74,75,71,69,72,76,73])) === JSON.stringify([1,1,4,2,1,1,0,0]),
  'Test 1 failed'
);
console.assert(
  JSON.stringify(dailyTemperatures([30,40,50,60])) === JSON.stringify([1,1,1,0]),
  'Test 2 failed'
);
console.assert(
  JSON.stringify(dailyTemperatures([30,60,90])) === JSON.stringify([1,1,0]),
  'Test 3 failed'
);
console.assert(
  JSON.stringify(dailyTemperatures([90])) === JSON.stringify([0]),
  'Test 4 failed'
);
console.log('All tests passed (or assertions above show failures)');
