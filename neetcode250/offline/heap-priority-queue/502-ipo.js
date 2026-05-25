/**
 * 502. IPO
 *
 * Suppose LeetCode will start its IPO soon. In order to sell a good price of
 * its shares to Venture Capital, LeetCode would like to work on some projects
 * to increase its capital before the IPO.
 *
 * You are given n projects where the i-th project has a pure profit `profits[i]`
 * and a minimum capital of `capital[i]` is needed to start it.
 *
 * Initially, you have `w` capital. When you finish a project, you obtain its
 * pure profit and the profit is added to your total capital.
 *
 * You can pick at most `k` distinct projects and maximize your final capital.
 *
 * Approach:
 *   1. Sort projects by capital requirement.
 *   2. Use a max-heap of profits for all currently affordable projects.
 *   3. Repeat k times: push all newly affordable projects, greedily pick the
 *      highest profit.
 *
 * Example:
 *   k=2, w=0, profits=[1,2,3], capital=[0,1,1]  → 4
 *   k=3, w=0, profits=[1,2,3], capital=[0,1,2]  → 6
 *
 * Constraints:
 *   1 <= k <= 10^5
 *   0 <= w <= 10^9
 *   n == profits.length == capital.length
 *   1 <= n <= 10^5
 *   0 <= profits[i] <= 10^4
 *   0 <= capital[i] <= 10^9
 */

class MinHeap {
  constructor(cmp = (a,b) => a-b) { this.h=[]; this.cmp=cmp; }
  push(v) { this.h.push(v); let i=this.h.length-1; while(i>0){const p=(i-1)>>1; if(this.cmp(this.h[i],this.h[p])<0){[this.h[i],this.h[p]]=[this.h[p],this.h[i]];i=p;}else break;} }
  pop() { const t=this.h[0],l=this.h.pop(); if(this.h.length){this.h[0]=l;let i=0;while(true){let m=i,a=2*i+1,b=2*i+2; if(a<this.h.length&&this.cmp(this.h[a],this.h[m])<0)m=a; if(b<this.h.length&&this.cmp(this.h[b],this.h[m])<0)m=b; if(m===i)break;[this.h[i],this.h[m]]=[this.h[m],this.h[i]];i=m;}} return t; }
  peek() { return this.h[0]; }
  size() { return this.h.length; }
}

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {

};

// --- Tests ---
console.assert(findMaximizedCapital(2, 0, [1,2,3], [0,1,1]) === 4, 'Test 1 failed');
console.assert(findMaximizedCapital(3, 0, [1,2,3], [0,1,2]) === 6, 'Test 2 failed');
console.assert(findMaximizedCapital(1, 0, [1,2,3], [1,1,2]) === 0, 'Test 3 failed: no affordable project');
console.assert(findMaximizedCapital(3, 0, [1,2,3], [0,0,0]) === 6, 'Test 4 failed');
console.log('All tests passed (or assertions above show failures)');
