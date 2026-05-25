/**
 * 92. Reverse Linked List II
 * https://leetcode.com/problems/reverse-linked-list-ii/
 *
 * Given the head of a singly linked list and two integers left and right
 * where left <= right, reverse the nodes of the list from position left
 * to position right, and return the reversed list. Positions are 1-indexed.
 *
 * Example 1: head=[1,2,3,4,5], left=2, right=4  →  [1,4,3,2,5]
 * Example 2: head=[5], left=1, right=1           →  [5]
 *
 * Constraints:
 *   - The number of nodes in the list is n.
 *   - 1 <= n <= 500
 *   - -500 <= Node.val <= 500
 *   - 1 <= left <= right <= n
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {};

// --- Tests ---
console.assert(
  JSON.stringify(listToArray(reverseBetween(arrayToList([1,2,3,4,5]), 2, 4))) === JSON.stringify([1,4,3,2,5]),
  'Test 1 failed: reverse positions 2-4 of [1,2,3,4,5] should give [1,4,3,2,5]'
);

console.assert(
  JSON.stringify(listToArray(reverseBetween(arrayToList([5]), 1, 1))) === JSON.stringify([5]),
  'Test 2 failed: reverse single-node list should give [5]'
);

console.assert(
  JSON.stringify(listToArray(reverseBetween(arrayToList([1,2,3,4,5]), 1, 5))) === JSON.stringify([5,4,3,2,1]),
  'Test 3 failed: reverse entire list [1,2,3,4,5] should give [5,4,3,2,1]'
);

console.assert(
  JSON.stringify(listToArray(reverseBetween(arrayToList([3,5]), 1, 2))) === JSON.stringify([5,3]),
  'Test 4 failed: reverse entire two-node list [3,5] should give [5,3]'
);

console.log('All tests passed!');
