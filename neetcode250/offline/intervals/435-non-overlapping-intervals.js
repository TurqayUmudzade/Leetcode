/**
 * 435. Non-overlapping Intervals
 *
 * Given an array of intervals, return the minimum number of intervals you need to remove
 * to make the rest of the intervals non-overlapping.
 * Two intervals [a,b] and [c,d] do not overlap if b <= c or d <= a.
 *
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
};

console.assert(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]) === 1, "Test 1 failed");
console.assert(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]) === 2, "Test 2 failed");
console.assert(eraseOverlapIntervals([[1, 2], [2, 3]]) === 0, "Test 3 failed");
console.assert(eraseOverlapIntervals([[1, 4], [2, 3], [3, 4]]) === 1, "Test 4 failed");
