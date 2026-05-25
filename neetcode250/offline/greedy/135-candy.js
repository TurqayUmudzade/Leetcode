/**
 * 135. Candy
 *
 * There are n children standing in a line with ratings. You must give each child at least
 * one candy, and children with a higher rating than their immediate neighbor must receive
 * more candies than that neighbor. Return the minimum total number of candies needed.
 *
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
};

console.assert(candy([1, 0, 2]) === 5, "Test 1 failed");
console.assert(candy([1, 2, 2]) === 4, "Test 2 failed");
console.assert(candy([1, 2, 87, 87, 87, 2, 1]) === 13, "Test 3 failed");
console.assert(candy([1]) === 1, "Test 4 failed");
