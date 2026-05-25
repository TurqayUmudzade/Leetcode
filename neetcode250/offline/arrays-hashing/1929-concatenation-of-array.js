/**
 * 1929. Concatenation of Array
 *
 * Given an integer array nums of length n, you want to create an array ans of
 * length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n
 * (0-indexed). Specifically, ans is the concatenation of two nums arrays.
 * Return the array ans.
 *
 * Examples:
 *   getConcatenation([1,2,1]) => [1,2,1,1,2,1]
 *   getConcatenation([1,3,2,1]) => [1,3,2,1,1,3,2,1]
 *
 * Constraints:
 *   - n == nums.length
 *   - 1 <= n <= 1000
 *   - 1 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
};

// Tests
console.assert(
  JSON.stringify(getConcatenation([1, 2, 1])) === JSON.stringify([1, 2, 1, 1, 2, 1]),
  "Test 1 failed: [1,2,1] => [1,2,1,1,2,1]"
);
console.assert(
  JSON.stringify(getConcatenation([1, 3, 2, 1])) === JSON.stringify([1, 3, 2, 1, 1, 3, 2, 1]),
  "Test 2 failed: [1,3,2,1] => [1,3,2,1,1,3,2,1]"
);
console.assert(
  JSON.stringify(getConcatenation([5])) === JSON.stringify([5, 5]),
  "Test 3 failed: [5] => [5,5]"
);
console.assert(
  JSON.stringify(getConcatenation([1, 2, 3])) === JSON.stringify([1, 2, 3, 1, 2, 3]),
  "Test 4 failed: [1,2,3] => [1,2,3,1,2,3]"
);

console.log("All tests passed for 1929-concatenation-of-array");
