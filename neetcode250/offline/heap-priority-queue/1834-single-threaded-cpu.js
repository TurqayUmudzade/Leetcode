/**
 * 1834. Single-Threaded CPU
 *
 * You are given `n` tasks labeled from 0 to n-1 represented by a 2D integer
 * array `tasks`, where tasks[i] = [enqueueTime_i, processingTime_i] means
 * that the i-th task will be available to process at enqueueTime_i and will
 * take processingTime_i units of time to finish processing.
 *
 * The CPU processes tasks following these rules:
 *   1. If the CPU is idle and there are no available tasks, the CPU waits
 *      until the next available task becomes available, then picks that task.
 *   2. If the CPU is idle and there are available tasks, pick the available
 *      task with the shortest processing time. If there is a tie, pick the
 *      task with the smallest index.
 *   3. Once a task is started it runs to completion (no preemption).
 *
 * Return the order in which the CPU will process the tasks.
 *
 * Approach: sort tasks by enqueue time, use a min-heap (processingTime, index)
 * for available tasks, simulate time.
 *
 * Example:
 *   tasks = [[1,2],[2,4],[3,2],[4,1]]  → [0,2,3,1]
 *   tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]  → [4,3,2,0,1]
 *
 * Constraints:
 *   tasks.length == n
 *   1 <= n <= 10^5
 *   1 <= enqueueTime_i, processingTime_i <= 10^9
 */

class MinHeap {
  constructor(cmp = (a,b) => a-b) { this.h=[]; this.cmp=cmp; }
  push(v) { this.h.push(v); let i=this.h.length-1; while(i>0){const p=(i-1)>>1; if(this.cmp(this.h[i],this.h[p])<0){[this.h[i],this.h[p]]=[this.h[p],this.h[i]];i=p;}else break;} }
  pop() { const t=this.h[0],l=this.h.pop(); if(this.h.length){this.h[0]=l;let i=0;while(true){let m=i,a=2*i+1,b=2*i+2; if(a<this.h.length&&this.cmp(this.h[a],this.h[m])<0)m=a; if(b<this.h.length&&this.cmp(this.h[b],this.h[m])<0)m=b; if(m===i)break;[this.h[i],this.h[m]]=[this.h[m],this.h[i]];i=m;}} return t; }
  peek() { return this.h[0]; }
  size() { return this.h.length; }
}

/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {

};

// --- Tests ---
console.assert(
  JSON.stringify(getOrder([[1,2],[2,4],[3,2],[4,1]])) === JSON.stringify([0,2,3,1]),
  'Test 1 failed'
);
console.assert(
  JSON.stringify(getOrder([[7,10],[7,12],[7,5],[7,4],[7,2]])) === JSON.stringify([4,3,2,0,1]),
  'Test 2 failed'
);
console.assert(
  JSON.stringify(getOrder([[1,1],[2,2],[3,3]])) === JSON.stringify([0,1,2]),
  'Test 3 failed'
);
console.assert(
  JSON.stringify(getOrder([[1,2]])) === JSON.stringify([0]),
  'Test 4 failed'
);
console.log('All tests passed (or assertions above show failures)');
