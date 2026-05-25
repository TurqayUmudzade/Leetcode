/**
 * 253. Meeting Rooms II
 *
 * Given an array of meeting time intervals where intervals[i] = [starti, endi],
 * return the minimum number of conference rooms required to hold all meetings.
 * Meetings that start exactly when another ends do not conflict.
 *
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
};

console.assert(minMeetingRooms([[0, 30], [5, 10], [15, 20]]) === 2, "Test 1 failed");
console.assert(minMeetingRooms([[7, 10], [2, 4]]) === 1, "Test 2 failed");
console.assert(minMeetingRooms([[1, 5], [2, 6], [3, 7]]) === 3, "Test 3 failed");
console.assert(minMeetingRooms([[1, 4], [2, 5], [7, 9]]) === 2, "Test 4 failed");
