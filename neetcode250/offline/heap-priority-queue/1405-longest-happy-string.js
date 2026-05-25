/**
 * 1405. Longest Happy String
 *
 * A string s is called happy if:
 *   - s only contains the letters 'a', 'b', and 'c'.
 *   - s does not contain "aaa", "bbb", or "ccc" as a substring.
 *   - s contains at most a occurrences of the letter 'a'.
 *   - s contains at most b occurrences of the letter 'b'.
 *   - s contains at most c occurrences of the letter 'c'.
 *
 * Given three integers a, b, and c, return the longest possible happy string.
 * If there are multiple longest happy strings, return any of them.
 * If there is no such string, return the empty string "".
 *
 * Approach: greedy with a max-heap. Always try to place 2 of the most
 * frequent character, fall back to 1 if that would create 3 consecutive.
 * If the most frequent equals the last two, use the second most frequent.
 *
 * Example:
 *   a=1, b=1, c=7  → a string of length 9, e.g. "ccaccbcc"
 *   a=7, b=1, c=0  → "aabaa" (any valid happy string)
 *
 * Constraints:
 *   0 <= a, b, c <= 100
 *   a + b + c > 0
 */

class MinHeap {
  constructor(cmp = (a,b) => a-b) { this.h=[]; this.cmp=cmp; }
  push(v) { this.h.push(v); let i=this.h.length-1; while(i>0){const p=(i-1)>>1; if(this.cmp(this.h[i],this.h[p])<0){[this.h[i],this.h[p]]=[this.h[p],this.h[i]];i=p;}else break;} }
  pop() { const t=this.h[0],l=this.h.pop(); if(this.h.length){this.h[0]=l;let i=0;while(true){let m=i,a=2*i+1,b=2*i+2; if(a<this.h.length&&this.cmp(this.h[a],this.h[m])<0)m=a; if(b<this.h.length&&this.cmp(this.h[b],this.h[m])<0)m=b; if(m===i)break;[this.h[i],this.h[m]]=[this.h[m],this.h[i]];i=m;}} return t; }
  peek() { return this.h[0]; }
  size() { return this.h.length; }
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {

};

// Helper: check no three consecutive same chars
function noTriple(str) {
  for (let i = 2; i < str.length; i++) {
    if (str[i] === str[i-1] && str[i] === str[i-2]) return false;
  }
  return true;
}

// --- Tests ---
const s1 = longestDiverseString(1, 1, 7);
// Max possible length = 1+1+min(7, 1+1+1)=9 when a=1,b=1,c=7
console.assert(s1.length === 9 && noTriple(s1), 'Test 1 failed: ' + s1);

const s2 = longestDiverseString(7, 1, 0);
console.assert(noTriple(s2) && s2.length > 0, 'Test 2 failed: ' + s2);

const s3 = longestDiverseString(2, 2, 2);
console.assert(s3.length === 6 && noTriple(s3), 'Test 3 failed: ' + s3);

const s4 = longestDiverseString(0, 0, 1);
console.assert(s4 === 'c', 'Test 4 failed: ' + s4);

console.log('All tests passed (or assertions above show failures)');
