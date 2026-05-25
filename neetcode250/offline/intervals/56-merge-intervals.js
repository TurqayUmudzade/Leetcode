/**
 * 56. Merge Intervals
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping
 * intervals and return an array of the non-overlapping intervals that cover all the
 * intervals in the input.
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
};

console.assert(
  JSON.stringify(merge([[1, 3], [2, 6], [8, 10], [15, 18]])) ===
  JSON.stringify([[1, 6], [8, 10], [15, 18]]),
  "Test 1 failed"
);
console.assert(
  JSON.stringify(merge([[1, 4], [4, 5]])) === JSON.stringify([[1, 5]]),
  "Test 2 failed"
);
console.assert(
  JSON.stringify(merge([[1, 4], [0, 4]])) === JSON.stringify([[0, 4]]),
  "Test 3 failed"
);
console.assert(
  JSON.stringify(merge([[1, 4], [2, 3]])) === JSON.stringify([[1, 4]]),
  "Test 4 failed"
);
