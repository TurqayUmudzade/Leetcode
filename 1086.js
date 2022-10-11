import {
    MinPriorityQueue
} from '@datastructures-js/priority-queue';



const highFive = (arr) => {
    let map = new Map()

    for (let [name, grade] of arr) {
        if (map.has(name)) {
            const heap = map.get(name)
            heap.enqueue(grade)
            if (heap.size() > 5) heap.dequeue()

        } else {
            const heap = new MinPriorityQueue()
            heap.enqueue(grade)
            map.set(name, heap)
        }
    }

    let out = []
    for (const [key, heap] of map) {
        let topFive = 0
        heap.toArray().forEach(element => {
            topFive += element.element
        });
        out.push([key, Math.floor(topFive / 5)])
    }

    out.sort((a, b) => a[0] - b[0])

    return out
}


let items = [[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]]

console.log(highFive(items));