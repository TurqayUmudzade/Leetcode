/**
 * 217. Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 *
 * Examples:
 *   containsDuplicate([1,2,3,1]) => true
 *   containsDuplicate([1,2,3,4]) => false
 *   containsDuplicate([1,1,1,3,3,4,3,2,4,2]) => true
 *
 * Constraints:
 *   - 1 <= nums.length <= 10^5
 *   - -10^9 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
};

// Tests
console.assert(
  containsDuplicate([1, 2, 3, 1]) === true,
  "Test 1 failed: [1,2,3,1] => true"
);
console.assert(
  containsDuplicate([1, 2, 3, 4]) === false,
  "Test 2 failed: [1,2,3,4] => false"
);
console.assert(
  containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) === true,
  "Test 3 failed: [1,1,1,3,3,4,3,2,4,2] => true"
);
console.assert(
  containsDuplicate([1]) === false,
  "Test 4 failed: [1] => false"
);

console.log("All tests passed for 217-contains-duplicate");
