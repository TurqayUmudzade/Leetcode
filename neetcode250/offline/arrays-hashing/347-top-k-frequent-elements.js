/**
 * 347. Top K Frequent Elements
 *
 * Given an integer array nums and an integer k, return the k most frequent
 * elements. You may return the answer in any order.
 *
 * Examples:
 *   topKFrequent([1,1,1,2,2,3], 2) => [1,2]
 *   topKFrequent([1], 1)           => [1]
 *
 * Constraints:
 *   - 1 <= nums.length <= 10^5
 *   - -10^4 <= nums[i] <= 10^4
 *   - k is in the range [1, the number of unique elements in the array].
 *   - It is guaranteed that the answer is unique.
 *
 * Follow-up: Your algorithm's time complexity must be better than O(n log n),
 * where n is the array's size. Hint: bucket sort by frequency.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
};

// Helper: compare arrays regardless of order
function sameElements(a, b) {
  if (a.length !== b.length) return false;
  return [...a].sort((x, y) => x - y).join() === [...b].sort((x, y) => x - y).join();
}

// Tests
console.assert(
  sameElements(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]),
  "Test 1 failed: [1,1,1,2,2,3], k=2 => [1,2]"
);
console.assert(
  sameElements(topKFrequent([1], 1), [1]),
  "Test 2 failed: [1], k=1 => [1]"
);
console.assert(
  sameElements(topKFrequent([4, 4, 4, 2, 2, 3], 1), [4]),
  "Test 3 failed: [4,4,4,2,2,3], k=1 => [4]"
);
console.assert(
  sameElements(topKFrequent([1, 2, 3, 1, 2, 1], 3), [1, 2, 3]),
  "Test 4 failed: [1,2,3,1,2,1], k=3 => [1,2,3]"
);

console.log("All tests passed for 347-top-k-frequent-elements");
