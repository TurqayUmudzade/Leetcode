/**
 * 1095. Find in Mountain Array
 * https://leetcode.com/problems/find-in-mountain-array/
 *
 * Mountain array: strictly increases then strictly decreases.
 * Find the minimum index where mountainArr.get(index) === target,
 * preferring the ascending side. Use mountainArr.get() and mountainArr.length().
 * Time: O(log n)  Space: O(1)
 *
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number} index, or -1 if not found
 */

// Mock MountainArray interface
function MountainArray(arr) {
    this._arr = arr;
    this.get = function(index) { return this._arr[index]; };
    this.length = function() { return this._arr.length; };
}

var findInMountainArray = function(target, mountainArr) {};

// --- Tests ---
const ma1 = new MountainArray([1,2,3,4,5,3,1]);
console.assert(findInMountainArray(3, ma1) === 2, 'Test 1 failed');

const ma2 = new MountainArray([0,1,2,4,2,1]);
console.assert(findInMountainArray(3, ma2) === -1, 'Test 2 failed');

const ma3 = new MountainArray([1,5,2]);
console.assert(findInMountainArray(2, ma3) === 2, 'Test 3 failed');

const ma4 = new MountainArray([1,2,3,4,5,3,1]);
console.assert(findInMountainArray(1, ma4) === 0, 'Test 4 failed');

console.log('All tests passed (or stubs — implement the function)');
