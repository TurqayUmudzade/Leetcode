/**
 * 621. Task Scheduler
 *
 * Given a list of CPU tasks (A-Z) and a cooldown n, find the minimum number
 * of intervals to finish all tasks. Between two same tasks there must be at
 * least n intervals (idle or other tasks).
 *
 * Example:
 *   tasks = ["A","A","A","B","B","B"], n = 2 → 8
 *   tasks = ["A","A","A","B","B","B"], n = 0 → 6
 *
 * Approach: Use a max-heap of (count) and a queue of (count, availableTime).
 * Each cycle, pick the task with the highest count that is available.
 *
 * Time: O(n * t) where t = number of unique tasks, but effectively O(total intervals)
 * Space: O(1) since at most 26 tasks
 */

class MinHeap {
  constructor(comparator = (a, b) => a - b) { this.heap = []; this.cmp = comparator; }
  push(val) { this.heap.push(val); this._bubbleUp(this.heap.length - 1); }
  pop() { const top = this.heap[0]; const last = this.heap.pop(); if (this.heap.length) { this.heap[0] = last; this._sinkDown(0); } return top; }
  peek() { return this.heap[0]; }
  size() { return this.heap.length; }
  _bubbleUp(i) { while (i > 0) { const p = (i-1)>>1; if (this.cmp(this.heap[i], this.heap[p]) < 0) { [this.heap[i],this.heap[p]]=[this.heap[p],this.heap[i]]; i=p; } else break; } }
  _sinkDown(i) { const n = this.heap.length; while (true) { let m=i,l=2*i+1,r=2*i+2; if(l<n&&this.cmp(this.heap[l],this.heap[m])<0)m=l; if(r<n&&this.cmp(this.heap[r],this.heap[m])<0)m=r; if(m===i)break; [this.heap[i],this.heap[m]]=[this.heap[m],this.heap[i]]; i=m; } }
}

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
};

// Tests
console.assert(leastInterval(["A","A","A","B","B","B"], 2) === 8, 'should be 8');
console.assert(leastInterval(["A","A","A","B","B","B"], 0) === 6, 'no cooldown → 6');
console.assert(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2) === 16, 'should be 16');
console.assert(leastInterval(["A"], 5) === 1, 'single task → 1');
console.log('621 tests done');
