/**
 * 143. Reorder List
 * https://leetcode.com/problems/reorder-list/
 *
 * You are given the head of a singly linked-list:
 *   L0 → L1 → … → Ln-1 → Ln
 * Reorder it to:
 *   L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
 *
 * You may not modify the values in the list's nodes. Only nodes themselves may
 * be changed. The function modifies the list in-place (return value ignored).
 *
 * Example 1: [1,2,3,4]   →  [1,4,2,3]
 * Example 2: [1,2,3,4,5] →  [1,5,2,4,3]
 *
 * Constraints:
 *   - The number of nodes in the list is in range [1, 5 * 10^4].
 *   - 1 <= Node.val <= 1000
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {ListNode} head
 * @return {void} — modifies list in-place
 */
var reorderList = function(head) {};

// --- Tests ---

// Test 1: [1,2,3,4,5] → [1,5,2,4,3]
const l1 = arrayToList([1,2,3,4,5]);
reorderList(l1);
console.assert(
  JSON.stringify(listToArray(l1)) === JSON.stringify([1,5,2,4,3]),
  'Test 1 failed: [1,2,3,4,5] should reorder to [1,5,2,4,3]'
);

// Test 2: [1,2,3,4] → [1,4,2,3]
const l2 = arrayToList([1,2,3,4]);
reorderList(l2);
console.assert(
  JSON.stringify(listToArray(l2)) === JSON.stringify([1,4,2,3]),
  'Test 2 failed: [1,2,3,4] should reorder to [1,4,2,3]'
);

// Test 3: single node unchanged
const l3 = arrayToList([1]);
reorderList(l3);
console.assert(
  JSON.stringify(listToArray(l3)) === JSON.stringify([1]),
  'Test 3 failed: [1] should remain [1]'
);

// Test 4: two nodes unchanged
const l4 = arrayToList([1,2]);
reorderList(l4);
console.assert(
  JSON.stringify(listToArray(l4)) === JSON.stringify([1,2]),
  'Test 4 failed: [1,2] should remain [1,2]'
);

console.log('All tests passed!');
