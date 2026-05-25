/**
 * 57. Insert Interval
 *
 * You are given an array of non-overlapping intervals sorted by their start times, and a
 * new interval to insert. Insert newInterval into intervals such that intervals is still
 * sorted and non-overlapping (merge if necessary). Return the resulting intervals array.
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
};

console.assert(
  JSON.stringify(insert([[1, 3], [6, 9]], [2, 5])) === JSON.stringify([[1, 5], [6, 9]]),
  "Test 1 failed"
);
console.assert(
  JSON.stringify(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])) ===
  JSON.stringify([[1, 2], [3, 10], [12, 16]]),
  "Test 2 failed"
);
console.assert(
  JSON.stringify(insert([], [5, 7])) === JSON.stringify([[5, 7]]),
  "Test 3 failed"
);
console.assert(
  JSON.stringify(insert([[1, 5]], [2, 3])) === JSON.stringify([[1, 5]]),
  "Test 4 failed"
);
