/**
 * 169. Majority Element
 *
 * Given an array nums of size n, return the majority element. The majority
 * element is the element that appears more than n/2 times. You may assume
 * that the majority element always exists in the array.
 *
 * Examples:
 *   majorityElement([3,2,3])           => 3
 *   majorityElement([2,2,1,1,1,2,2])   => 2
 *
 * Constraints:
 *   - n == nums.length
 *   - 1 <= n <= 5 * 10^4
 *   - -10^9 <= nums[i] <= 10^9
 *   - The majority element always exists in the array.
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 * Hint: Boyer-Moore Voting Algorithm.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
};

// Tests
console.assert(
  majorityElement([3, 2, 3]) === 3,
  "Test 1 failed: [3,2,3] => 3"
);
console.assert(
  majorityElement([2, 2, 1, 1, 1, 2, 2]) === 2,
  "Test 2 failed: [2,2,1,1,1,2,2] => 2"
);
console.assert(
  majorityElement([1]) === 1,
  "Test 3 failed: [1] => 1"
);
console.assert(
  majorityElement([6, 5, 5]) === 5,
  "Test 4 failed: [6,5,5] => 5"
);

console.log("All tests passed for 169-majority-element");
