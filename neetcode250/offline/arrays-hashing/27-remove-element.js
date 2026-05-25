/**
 * 27. Remove Element
 *
 * Given an integer array nums and an integer val, remove all occurrences of
 * val in nums in-place. The order of the remaining elements may be changed.
 * Return k — the number of elements in nums which are not equal to val.
 *
 * The first k elements of nums should hold the result. Elements beyond k do
 * not matter.
 *
 * Examples:
 *   nums=[3,2,2,3], val=3 => k=2, nums=[2,2,_,_]
 *   nums=[0,1,2,2,3,0,4,2], val=2 => k=5, nums=[0,1,4,0,3,_,_,_]
 *
 * Constraints:
 *   - 0 <= nums.length <= 100
 *   - 0 <= nums[i] <= 50
 *   - 0 <= val <= 100
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
};

// Tests
(function() {
  const nums1 = [3, 2, 2, 3];
  const k1 = removeElement(nums1, 3);
  console.assert(k1 === 2, "Test 1 failed: expected k=2, got " + k1);
  console.assert(
    nums1.slice(0, k1).sort((a, b) => a - b).join() === [2, 2].join(),
    "Test 1 failed: first k elements should be [2,2]"
  );
})();

(function() {
  const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
  const k2 = removeElement(nums2, 2);
  console.assert(k2 === 5, "Test 2 failed: expected k=5, got " + k2);
  console.assert(
    nums2.slice(0, k2).sort((a, b) => a - b).join() === [0, 0, 1, 3, 4].join(),
    "Test 2 failed: first k elements should be [0,0,1,3,4]"
  );
})();

(function() {
  const nums3 = [1];
  const k3 = removeElement(nums3, 1);
  console.assert(k3 === 0, "Test 3 failed: expected k=0, got " + k3);
})();

(function() {
  const nums4 = [4, 5];
  const k4 = removeElement(nums4, 4);
  console.assert(k4 === 1, "Test 4 failed: expected k=1, got " + k4);
  console.assert(nums4[0] === 5, "Test 4 failed: first element should be 5");
})();

console.log("All tests passed for 27-remove-element");
