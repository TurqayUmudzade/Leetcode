/**
 * 410. Split Array Largest Sum
 * https://leetcode.com/problems/split-array-largest-sum/
 *
 * Split nums into exactly k non-empty subarrays (maintaining order) to
 * minimize the largest subarray sum. Binary search on the answer space.
 * Time: O(n log(sum))  Space: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {};

// --- Tests ---
console.assert(splitArray([7,2,5,10,8], 2)  === 18, 'Test 1 failed');
console.assert(splitArray([1,2,3,4,5], 2)   === 9,  'Test 2 failed');
console.assert(splitArray([1,4,4], 3)        === 4,  'Test 3 failed');
console.assert(splitArray([2,3,1,2,4,3], 5) === 4,  'Test 4 failed');
console.log('All tests passed (or stubs — implement the function)');
