/**
 * 84. Largest Rectangle in Histogram
 *
 * Given an array of integers `heights` representing the histogram's bar
 * heights where the width of each bar is 1, return the area of the largest
 * rectangle in the histogram.
 *
 * Approach: monotonic increasing stack of (index, height) pairs. When a bar
 * shorter than the stack top is encountered, pop and compute the rectangle
 * that extends from the popped bar's start to the current position. After
 * iterating, process any remaining bars in the stack extending to the end.
 *
 * Example:
 *   heights = [2,1,5,6,2,3]  → 10  (bars 5 and 6, width 2)
 *   heights = [2,4]           → 4
 *   heights = [1]             → 1
 *   heights = [6,7,5,2,4,5,9,3] → 16
 *
 * Constraints:
 *   1 <= heights.length <= 10^5
 *   0 <= heights[i] <= 10^4
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

};

// --- Tests ---
console.assert(largestRectangleArea([2,1,5,6,2,3])     === 10, 'Test 1 failed');
console.assert(largestRectangleArea([2,4])              === 4,  'Test 2 failed');
console.assert(largestRectangleArea([1])                === 1,  'Test 3 failed');
console.assert(largestRectangleArea([6,7,5,2,4,5,9,3]) === 16, 'Test 4 failed');
console.log('All tests passed (or assertions above show failures)');
