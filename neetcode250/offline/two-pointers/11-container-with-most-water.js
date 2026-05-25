/**
 * 11. Container With Most Water
 *
 * You are given an integer array height of length n. There are n vertical
 * lines drawn such that the two endpoints of the i-th line are (i, 0) and
 * (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that
 * the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 * Examples:
 *   Input:  height = [1,8,6,2,5,4,8,3,7]
 *   Output: 49
 *   Explanation: The above vertical lines are represented by the array. In
 *   this case, the max area of water the container can contain is 49
 *   (between indices 1 and 8, min(8,7) * (8-1) = 7*7 = 49).
 *
 *   Input:  height = [1,1]
 *   Output: 1
 *
 * Constraints:
 *   - n == height.length
 *   - 2 <= n <= 10^5
 *   - 0 <= height[i] <= 10^4
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
};

// Tests
console.assert(maxArea([1,8,6,2,5,4,8,3,7]) === 49, "Test 1 failed");
console.assert(maxArea([1,1]) === 1, "Test 2 failed");
console.assert(maxArea([4,3,2,1,4]) === 16, "Test 3 failed");
console.assert(maxArea([1,2,1]) === 2, "Test 4 failed");

console.log("All tests passed for 11-container-with-most-water");
