/**
 * 875. Koko Eating Bananas
 * https://leetcode.com/problems/koko-eating-bananas/
 *
 * n piles of bananas, h hours total. Find the minimum integer eating speed k
 * (bananas/hour) such that Koko can finish all piles within h hours.
 * Each hour she picks one pile and eats up to k bananas from it.
 * Time: O(n log(max(piles)))  Space: O(1)
 *
 * @param {number[]} piles
 * @param {number} h
 * @return {number} minimum k
 */
var minEatingSpeed = function(piles, h) {};

// --- Tests ---
console.assert(minEatingSpeed([3,6,7,11], 8)      === 4,  'Test 1 failed');
console.assert(minEatingSpeed([30,11,23,4,20], 5)  === 30, 'Test 2 failed');
console.assert(minEatingSpeed([30,11,23,4,20], 6)  === 23, 'Test 3 failed');
console.assert(minEatingSpeed([1,1,1,1], 4)        === 1,  'Test 4 failed');
console.log('All tests passed (or stubs — implement the function)');
