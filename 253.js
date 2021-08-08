let minMeetingRooms = function (intervals) {
    let starts = [...intervals].sort(function (a, b) {
        return a[0] - b[0];
    });
    let ends = [...intervals].sort(function (a, b) {
        return a[1] - b[1];
    });
    let rooms = 0;
    let end = 0;

    for (let i = 0; i < intervals.length; i++) {
        if (starts[i][0] < ends[end][1]) {
            rooms++;
        } else {
            end++;
        }
    }
    return rooms;
};