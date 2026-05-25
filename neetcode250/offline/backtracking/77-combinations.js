/**
 * 77. Combinations
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * chosen from the range [1, n]. You may return the answer in any order.
 *
 * Example:
 *   Input:  n = 4, k = 2
 *   Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]  (6 combinations)
 *
 * Constraints:
 *   1 <= n <= 20
 *   1 <= k <= n
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

};

// --- helpers ---
const sortCombos = arr =>
    JSON.stringify(
        arr.map(a => a.slice().sort((x, y) => x - y))
           .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))
    );

// --- tests ---
const r1 = combine(4, 2);
console.assert(r1.length === 6, `Test 1 failed: expected 6 combos, got ${r1 && r1.length}`);

const expected1 = [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]];
console.assert(sortCombos(r1) === sortCombos(expected1), 'Test 2 failed: combo content mismatch');

const r2 = combine(1, 1);
console.assert(r2.length === 1 && r2[0][0] === 1, 'Test 3 failed');

const r3 = combine(5, 3);
console.assert(r3.length === 10, `Test 4 failed: C(5,3)=10, got ${r3 && r3.length}`);

console.log('All tests passed for 77-combinations');
