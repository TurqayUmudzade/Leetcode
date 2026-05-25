/**
 * 26. Remove Duplicates from Sorted Array
 *
 * Given an integer array nums sorted in non-decreasing order, remove the
 * duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same. Then return
 * the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k. To get accepted,
 * you need to do the following things:
 *   - Change the array nums such that the first k elements of nums contain
 *     the unique elements in the order they were present in nums originally.
 *   - The remaining elements of nums as well as the size of nums do not matter.
 *   - Return k.
 *
 * Examples:
 *   Input:  nums = [1,1,2]
 *   Output: 2, nums = [1,2,_]
 *
 *   Input:  nums = [0,0,1,1,1,2,2,3,3,4]
 *   Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 *
 * Constraints:
 *   - 1 <= nums.length <= 3 * 10^4
 *   - -100 <= nums[i] <= 100
 *   - nums is sorted in non-decreasing order
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
};

// Tests
const n1 = [1,1,2];
const k1 = removeDuplicates(n1);
console.assert(k1 === 2, `Test 1 length failed: got ${k1}`);
console.assert(JSON.stringify(n1.slice(0, k1)) === JSON.stringify([1,2]), `Test 1 values failed: ${JSON.stringify(n1.slice(0, k1))}`);

const n2 = [0,0,1,1,1,2,2,3,3,4];
const k2 = removeDuplicates(n2);
console.assert(k2 === 5, `Test 2 length failed: got ${k2}`);
console.assert(JSON.stringify(n2.slice(0, k2)) === JSON.stringify([0,1,2,3,4]), `Test 2 values failed: ${JSON.stringify(n2.slice(0, k2))}`);

const n3 = [1];
const k3 = removeDuplicates(n3);
console.assert(k3 === 1, `Test 3 length failed: got ${k3}`);

const n4 = [1,1,1,1];
const k4 = removeDuplicates(n4);
console.assert(k4 === 1, `Test 4 length failed: got ${k4}`);
console.assert(n4[0] === 1, `Test 4 values failed`);

console.log("All tests passed for 26-remove-duplicates-from-sorted-array");
