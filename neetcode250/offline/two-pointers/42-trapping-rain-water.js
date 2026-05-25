/**
 * 42. Trapping Rain Water
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it can trap after raining.
 *
 * Examples:
 *   Input:  height = [0,1,0,2,1,0,1,3,2,1,2,1]
 *   Output: 6
 *   Explanation: The above elevation map (black section) is represented by the
 *   array. In this case, 6 units of rain water (blue section) are being trapped.
 *
 *   Input:  height = [4,2,0,3,2,5]
 *   Output: 9
 *
 * Constraints:
 *   - n == height.length
 *   - 1 <= n <= 2 * 10^4
 *   - 0 <= height[i] <= 10^5
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
};

// Tests
console.assert(trap([0,1,0,2,1,0,1,3,2,1,2,1]) === 6, "Test 1 failed");
console.assert(trap([4,2,0,3,2,5]) === 9, "Test 2 failed");
console.assert(trap([3,0,2,0,4]) === 7, "Test 3 failed");
console.assert(trap([1,0,1]) === 1, "Test 4 failed");

console.log("All tests passed for 42-trapping-rain-water");
