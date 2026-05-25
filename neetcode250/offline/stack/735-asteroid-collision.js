/**
 * 735. Asteroid Collision
 *
 * We are given an array asteroids of integers representing asteroids in a row.
 * For each asteroid, the absolute value represents its size, and the sign
 * represents its direction (positive = right, negative = left). Each asteroid
 * moves at the same speed.
 *
 * Find out the state of the asteroids after all collisions. If two asteroids
 * meet, the smaller one explodes. If both are the same size, both explode. Two
 * asteroids moving in the same direction will never meet.
 *
 * Example 1:
 *   Input: asteroids = [5,10,-5]
 *   Output: [5,10]
 *   Explanation: 10 and -5 collide; 10 survives. 5 and 10 never collide.
 *
 * Example 2:
 *   Input: asteroids = [8,-8]
 *   Output: []
 *   Explanation: 8 and -8 collide, both explode.
 *
 * Example 3:
 *   Input: asteroids = [10,2,-5]
 *   Output: [10]
 *   Explanation: 2 and -5 collide; -5 survives. 10 and -5 collide; 10 survives.
 *
 * Constraints:
 *   - 2 <= asteroids.length <= 10^4
 *   - -1000 <= asteroids[i] <= 1000
 *   - asteroids[i] != 0
 */

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {

};

// Helper for deep equality in assertions
const arrayEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

console.assert(arrayEqual(asteroidCollision([5,10,-5]), [5,10]), "Test 1 failed");
console.assert(arrayEqual(asteroidCollision([8,-8]), []), "Test 2 failed");
console.assert(arrayEqual(asteroidCollision([10,2,-5]), [10]), "Test 3 failed");
console.assert(arrayEqual(asteroidCollision([-2,-1,1,2]), [-2,-1,1,2]), "Test 4 failed");
console.log("All tests passed!");
