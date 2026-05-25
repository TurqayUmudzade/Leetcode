/**
 * 846. Hand of Straights
 *
 * Alice has a hand of cards, and she wants to rearrange the cards into groups of groupSize
 * consecutive cards. Given an integer array hand and an integer groupSize, return true if
 * she can rearrange the cards, or false otherwise.
 *
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
};

console.assert(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3) === true, "Test 1 failed");
console.assert(isNStraightHand([1, 2, 3, 4, 5], 4) === false, "Test 2 failed");
console.assert(isNStraightHand([1, 2, 3], 3) === true, "Test 3 failed");
console.assert(isNStraightHand([1, 1, 2, 2, 3, 3], 2) === false, "Test 4 failed");
