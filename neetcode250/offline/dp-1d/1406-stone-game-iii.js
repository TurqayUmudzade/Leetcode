/**
 * 1406. Stone Game III
 *
 * Alice and Bob continue their games with piles of stones. There are several
 * stones arranged in a row. Each turn, the player (starting with Alice) can
 * take 1, 2, or 3 stones from the front of the row. Alice and Bob will score
 * the sum of the stones they each took. They both play optimally.
 *
 * Return "Alice" if Alice will win, "Bob" if Bob will win, or "Tie" if they
 * end with the same score.
 *
 * Example 1: stoneValue = [1, 2, 3, 7]  → "Bob"
 * Example 2: stoneValue = [1, 2, 3, -9] → "Alice"
 * Example 3: stoneValue = [1, 2, 3, 6]  → "Tie"
 *
 * Constraints:
 *   1 <= stoneValue.length <= 5 * 10^4
 *   -1000 <= stoneValue[i] <= 1000
 */

/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {};

// Tests
console.assert(stoneGameIII([1, 2, 3, 7]) === "Bob", "Test 1 failed");
console.assert(stoneGameIII([1, 2, 3, -9]) === "Alice", "Test 2 failed");
console.assert(stoneGameIII([1, 2, 3, 6]) === "Tie", "Test 3 failed");
console.assert(stoneGameIII([1]) === "Alice", "Test 4 failed");
console.log("All tests passed for 1406. Stone Game III");
