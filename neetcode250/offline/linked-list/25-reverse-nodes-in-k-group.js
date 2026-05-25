/**
 * 25. Reverse Nodes in k-Group
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 *
 * Given the head of a linked list, reverse the nodes of the list k at a time,
 * and return the modified list. k is a positive integer and is less than or
 * equal to the length of the linked list. If the number of nodes is not a
 * multiple of k then left-out nodes at the end should remain as is.
 *
 * You may not alter the values in the list's nodes, only nodes themselves
 * may be changed.
 *
 * Example 1: head=[1,2,3,4,5], k=2  →  [2,1,4,3,5]
 * Example 2: head=[1,2,3,4,5], k=3  →  [3,2,1,4,5]
 *
 * Constraints:
 *   - The number of nodes in the list is n.
 *   - 1 <= k <= n <= 5000
 *   - 0 <= Node.val <= 1000
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {};

// --- Tests ---
console.assert(
  JSON.stringify(listToArray(reverseKGroup(arrayToList([1,2,3,4,5]), 2))) === JSON.stringify([2,1,4,3,5]),
  'Test 1 failed: k=2 on [1,2,3,4,5] should give [2,1,4,3,5]'
);

console.assert(
  JSON.stringify(listToArray(reverseKGroup(arrayToList([1,2,3,4,5]), 3))) === JSON.stringify([3,2,1,4,5]),
  'Test 2 failed: k=3 on [1,2,3,4,5] should give [3,2,1,4,5]'
);

console.assert(
  JSON.stringify(listToArray(reverseKGroup(arrayToList([1,2,3,4,5]), 1))) === JSON.stringify([1,2,3,4,5]),
  'Test 3 failed: k=1 should leave list unchanged'
);

console.assert(
  JSON.stringify(listToArray(reverseKGroup(arrayToList([1,2,3,4]), 4))) === JSON.stringify([4,3,2,1]),
  'Test 4 failed: k=4 (full list length) on [1,2,3,4] should give [4,3,2,1]'
);

console.log('All tests passed!');
