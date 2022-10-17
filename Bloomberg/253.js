import {
    MinPriorityQueue
} from '@datastructures-js/priority-queue';

const minMeetingRooms = (intervals) => {

    intervals.sort((a, b) => a[0] - b[0]);
    let minHeap = new MinPriorityQueue()

    minHeap.enqueue(intervals[0], intervals[0][1])

    for (let i = 1; i < intervals.length; i++) {

        let [earliestEndingStart, earliestEndingEnd] = minHeap.dequeue().element
        let [curStart, curEnd] = intervals[i]

        if (earliestEndingEnd > curStart) {
            minHeap.enqueue(intervals[i], curEnd)
        } else {
            earliestEndingEnd = intervals[i][1]
        }
        minHeap.enqueue([earliestEndingStart, earliestEndingEnd], earliestEndingEnd)

    }

    return minHeap.size();
};

let intervals = [[0, 30], [5, 10], [15, 20]]
intervals = [[1, 5], [8, 9], [8, 9]]
console.log(minMeetingRooms(intervals));