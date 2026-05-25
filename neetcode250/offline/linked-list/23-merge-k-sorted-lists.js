/**
 * 23. Merge K Sorted Lists
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * You are given an array of k linked-lists, each linked-list is sorted in
 * ascending order. Merge all the linked-lists into one sorted linked-list
 * and return it.
 *
 * Example 1: [[1,4,5],[1,3,4],[2,6]]  →  [1,1,2,3,4,4,5,6]
 * Example 2: []                       →  []
 * Example 3: [[]]                     →  []
 *
 * Constraints:
 *   - k == lists.length
 *   - 0 <= k <= 10^4
 *   - 0 <= lists[i].length <= 500
 *   - -10^4 <= lists[i][j] <= 10^4
 *   - lists[i] is sorted in ascending order.
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {};

// --- Tests ---
console.assert(
  JSON.stringify(listToArray(mergeKLists(
    [[1,4,5],[1,3,4],[2,6]].map(arrayToList)
  ))) === JSON.stringify([1,1,2,3,4,4,5,6]),
  'Test 1 failed: [[1,4,5],[1,3,4],[2,6]] should merge to [1,1,2,3,4,4,5,6]'
);

console.assert(
  JSON.stringify(listToArray(mergeKLists([]))) === JSON.stringify([]),
  'Test 2 failed: empty lists array should return empty list'
);

console.assert(
  JSON.stringify(listToArray(mergeKLists([arrayToList([])]))) === JSON.stringify([]),
  'Test 3 failed: single empty list should return empty list'
);

console.assert(
  JSON.stringify(listToArray(mergeKLists(
    [[1,5],[2,4],[3]].map(arrayToList)
  ))) === JSON.stringify([1,2,3,4,5]),
  'Test 4 failed: [[1,5],[2,4],[3]] should merge to [1,2,3,4,5]'
);

console.log('All tests passed!');
