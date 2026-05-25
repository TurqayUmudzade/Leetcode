/**
 * 215. Kth Largest Element in an Array
 *
 * Given an integer array nums and an integer k, return the kth largest element.
 * Note: kth largest in sorted order, not kth distinct element.
 *
 * Example:
 *   nums = [3,2,1,5,6,4], k = 2 → 5
 *   nums = [3,2,3,1,2,4,5,5,6], k = 4 → 4
 *
 * Approach: Maintain a min-heap of size k. After processing all elements, the
 * heap's minimum is the kth largest.
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
};

// Tests
console.assert(findKthLargest([3,2,1,5,6,4], 2) === 5, 'should be 5');
console.assert(findKthLargest([3,2,3,1,2,4,5,5,6], 4) === 4, 'should be 4');
console.assert(findKthLargest([1], 1) === 1, 'single element');
console.assert(findKthLargest([7,6,5,4,3,2,1], 3) === 5, 'should be 5');
console.log('215 tests done');
