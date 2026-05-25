/**
 * 90. Subsets II
 *
 * Given an integer array nums that may contain duplicates, return all possible
 * subsets (the power set). The solution set must not contain duplicate subsets.
 * Return the solution in any order.
 *
 * Example:
 *   Input:  nums = [1, 2, 2]
 *   Output: [[], [1], [1,2], [1,2,2], [2], [2,2]]
 *
 * Constraints:
 *   1 <= nums.length <= 10
 *   -10 <= nums[i] <= 10
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

};

// --- helpers ---
const sortSubsets = arr =>
    JSON.stringify(
        arr.map(a => a.slice().sort((x, y) => x - y))
           .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))
    );

// --- tests ---
const expected1 = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
console.assert(
    sortSubsets(subsetsWithDup([1, 2, 2])) === sortSubsets(expected1),
    'Test 1 failed'
);

const r2 = subsetsWithDup([0]);
console.assert(r2.length === 2, `Test 2 failed: expected 2, got ${r2 && r2.length}`);

const expected3 = [[], [1], [1, 1]];
console.assert(
    sortSubsets(subsetsWithDup([1, 1])) === sortSubsets(expected3),
    'Test 3 failed'
);

const r4 = subsetsWithDup([4, 4, 4, 1, 4]);
// unique subsets; just verify no duplicates by checking length equals set size
const r4Strs = r4.map(a => JSON.stringify(a.slice().sort((x, y) => x - y)));
console.assert(new Set(r4Strs).size === r4Strs.length, 'Test 4 failed: duplicate subsets found');

console.log('All tests passed for 90-subsets-ii');
