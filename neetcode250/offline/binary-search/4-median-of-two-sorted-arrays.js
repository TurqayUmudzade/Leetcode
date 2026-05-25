/**
 * 4. Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * Find the median of two sorted arrays combined.
 * Must run in O(log(m+n)) time.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {};

// --- Tests ---
console.assert(findMedianSortedArrays([1,3], [2])     === 2.0, 'Test 1 failed');
console.assert(findMedianSortedArrays([1,2], [3,4])   === 2.5, 'Test 2 failed');
console.assert(findMedianSortedArrays([], [1])         === 1.0, 'Test 3 failed');
console.assert(findMedianSortedArrays([2], [])         === 2.0, 'Test 4 failed');
console.log('All tests passed (or stubs — implement the function)');
