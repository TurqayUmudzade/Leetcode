/**
 * 1046. Last Stone Weight
 *
 * We have a collection of stones, each with a positive integer weight.
 * Each turn, smash the two heaviest stones together:
 *   - If equal, both are destroyed.
 *   - If unequal, the smaller is destroyed and the larger gets weight = diff.
 * Return the weight of the last remaining stone, or 0 if none remain.
 *
 * Example:
 *   stones = [2,7,4,1,8,1] → 1
 *
 * Approach: Use a max-heap (negate values in a min-heap). Each round pop two,
 * push back the difference if nonzero.
 *
 * Time: O(n log n)
 * Space: O(n)
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
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
};

// Tests
console.assert(lastStoneWeight([2, 7, 4, 1, 8, 1]) === 1, 'should be 1');
console.assert(lastStoneWeight([1]) === 1, 'single stone should be 1');
console.assert(lastStoneWeight([2, 2]) === 0, 'equal stones → 0');
console.assert(lastStoneWeight([3, 7, 8]) === 2, 'should be 2');
console.log('1046 tests done');
