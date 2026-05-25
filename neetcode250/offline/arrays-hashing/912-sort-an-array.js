/**
 * 912. Sort an Array
 *
 * Given an array of integers nums, sort the array in ascending order and
 * return it. You must solve the problem without using any built-in functions
 * in O(n log n) time complexity and with the smallest space complexity possible.
 *
 * Examples:
 *   sortArray([5,2,3,1])      => [1,2,3,5]
 *   sortArray([5,1,1,2,0,0])  => [0,0,1,1,2,5]
 *
 * Constraints:
 *   - 1 <= nums.length <= 5 * 10^4
 *   - -5 * 10^4 <= nums[i] <= 5 * 10^4
 *
 * Hint: Implement merge sort or heap sort for O(n log n) without built-in sort.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
};

// Tests
console.assert(
  JSON.stringify(sortArray([5, 2, 3, 1])) === JSON.stringify([1, 2, 3, 5]),
  "Test 1 failed: [5,2,3,1] => [1,2,3,5]"
);
console.assert(
  JSON.stringify(sortArray([5, 1, 1, 2, 0, 0])) === JSON.stringify([0, 0, 1, 1, 2, 5]),
  "Test 2 failed: [5,1,1,2,0,0] => [0,0,1,1,2,5]"
);
console.assert(
  JSON.stringify(sortArray([1])) === JSON.stringify([1]),
  "Test 3 failed: [1] => [1]"
);
console.assert(
  JSON.stringify(sortArray([-4, 0, 7, 4, 9, -5, -1, 0, -7, -1])) ===
    JSON.stringify([-7, -5, -4, -1, -1, 0, 0, 4, 7, 9]),
  "Test 4 failed: negative numbers test"
);

console.log("All tests passed for 912-sort-an-array");
