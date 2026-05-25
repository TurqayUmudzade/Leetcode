/**
 * 2013. Detect Squares
 *
 * Design an object that:
 *   - add(point): adds a point (allowing duplicates — each call increments the
 *     count for that coordinate).
 *   - count(point): given a query point, returns the number of ways to choose
 *     3 other points from the data structure such that the 4 points form an
 *     axis-aligned square (sides parallel to the axes). Squares must have
 *     positive area. Each distinct multiset of 4 points counts separately
 *     (e.g. if a required point was added twice, it contributes 2 squares).
 *
 * Approach: for each query point (px, py), iterate over all distinct x
 * coordinates of stored points. For each candidate diagonal x (cx ≠ px),
 * check if points (px, cy) and (cx, py) and (cx, cy) exist (where cy = px +
 * (cx - px) giving a square). The side length must be |cx - px|.
 *
 * Examples:
 *   add([3,10]), add([11,2]), add([3,2])
 *   count([11,10]) → 1
 *   count([14,8])  → 0
 *   add([11,2])
 *   count([11,10]) → 2
 *
 * @constructor
 */
var DetectSquares = function() {

};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {

};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {

};

// Tests
const ds = new DetectSquares();
ds.add([3, 10]);
ds.add([11, 2]);
ds.add([3, 2]);
console.assert(ds.count([11, 10]) === 1, "Test 1 failed");
console.assert(ds.count([14, 8]) === 0, "Test 2 failed");
ds.add([11, 2]);
console.assert(ds.count([11, 10]) === 2, "Test 3 failed");

const ds2 = new DetectSquares();
ds2.add([0, 0]);
ds2.add([2, 0]);
ds2.add([0, 2]);
ds2.add([2, 2]);
console.assert(ds2.count([0, 0]) === 1, "Test 4 failed");
