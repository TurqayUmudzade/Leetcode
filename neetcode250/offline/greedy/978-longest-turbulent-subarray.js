/**
 * 978. Longest Turbulent Subarray
 *
 * Given an integer array arr, return the length of a maximum size turbulent subarray of arr.
 * A subarray is turbulent if the comparison sign flips between each adjacent pair of elements:
 *   arr[i-1] < arr[i] > arr[i+1]  OR  arr[i-1] > arr[i] < arr[i+1]
 * Comparisons must be strict (no equal adjacent elements).
 *
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
};

console.assert(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]) === 5, "Test 1 failed");
console.assert(maxTurbulenceSize([4, 8, 12, 16]) === 2, "Test 2 failed");
console.assert(maxTurbulenceSize([100]) === 1, "Test 3 failed");
console.assert(maxTurbulenceSize([9, 9]) === 1, "Test 4 failed");
