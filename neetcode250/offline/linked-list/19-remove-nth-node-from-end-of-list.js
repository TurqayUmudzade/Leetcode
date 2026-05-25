/**
 * 19. Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * Given the head of a linked list, remove the nth node from the end of the
 * list and return its head.
 *
 * Example 1: head=[1,2,3,4,5], n=2  →  [1,2,3,5]
 * Example 2: head=[1], n=1          →  []
 * Example 3: head=[1,2], n=1        →  [1]
 *
 * Constraints:
 *   - The number of nodes in the list is sz.
 *   - 1 <= sz <= 30
 *   - 0 <= Node.val <= 100
 *   - 1 <= n <= sz
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {};

// --- Tests ---
console.assert(
  JSON.stringify(listToArray(removeNthFromEnd(arrayToList([1,2,3,4,5]), 2))) === JSON.stringify([1,2,3,5]),
  'Test 1 failed: remove 2nd from end of [1,2,3,4,5] should give [1,2,3,5]'
);

console.assert(
  JSON.stringify(listToArray(removeNthFromEnd(arrayToList([1]), 1))) === JSON.stringify([]),
  'Test 2 failed: remove 1st from end of [1] should give []'
);

console.assert(
  JSON.stringify(listToArray(removeNthFromEnd(arrayToList([1,2]), 1))) === JSON.stringify([1]),
  'Test 3 failed: remove 1st from end of [1,2] should give [1]'
);

console.assert(
  JSON.stringify(listToArray(removeNthFromEnd(arrayToList([1,2,3]), 3))) === JSON.stringify([2,3]),
  'Test 4 failed: remove 3rd from end of [1,2,3] (head) should give [2,3]'
);

console.log('All tests passed!');
