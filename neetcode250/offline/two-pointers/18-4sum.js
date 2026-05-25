/**
 * 18. 4Sum
 *
 * Given an array nums of n integers, return an array of all the unique
 * quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 *   - 0 <= a, b, c, d < n
 *   - a, b, c, and d are distinct
 *   - nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 * You may return the answer in any order.
 *
 * Examples:
 *   Input:  nums = [1,0,-1,0,-2,2], target = 0
 *   Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *   Input:  nums = [2,2,2,2,2], target = 8
 *   Output: [[2,2,2,2]]
 *
 * Constraints:
 *   - 1 <= nums.length <= 200
 *   - -10^9 <= nums[i] <= 10^9
 *   - -10^9 <= target <= 10^9
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
};

// Helper: deep-sort and compare quadruplet results regardless of output order
function sortedQuads(arr) {
    return arr.map(q => [...q].sort((a, b) => a - b))
              .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2] || a[3] - b[3]);
}

// Tests
const q1 = fourSum([1,0,-1,0,-2,2], 0);
console.assert(
    Array.isArray(q1) &&
    JSON.stringify(sortedQuads(q1)) ===
    JSON.stringify(sortedQuads([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]])),
    "Test 1 failed"
);
const q2 = fourSum([2,2,2,2,2], 8);
console.assert(
    Array.isArray(q2) &&
    JSON.stringify(sortedQuads(q2)) ===
    JSON.stringify(sortedQuads([[2,2,2,2]])),
    "Test 2 failed"
);
const q3 = fourSum([1,2,3,4], 100);
console.assert(
    Array.isArray(q3) && JSON.stringify(q3) === JSON.stringify([]),
    "Test 3 failed"
);
const q4 = fourSum([0,0,0,0], 0);
console.assert(
    Array.isArray(q4) &&
    JSON.stringify(sortedQuads(q4)) ===
    JSON.stringify(sortedQuads([[0,0,0,0]])),
    "Test 4 failed"
);

console.log("All tests passed for 18-4sum");
