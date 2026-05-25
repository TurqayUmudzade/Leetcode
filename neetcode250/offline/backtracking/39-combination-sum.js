/**
 * 39. Combination Sum
 *
 * Given an array of distinct integers candidates and a target integer target,
 * return a list of all unique combinations of candidates where the chosen
 * numbers sum to target. You may return the combinations in any order.
 *
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen
 * numbers is different.
 *
 * Example 1:
 *   Input:  candidates = [2, 3, 6, 7], target = 7
 *   Output: [[2, 2, 3], [7]]
 *
 * Example 2:
 *   Input:  candidates = [2, 3, 8], target = 10
 *   Output: [[2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 3, 2, 3], [2, 8], [3, 3, 4]] — wait, no 4; [[2,2,2,2,2],[2,2,3,3],[2,8],[3,3,4]→no] → [[2,2,2,2,2],[2,2,3,3],[2,8]]
 *   Note: candidates=[2,3,8], target=10 → [[2,2,2,2,2],[2,2,3,3],[2,8]]
 *
 * Constraints:
 *   1 <= candidates.length <= 30
 *   2 <= candidates[i] <= 40
 *   All elements of candidates are distinct.
 *   1 <= target <= 40
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

};

// --- helpers ---
const sortCombos = arr =>
    JSON.stringify(
        arr.map(a => a.slice().sort((x, y) => x - y))
           .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))
    );

// --- tests ---
console.assert(
    sortCombos(combinationSum([2, 3, 6, 7], 7)) === sortCombos([[2, 2, 3], [7]]),
    'Test 1 failed'
);
console.assert(
    sortCombos(combinationSum([2, 3, 5], 8)) === sortCombos([[2, 2, 2, 2], [2, 3, 3], [3, 5]]),
    'Test 2 failed'
);
console.assert(
    sortCombos(combinationSum([2], 1)) === sortCombos([]),
    'Test 3 failed: no solution should return []'
);
console.assert(
    sortCombos(combinationSum([1], 3)) === sortCombos([[1, 1, 1]]),
    'Test 4 failed'
);
console.log('All tests passed for 39-combination-sum');
