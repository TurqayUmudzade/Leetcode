/**
 * 202. Happy Number
 *
 * A happy number is defined by the following process: starting with any
 * positive integer, replace the number by the sum of the squares of its
 * digits, and repeat the process until the number equals 1 (it is happy),
 * or it loops endlessly in a cycle that never includes 1 (it is not happy).
 *
 * Examples:
 *   19 → true   (19 → 82 → 68 → 100 → 1)
 *   2  → false
 *   1  → true
 *
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

};

// Tests
console.assert(isHappy(19) === true, "Test 1 failed");
console.assert(isHappy(2) === false, "Test 2 failed");
console.assert(isHappy(1) === true, "Test 3 failed");
console.assert(isHappy(7) === true, "Test 4 failed");
