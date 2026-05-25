/**
 * 78. Subsets
 *
 * Given an integer array nums of unique elements, return all possible subsets
 * (the power set). The solution set must not contain duplicate subsets.
 * Return the solution in any order.
 *
 * Example:
 *   Input:  nums = [1, 2, 3]
 *   Output: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]  (8 subsets)
 *
 * Constraints:
 *   1 <= nums.length <= 10
 *   -10 <= nums[i] <= 10
 *   All nums are unique.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

};

// --- tests ---
const result1 = subsets([1, 2, 3]);
console.assert(result1.length === 8, `Test 1 failed: expected length 8, got ${result1 && result1.length}`);

const stringify = arr =>
    JSON.stringify(arr.map(a => a.slice().sort((x, y) => x - y)).sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b))));

const expected1 = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];
console.assert(stringify(result1) === stringify(expected1), 'Test 2 failed: subsets content mismatch');

const result2 = subsets([0]);
console.assert(result2.length === 2, `Test 3 failed: expected length 2, got ${result2 && result2.length}`);

const result3 = subsets([1, 2]);
console.assert(result3.length === 4, `Test 4 failed: expected length 4, got ${result3 && result3.length}`);

console.log('All tests passed for 78-subsets');
