var PriorityQueue = require('priorityqueuejs');




var topKFrequent = function (arr, k) {

    if (k == arr.length) return arr

    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1)
        else map.set(arr[i], 1)
    }

    let heap = new PriorityQueue((a, b) => map.get(a) - map.get(b))

    for (const n of map.keys()) {
        heap.enq(n)
        if (heap.size() > k) heap.deq()
    }

    let top = new Array(k)

    for (let i = k - 1; i >= 0; --i) {
        top[i] = heap.deq()
    }
    return top
};


console.log(topKFrequent([2, 1, 1, 1, 2, 2, 3], 2));