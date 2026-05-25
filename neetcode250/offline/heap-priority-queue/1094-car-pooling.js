/**
 * 1094. Car Pooling
 *
 * There is a car with `capacity` empty seats. The vehicle only drives east
 * (i.e., it cannot turn around and drive west).
 *
 * You are given the integer `capacity` and an array `trips` where
 * trips[i] = [numPassengers_i, from_i, to_i] indicates that the i-th trip
 * has `numPassengers_i` passengers and the route goes from `from_i` to `to_i`.
 *
 * Return true if it is possible to pick up and drop off all passengers for
 * all the given trips, or false otherwise.
 *
 * Approach: difference array (or sort events). Record +passengers at from,
 * -passengers at to, scan cumulative sum.
 *
 * Example:
 *   trips = [[2,1,5],[3,3,7]], capacity = 4  → false  (5 passengers at stop 3)
 *   trips = [[2,1,5],[3,3,7]], capacity = 5  → true
 *   trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11 → true
 *
 * Constraints:
 *   1 <= trips.length <= 1000
 *   trips[i].length == 3
 *   1 <= numPassengers_i <= 100
 *   0 <= from_i < to_i <= 1000
 *   1 <= capacity <= 10^5
 */

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {

};

// --- Tests ---
console.assert(carPooling([[2,1,5],[3,3,7]], 4)          === false, 'Test 1 failed');
console.assert(carPooling([[2,1,5],[3,3,7]], 5)          === true,  'Test 2 failed');
console.assert(carPooling([[3,2,7],[3,7,9],[8,3,9]], 11) === true,  'Test 3 failed');
console.assert(carPooling([[2,1,5],[3,5,7]], 3)          === true,  'Test 4 failed');
console.log('All tests passed (or assertions above show failures)');
