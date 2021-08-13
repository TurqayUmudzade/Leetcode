const findKthLargest1 = (arr, k) => arr.sort((a, b) => b - a)[k - 1]

import {
    MinPriorityQueue
} from '@datastructures-js/priority-queue';

function findKthLargest(arr, k) {

    let heap = new MinPriorityQueue()

    for (let i = 0; i < arr.length; i++) {
        heap.enqueue(arr[i])
        if (heap.size() > k) heap.dequeue

    }


    return heap.front().element
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));