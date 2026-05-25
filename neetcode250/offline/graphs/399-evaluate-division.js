/**
 * 399. Evaluate Division
 *
 * You are given an array of variable pairs equations and an array of real numbers
 * values, where equations[i] = [Ai, Bi] and values[i] represent the equation
 * Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.
 *
 * You are also given some queries, where queries[j] = [Cj, Dj] represents the
 * jth query where you must find the answer for Cj / Dj = ?.
 *
 * Return the answers to all queries. If a single answer does not exist, return -1.0.
 *
 * Note: The input is always valid. You may assume that evaluating the queries will
 * not result in division by zero and that there is no contradiction.
 *
 * Example 1:
 *   equations = [["a","b"],["b","c"]], values = [2.0, 3.0],
 *   queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
 *   => [6.0, 0.5, -1.0, 1.0, -1.0]
 *
 * Example 2:
 *   equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5, 2.5, 5.0],
 *   queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
 *   => [3.75, 0.4, 5.0, 0.2]
 *
 * Constraints:
 *   - 1 <= equations.length <= 20
 *   - equations[i].length == 2
 *   - 1 <= Ai.length, Bi.length <= 5
 *   - values.length == equations.length
 *   - 0.0 < values[i] <= 20.0
 *   - 1 <= queries.length <= 20
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {

};

// Helper: compare float arrays with tolerance
function floatArraysEqual(a, b, tol = 1e-5) {
  if (!a || !b || a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (Math.abs(a[i] - b[i]) > tol) return false;
  }
  return true;
}

// Test 1
console.assert(
  floatArraysEqual(
    calcEquation([["a","b"],["b","c"]], [2.0,3.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]),
    [6.0, 0.5, -1.0, 1.0, -1.0]
  ),
  'Test 1 failed: expected [6.0, 0.5, -1.0, 1.0, -1.0]'
);

// Test 2
console.assert(
  floatArraysEqual(
    calcEquation([["a","b"],["b","c"],["bc","cd"]], [1.5,2.5,5.0], [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]),
    [3.75, 0.4, 5.0, 0.2]
  ),
  'Test 2 failed: expected [3.75, 0.4, 5.0, 0.2]'
);

// Test 3: same variable
console.assert(
  floatArraysEqual(
    calcEquation([["a","b"]], [2.0], [["a","a"],["b","b"]]),
    [1.0, 1.0]
  ),
  'Test 3 failed: expected [1.0, 1.0]'
);

// Test 4: unknown variables
console.assert(
  floatArraysEqual(
    calcEquation([["a","b"]], [2.0], [["z","a"],["a","z"]]),
    [-1.0, -1.0]
  ),
  'Test 4 failed: expected [-1.0, -1.0]'
);

console.log('All tests passed for 399-evaluate-division');
