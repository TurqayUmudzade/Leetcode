/**
 * 47. Permutations II
 *
 * Given a collection of numbers, nums, that might contain duplicates, return
 * all possible unique permutations in any order.
 *
 * Example:
 *   Input:  nums = [1, 1, 2]
 *   Output: [[1,1,2],[1,2,1],[2,1,1]]  (3 unique permutations)
 *
 * Constraints:
 *   1 <= nums.length <= 8
 *   -10 <= nums[i] <= 10
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

};

// --- helpers ---
const sortPerms = arr =>
    JSON.stringify(
        arr.map(a => a.slice())
           .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))
    );

// --- tests ---
const expected1 = [[1, 1, 2], [1, 2, 1], [2, 1, 1]];
const r1 = permuteUnique([1, 1, 2]);
console.assert(r1.length === 3, `Test 1 failed: expected 3, got ${r1 && r1.length}`);
console.assert(sortPerms(r1) === sortPerms(expected1), 'Test 2 failed: unique permutation content mismatch');

const r2 = permuteUnique([1, 2, 3]);
console.assert(r2.length === 6, `Test 3 failed: expected 6 for distinct nums, got ${r2 && r2.length}`);

const r3 = permuteUnique([1, 1, 1]);
console.assert(r3.length === 1, `Test 4 failed: all same → 1 unique perm, got ${r3 && r3.length}`);

console.log('All tests passed for 47-permutations-ii');
