import {
    MinPriorityQueue
} from '@datastructures-js/priority-queue';

class StockPrice {
    times = new Map()
    cur = 0
    heap = new MinPriorityQueue()
    constructor() {
    }

    update(timestamp, price) {
        this.heap.enqueue(price)
        if (!this.times.has(timestamp)) {
            this.times.set(timestamp, price)
        } else {
            let oldPrice = this.times.get(timestamp)
            let arr = this.heap.toArray()
            let temp = []
            for (let i = 0; i < arr.length; i++) {
                let val = this.heap.dequeue().element
                if (oldPrice == arr[i].element) {
                    break
                }
                temp.push(val)
            }

            for (const n of temp) {
                this.heap.enqueue(n)
            }

            this.times.set(timestamp, price)
        }
        this.cur = Math.max(this.cur, timestamp)
    }

    current() {
        return this.times.get(this.cur)
    }

    maximum() {
        return this.heap.back().element
    }

    minimum() {
        return this.heap.front().element
    }
}

let stockPrice = new StockPrice();
stockPrice.update(1, 10)
stockPrice.update(2, 5)
console.log(stockPrice.current());
console.log(stockPrice.maximum());
stockPrice.update(1, 3)
// console.log(stockPrice.heap.toArray());
console.log(stockPrice.maximum());
stockPrice.update(4, 2)
console.log(stockPrice.minimum());