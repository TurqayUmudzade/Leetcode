/**
 * 295. Find Median from Data Stream
 *
 * The MedianFinder class supports two operations:
 *
 *   addNum(num): Adds a number into the data structure.
 *   findMedian():
 *     Returns the median of all elements so far.
 *     If the total number of elements is even, the median is the mean of the
 *     two middle values.
 *
 * Approach: maintain two heaps:
 *   - `lower`: a max-heap (negate values in a min-heap) for the smaller half.
 *   - `upper`: a min-heap for the larger half.
 * Keep |lower| >= |upper| and lower.max <= upper.min.
 * Median = lower.max when sizes differ, else (lower.max + upper.min) / 2.
 *
 * Example:
 *   addNum(1) → findMedian() = 1.0
 *   addNum(2) → findMedian() = 1.5
 *   addNum(3) → findMedian() = 2.0
 *
 * Constraints:
 *   -10^5 <= num <= 10^5
 *   At most 5 * 10^4 calls to addNum and findMedian.
 *   findMedian is called at least once before being called again after addNum.
 */

class MinHeap {
  constructor(cmp = (a,b) => a-b) { this.h=[]; this.cmp=cmp; }
  push(v) { this.h.push(v); let i=this.h.length-1; while(i>0){const p=(i-1)>>1; if(this.cmp(this.h[i],this.h[p])<0){[this.h[i],this.h[p]]=[this.h[p],this.h[i]];i=p;}else break;} }
  pop() { const t=this.h[0],l=this.h.pop(); if(this.h.length){this.h[0]=l;let i=0;while(true){let m=i,a=2*i+1,b=2*i+2; if(a<this.h.length&&this.cmp(this.h[a],this.h[m])<0)m=a; if(b<this.h.length&&this.cmp(this.h[b],this.h[m])<0)m=b; if(m===i)break;[this.h[i],this.h[m]]=[this.h[m],this.h[i]];i=m;}} return t; }
  peek() { return this.h[0]; }
  size() { return this.h.length; }
}

class MedianFinder {
  constructor() {

  }

  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {

  }

  /**
   * @return {number}
   */
  findMedian() {

  }
}

// --- Tests ---
const mf = new MedianFinder();
mf.addNum(1);
console.assert(mf.findMedian() === 1.0, 'Test 1 failed: ' + mf.findMedian());

mf.addNum(2);
console.assert(mf.findMedian() === 1.5, 'Test 2 failed: ' + mf.findMedian());

mf.addNum(3);
console.assert(mf.findMedian() === 2.0, 'Test 3 failed: ' + mf.findMedian());

// Additional: even count with negatives
const mf2 = new MedianFinder();
mf2.addNum(-1);
mf2.addNum(-2);
mf2.addNum(-3);
mf2.addNum(-4);
console.assert(mf2.findMedian() === -2.5, 'Test 4 failed: ' + mf2.findMedian());

console.log('All tests passed (or assertions above show failures)');
