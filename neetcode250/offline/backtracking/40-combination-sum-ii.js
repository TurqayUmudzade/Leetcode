/**
 * 40. Combination Sum II
 *
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sum to target. Each number in candidates may only be used once in
 * the combination. The solution set must not contain duplicate combinations.
 *
 * Example 1:
 *   Input:  candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
 *   Output: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]
 *
 * Example 2:
 *   Input:  candidates = [2, 5, 2, 1, 2], target = 5
 *   Output: [[1, 2, 2], [5]]
 *
 * Constraints:
 *   1 <= candidates.length <= 100
 *   1 <= candidates[i] <= 50
 *   1 <= target <= 30
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

};

// --- helpers ---
const sortCombos = arr =>
    JSON.stringify(
        arr.map(a => a.slice().sort((x, y) => x - y))
           .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))
    );

// --- tests ---
console.assert(
    sortCombos(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)) ===
    sortCombos([[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]),
    'Test 1 failed'
);
console.assert(
    sortCombos(combinationSum2([2, 5, 2, 1, 2], 5)) ===
    sortCombos([[1, 2, 2], [5]]),
    'Test 2 failed'
);
console.assert(
    sortCombos(combinationSum2([1, 1, 1, 1], 2)) ===
    sortCombos([[1, 1]]),
    'Test 3 failed: duplicate combos must be removed'
);
console.assert(
    sortCombos(combinationSum2([1, 2], 5)) ===
    sortCombos([]),
    'Test 4 failed: no valid combination'
);
console.log('All tests passed for 40-combination-sum-ii');
