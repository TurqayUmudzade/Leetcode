/**
 * 75. Sort Colors
 *
 * Given an array nums with n objects colored red, white, or blue, sort them
 * in-place so that objects of the same color are adjacent, with the colors in
 * the order red, white, and blue. Use the integers 0, 1, and 2 to represent
 * red, white, and blue respectively.
 *
 * You must solve this problem without using the library's sort function.
 *
 * Examples:
 *   sortColors([2,0,2,1,1,0]) => [0,0,1,1,2,2]
 *   sortColors([2,0,1])       => [0,1,2]
 *
 * Constraints:
 *   - n == nums.length
 *   - 1 <= n <= 300
 *   - nums[i] is either 0, 1, or 2.
 *
 * Follow-up: Could you come up with a one-pass algorithm using only constant
 * extra space? Hint: Dutch National Flag algorithm (three pointers).
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
};

// Tests
(function() {
  const a = [2, 0, 2, 1, 1, 0];
  sortColors(a);
  console.assert(JSON.stringify(a) === JSON.stringify([0, 0, 1, 1, 2, 2]),
    "Test 1 failed: [2,0,2,1,1,0] => [0,0,1,1,2,2]");
})();

(function() {
  const b = [2, 0, 1];
  sortColors(b);
  console.assert(JSON.stringify(b) === JSON.stringify([0, 1, 2]),
    "Test 2 failed: [2,0,1] => [0,1,2]");
})();

(function() {
  const c = [0];
  sortColors(c);
  console.assert(JSON.stringify(c) === JSON.stringify([0]),
    "Test 3 failed: [0] => [0]");
})();

(function() {
  const d = [1, 0, 0, 2, 2, 1, 0];
  sortColors(d);
  console.assert(JSON.stringify(d) === JSON.stringify([0, 0, 0, 1, 1, 2, 2]),
    "Test 4 failed: [1,0,0,2,2,1,0] => [0,0,0,1,1,2,2]");
})();

console.log("All tests passed for 75-sort-colors");
