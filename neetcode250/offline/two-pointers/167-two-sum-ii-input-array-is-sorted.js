/**
 * 167. Two Sum II - Input Array Is Sorted
 *
 * Given a 1-indexed array of integers numbers that is already sorted in
 * non-decreasing order, find two numbers such that they add up to a specific
 * target number. Let these two numbers be numbers[index1] and numbers[index2]
 * where 1 <= index1 < index2 <= numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2, added by one as
 * an integer array [index1, index2] of length 2.
 *
 * The tests are generated such that there is exactly one solution. You may not
 * use the same element twice. Your solution must use only constant extra space.
 *
 * Examples:
 *   Input:  numbers = [2,7,11,15], target = 9
 *   Output: [1,2]
 *   Explanation: 2 + 7 = 9. index1 = 1, index2 = 2.
 *
 *   Input:  numbers = [2,3,4], target = 6
 *   Output: [1,3]
 *
 *   Input:  numbers = [-1,0], target = -1
 *   Output: [1,2]
 *
 * Constraints:
 *   - 2 <= numbers.length <= 3 * 10^4
 *   - -1000 <= numbers[i] <= 1000
 *   - numbers is sorted in non-decreasing order
 *   - -1000 <= target <= 1000
 *   - The tests are generated such that there is exactly one solution
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
};

// Tests
console.assert(JSON.stringify(twoSum([2,7,11,15], 9)) === JSON.stringify([1,2]), "Test 1 failed");
console.assert(JSON.stringify(twoSum([2,3,4], 6)) === JSON.stringify([1,3]), "Test 2 failed");
console.assert(JSON.stringify(twoSum([-1,0], -1)) === JSON.stringify([1,2]), "Test 3 failed");
console.assert(JSON.stringify(twoSum([1,2,3,4,5], 9)) === JSON.stringify([4,5]), "Test 4 failed");

console.log("All tests passed for 167-two-sum-ii-input-array-is-sorted");
