/**
 * 703. Kth Largest Element in a Stream
 *
 * Design a class that finds the kth largest element in a stream.
 * KthLargest(k, nums) initializes with k and an initial array.
 * add(val) appends val to the stream and returns the kth largest element.
 *
 * Example:
 *   k=3, nums=[4,5,8,2]
 *   add(3) → 4
 *   add(5) → 5
 *   add(10) → 8
 *   add(9)  → 8
 *   add(4)  → 8
 *
 * Approach: Maintain a min-heap of size k. The heap's minimum is the kth largest.
 *
 * Time: O(log k) per add
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

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
  }
}

// Tests
const kl = new KthLargest(3, [4, 5, 8, 2]);
console.assert(kl.add(3) === 4, 'add(3) should be 4');
console.assert(kl.add(5) === 5, 'add(5) should be 5');
console.assert(kl.add(10) === 8, 'add(10) should be 8');
console.assert(kl.add(9) === 8, 'add(9) should be 8');
console.assert(kl.add(4) === 8, 'add(4) should be 8');
console.log('703 tests done');
