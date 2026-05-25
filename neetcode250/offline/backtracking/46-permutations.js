/**
 * 46. Permutations
 *
 * Given an array nums of distinct integers, return all the possible
 * permutations. You can return the answer in any order.
 *
 * Example:
 *   Input:  nums = [1, 2, 3]
 *   Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]  (6 permutations)
 *
 * Constraints:
 *   1 <= nums.length <= 6
 *   -10 <= nums[i] <= 10
 *   All integers in nums are unique.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

};

// --- helpers ---
const sortPerms = arr =>
    JSON.stringify(
        arr.map(a => a.slice())
           .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))
    );

// --- tests ---
const r1 = permute([1, 2, 3]);
console.assert(r1.length === 6, `Test 1 failed: expected 6, got ${r1 && r1.length}`);

const expected1 = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]];
console.assert(sortPerms(r1) === sortPerms(expected1), 'Test 2 failed: permutation content mismatch');

const r2 = permute([0, 1]);
console.assert(r2.length === 2, `Test 3 failed: expected 2, got ${r2 && r2.length}`);

const r3 = permute([1]);
console.assert(r3.length === 1 && r3[0][0] === 1, 'Test 4 failed: single element permutation');

console.log('All tests passed for 46-permutations');
