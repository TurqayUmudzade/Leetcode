import {
    MinPriorityQueue
} from '@datastructures-js/priority-queue';
let minMeetingRooms1 = function (intervals) {
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



const minMeetingRooms = (intervals) => {

    intervals.sort((a, b) => a[0] - b[0]);
    let minHeap = new MinPriorityQueue()

    minHeap.enqueue(intervals[0], intervals[0][1])

    for (let i = 1; i < intervals.length; i++) {

        let earlyEnd = minHeap.dequeue().element
        if (intervals[i][0] >= earlyEnd[1]) earlyEnd[1] = intervals[i][1]
        else minHeap.enqueue(intervals[i], intervals[i][1])

        minHeap.enqueue(earlyEnd, earlyEnd[1])
    }

    return minHeap.size();
};

let intervals = [[0, 30], [5, 10], [15, 20]]

console.log(minMeetingRooms(intervals))