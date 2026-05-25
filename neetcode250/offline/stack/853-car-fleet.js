/**
 * 853. Car Fleet
 *
 * There are n cars going to the same destination along a one-lane road. The
 * destination is `target` miles away.
 *
 * You are given two integer arrays `position` and `speed`, both of length n,
 * where `position[i]` is the position of the i-th car and `speed[i]` is the
 * speed of the i-th car (in miles per hour).
 *
 * A car can never pass another car ahead of it, but it can catch up to it and
 * drive bumper to bumper at the same speed. The faster car will slow down to
 * match the slower car's speed.
 *
 * Two or more cars driving bumper to bumper become a fleet. A single car is
 * also a fleet.
 *
 * Return the number of car fleets that will arrive at the destination.
 *
 * Approach: sort cars by position descending. Compute time to target for each.
 * Use a stack: if a car's time <= the top of the stack, it joins that fleet
 * (don't push); otherwise push its time.
 *
 * Example:
 *   target=12, position=[10,8,0,5,3], speed=[2,4,1,1,3]  → 3
 *   target=10, position=[3],          speed=[3]           → 1
 *   target=100, position=[0,2,4],     speed=[4,2,1]       → 1
 *
 * Constraints:
 *   n == position.length == speed.length
 *   1 <= n <= 10^5
 *   0 < target <= 10^6
 *   0 <= position[i] < target
 *   0 < speed[i] <= 10^6
 *   All values of position are unique.
 */

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {

};

// --- Tests ---
console.assert(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]) === 3, 'Test 1 failed');
console.assert(carFleet(10, [3],           [3])         === 1, 'Test 2 failed');
console.assert(carFleet(100, [0,2,4],      [4,2,1])     === 1, 'Test 3 failed');
console.assert(carFleet(10, [6,8],         [3,2])       === 2, 'Test 4 failed');
console.log('All tests passed (or assertions above show failures)');
