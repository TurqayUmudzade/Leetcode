/**
 * 15. 3Sum
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Examples:
 *   Input:  nums = [-1,0,1,2,-1,-4]
 *   Output: [[-1,-1,2],[-1,0,1]]
 *
 *   Input:  nums = [0,1,1]
 *   Output: []
 *
 *   Input:  nums = [0,0,0]
 *   Output: [[0,0,0]]
 *
 * Constraints:
 *   - 3 <= nums.length <= 3000
 *   - -10^5 <= nums[i] <= 10^5
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
};

// Helper: deep-sort and compare triplet results regardless of output order
function sortedTriplets(arr) {
    return arr.map(t => [...t].sort((a, b) => a - b))
              .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
}

// Tests
const r1 = threeSum([-1,0,1,2,-1,-4]);
console.assert(
    Array.isArray(r1) &&
    JSON.stringify(sortedTriplets(r1)) ===
    JSON.stringify(sortedTriplets([[-1,-1,2],[-1,0,1]])),
    "Test 1 failed"
);
const r2 = threeSum([0,1,1]);
console.assert(
    Array.isArray(r2) && JSON.stringify(r2) === JSON.stringify([]),
    "Test 2 failed"
);
const r3 = threeSum([0,0,0]);
console.assert(
    Array.isArray(r3) &&
    JSON.stringify(sortedTriplets(r3)) ===
    JSON.stringify(sortedTriplets([[0,0,0]])),
    "Test 3 failed"
);
const r4 = threeSum([1,2,3]);
console.assert(
    Array.isArray(r4) && JSON.stringify(r4) === JSON.stringify([]),
    "Test 4 failed"
);

console.log("All tests passed for 15-3sum");
