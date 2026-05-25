/**
 * 2402. Meeting Rooms III
 *
 * You have n rooms numbered 0 to n-1. Meetings are given sorted by start time.
 * For each meeting, assign it to the available room with the smallest index.
 * If no room is free, delay the meeting until the earliest-ending room becomes free
 * (using the same duration), again choosing the smallest index if tied.
 * Return the room number that hosted the most meetings. If tied, return the smallest index.
 *
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
};

console.assert(mostBooked(2, [[0, 10], [1, 5], [2, 7], [3, 4]]) === 0, "Test 1 failed");
console.assert(mostBooked(3, [[1, 20], [2, 10], [3, 5], [4, 9], [6, 8]]) === 1, "Test 2 failed");
console.assert(mostBooked(1, [[1, 5], [2, 6]]) === 0, "Test 3 failed");
console.assert(mostBooked(2, [[0, 5], [1, 3], [2, 4]]) === 1, "Test 4 failed");
