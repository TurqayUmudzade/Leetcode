/**
 * 229. Majority Element II
 *
 * Given an integer array of size n, find all elements that appear more than
 * ⌊ n/3 ⌋ times. There can be at most two such elements.
 *
 * Follow-up: solve in O(n) time and O(1) space using the Boyer-Moore Voting
 * algorithm extended to two candidates.
 *
 * Example:
 *   nums = [3,2,3]   → [3]
 *   nums = [1,2]     → [1,2]
 *   nums = [1]       → [1]
 *   nums = [1,1,1,3,3,2,2,2] → [1,2]
 *
 * Constraints:
 *   1 <= nums.length <= 5 * 10^4
 *   -10^9 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

};

// Helper: order-independent array equality
function sameElements(a, b) {
  return a.length === b.length && [...a].sort((x,y)=>x-y).join() === [...b].sort((x,y)=>x-y).join();
}

// --- Tests ---
console.assert(sameElements(majorityElement([3,2,3]), [3]),           'Test 1 failed');
console.assert(sameElements(majorityElement([1,2]),   [1,2]),         'Test 2 failed');
console.assert(sameElements(majorityElement([1]),     [1]),           'Test 3 failed');
console.assert(sameElements(majorityElement([1,1,1,3,3,2,2,2]), [1,2]), 'Test 4 failed');
console.log('All tests passed (or assertions above show failures)');
