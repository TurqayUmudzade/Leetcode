/**
 * 973. K Closest Points to Origin
 *
 * Given an array of points on the X-Y plane and an integer k, return the k
 * closest points to the origin (0, 0). Distance is Euclidean.
 * The answer may be returned in any order.
 *
 * Example:
 *   points = [[1,3],[-2,2]], k = 1 → [[-2,2]]
 *
 * Approach: Use a max-heap of size k keyed by squared distance. For each point,
 * push it; if heap exceeds k, pop the farthest.
 *
 * Time: O(n log k)
 * Space: O(k)
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
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
};

// Helper: sort and stringify for comparison
const s = arr => JSON.stringify(arr.map(p => p.slice().sort((a,b)=>a-b)).sort((a,b)=>a[0]-b[0]||a[1]-b[1]));

// Tests
console.assert(s(kClosest([[1,3],[-2,2]], 1)) === s([[-2,2]]), 'test1');
console.assert(s(kClosest([[3,3],[5,-1],[-2,4]], 2)) === s([[3,3],[-2,4]]), 'test2');
console.assert(s(kClosest([[0,1],[1,0]], 2)) === s([[0,1],[1,0]]), 'test3');
console.assert(s(kClosest([[1,0]], 1)) === s([[1,0]]), 'test4');
console.log('973 tests done');
