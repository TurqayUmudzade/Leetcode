/**
 * 1851. Minimum Interval to Include Each Query
 *
 * You are given a 2D integer array intervals where intervals[i] = [li, ri] represents
 * the interval [li, ri] (inclusive), and a 1D integer array queries.
 * For each query qi, find the size (ri - li + 1) of the smallest interval [li, ri] such
 * that li <= qi <= ri. If no such interval exists, the answer is -1.
 * Return an integer array containing the answers to the queries.
 *
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
};

console.assert(
  JSON.stringify(minInterval([[1, 4], [2, 4], [3, 6], [4, 4]], [2, 3, 4, 5])) ===
  JSON.stringify([3, 3, 1, 4]),
  "Test 1 failed"
);
console.assert(
  JSON.stringify(minInterval([[2, 3], [2, 5], [1, 8], [20, 25]], [2, 19, 5, 22])) ===
  JSON.stringify([2, -1, 4, 6]),
  "Test 2 failed"
);
console.assert(
  JSON.stringify(minInterval([[1, 3]], [2])) === JSON.stringify([3]),
  "Test 3 failed"
);
console.assert(
  JSON.stringify(minInterval([[1, 2]], [10])) === JSON.stringify([-1]),
  "Test 4 failed"
);
