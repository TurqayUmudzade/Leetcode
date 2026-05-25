/**
 * 1011. Capacity To Ship Packages Within D Days
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 *
 * Ship all weights in order within d days. Find the minimum ship capacity.
 * Binary search between max(weights) and sum(weights).
 * Time: O(n log(sum))  Space: O(1)
 *
 * @param {number[]} weights
 * @param {number} days
 * @return {number} minimum capacity
 */
var shipWithinDays = function(weights, days) {};

// --- Tests ---
console.assert(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5) === 15, 'Test 1 failed');
console.assert(shipWithinDays([3,2,2,4,1,4], 3)           === 6,  'Test 2 failed');
console.assert(shipWithinDays([1,2,3,1,1], 4)             === 3,  'Test 3 failed');
console.assert(shipWithinDays([10], 1)                    === 10, 'Test 4 failed');
console.log('All tests passed (or stubs — implement the function)');
