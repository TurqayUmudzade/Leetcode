class Leaderboard {
    constructor() {
        this.map = new Map()
    }

    addScore(playerId, score) {
        if (this.map.has(playerId)) score += this.map.get(playerId)
        this.map.set(playerId, score)
    }

    top(k) {
        let c = 0
        let arr = [...this.map.values()].sort((a, b) => b - a)
        for (let i = 0; i < k; i++)
            c += arr[i];
        return c
    }

    reset(playerId) {
        this.map.set(playerId, 0)
    }
}


//a bit more optimal
import {
    MinPriorityQueue
} from '@datastructures-js/priority-queue';

class Leaderboard {
    constructor() {
        this.map = new Map()
    }

    addScore(playerId, score) {
        if (this.map.has(playerId)) score += this.map.get(playerId)
        this.map.set(playerId, score)
    }

    top(k) {
        const heap = new MinPriorityQueue()

        for (const val of this.map.values()) {
            heap.enqueue(val)
            if (heap.size() > k) {
                heap.dequeue()
            }
        }
        let sum = 0
        while (k--) {
            sum += heap.dequeue().element
        }
        return sum
    }

    reset(playerId) {
        this.map.set(playerId, 0)
    }
}

