const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

var connectSticks = function (arr) {
    let cost = 0
    let minHeap = new MinPriorityQueue()
    for (let i = 1; i < arr.length; i++)
        minHeap.enqueue(arr[i])

    while (minHeap.size() > 1) {
        let a = minHeap.dequeue().element
        let b = minHeap.dequeue().element
        cost += a + b
        minHeap.enqueue(a + b)
    }
    return cost
};