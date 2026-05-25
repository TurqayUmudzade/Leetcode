/**
 * 252. Meeting Rooms
 *
 * Given an array of meeting time intervals where intervals[i] = [starti, endi],
 * return true if a person could attend all meetings (no two meetings overlap),
 * or false otherwise. Two meetings overlap if one starts before the other ends.
 *
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
};

console.assert(canAttendMeetings([[0, 30], [5, 10], [15, 20]]) === false, "Test 1 failed");
console.assert(canAttendMeetings([[7, 10], [2, 4]]) === true, "Test 2 failed");
console.assert(canAttendMeetings([[5, 8], [9, 15]]) === true, "Test 3 failed");
console.assert(canAttendMeetings([]) === true, "Test 4 failed");
