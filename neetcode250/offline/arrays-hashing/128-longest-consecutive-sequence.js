/**
 * 128. Longest Consecutive Sequence
 *
 * Given an unsorted array of integers nums, return the length of the longest
 * consecutive elements sequence. You must write an algorithm that runs in O(n).
 *
 * Examples:
 *   longestConsecutive([100,4,200,1,3,2]) => 4   (sequence: 1,2,3,4)
 *   longestConsecutive([0,3,7,2,5,8,4,6,0,1]) => 9
 *
 * Constraints:
 *   - 0 <= nums.length <= 10^5
 *   - -10^9 <= nums[i] <= 10^9
 *
 * Hint: Insert all numbers into a HashSet. For each number that has no
 * predecessor (num-1 not in set), walk forward counting the sequence length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
};

// Tests
console.assert(
  longestConsecutive([100, 4, 200, 1, 3, 2]) === 4,
  "Test 1 failed: [100,4,200,1,3,2] => 4"
);
console.assert(
  longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]) === 9,
  "Test 2 failed: [0,3,7,2,5,8,4,6,0,1] => 9"
);
console.assert(
  longestConsecutive([]) === 0,
  "Test 3 failed: [] => 0"
);
console.assert(
  longestConsecutive([1, 2, 0, 1]) === 3,
  "Test 4 failed: [1,2,0,1] => 3"
);

console.log("All tests passed for 128-longest-consecutive-sequence");
