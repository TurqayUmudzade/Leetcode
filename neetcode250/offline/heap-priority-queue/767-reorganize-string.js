/**
 * 767. Reorganize String
 *
 * Given a string `s`, rearrange the characters of `s` so that any two
 * adjacent characters are not the same. Return any possible rearrangement
 * of `s` or return "" if not possible.
 *
 * Approach: count character frequencies, use a max-heap. At each step pick
 * the most frequent character that differs from the last placed character.
 * If the most frequent equals the last placed, use the second most frequent.
 * If no valid character exists, return "".
 *
 * A rearrangement is impossible when any character appears more than
 * ⌈ n/2 ⌉ times.
 *
 * Example:
 *   s = "aab"   → "aba"
 *   s = "aaab"  → ""
 *   s = "aabb"  → "abab" or "baba"
 *
 * Constraints:
 *   1 <= s.length <= 500
 *   s consists of lowercase English letters.
 */

class MinHeap {
  constructor(cmp = (a,b) => a-b) { this.h=[]; this.cmp=cmp; }
  push(v) { this.h.push(v); let i=this.h.length-1; while(i>0){const p=(i-1)>>1; if(this.cmp(this.h[i],this.h[p])<0){[this.h[i],this.h[p]]=[this.h[p],this.h[i]];i=p;}else break;} }
  pop() { const t=this.h[0],l=this.h.pop(); if(this.h.length){this.h[0]=l;let i=0;while(true){let m=i,a=2*i+1,b=2*i+2; if(a<this.h.length&&this.cmp(this.h[a],this.h[m])<0)m=a; if(b<this.h.length&&this.cmp(this.h[b],this.h[m])<0)m=b; if(m===i)break;[this.h[i],this.h[m]]=[this.h[m],this.h[i]];i=m;}} return t; }
  peek() { return this.h[0]; }
  size() { return this.h.length; }
}

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {

};

// Helper: verify no two adjacent characters are equal
function noAdjacent(str) {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i-1]) return false;
  }
  return true;
}

// --- Tests ---
const r1 = reorganizeString("aab");
console.assert(r1 === "aba" || (r1.length === 3 && noAdjacent(r1)), 'Test 1 failed: ' + r1);

console.assert(reorganizeString("aaab") === "", 'Test 2 failed');

const r3 = reorganizeString("aabb");
console.assert(r3.length === 4 && noAdjacent(r3), 'Test 3 failed: ' + r3);

const r4 = reorganizeString("a");
console.assert(r4 === "a", 'Test 4 failed');

console.log('All tests passed (or assertions above show failures)');
