import {
    MinPriorityQueue
} from '@datastructures-js/priority-queue';

var topKFrequent = function (arr, k) {

    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1)
        else map.set(arr[i], 1)
    }

    let heap = new MinPriorityQueue()
    for (const [key, value] of map.entries()) {
        heap.enqueue(key, value)
        if (heap.size() > k) heap.dequeue()
    }

    let ans = []
    for (let i = k - 1; i >= 0; i--)  ans[i] = heap.dequeue().element


    return ans
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
