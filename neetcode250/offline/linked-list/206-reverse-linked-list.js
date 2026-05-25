/**
 * 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * Given the head of a singly linked list, reverse the list, and return the
 * reversed list.
 *
 * Example 1: head = [1,2,3,4,5]  →  [5,4,3,2,1]
 * Example 2: head = [1,2]        →  [2,1]
 * Example 3: head = []           →  []
 *
 * Constraints:
 *   - The number of nodes in the list is in range [0, 5000].
 *   - -5000 <= Node.val <= 5000
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {};

// --- Tests ---
console.assert(
  JSON.stringify(listToArray(reverseList(arrayToList([1,2,3,4,5])))) === JSON.stringify([5,4,3,2,1]),
  'Test 1 failed: [1,2,3,4,5] should reverse to [5,4,3,2,1]'
);

console.assert(
  JSON.stringify(listToArray(reverseList(arrayToList([1,2])))) === JSON.stringify([2,1]),
  'Test 2 failed: [1,2] should reverse to [2,1]'
);

console.assert(
  JSON.stringify(listToArray(reverseList(arrayToList([])))) === JSON.stringify([]),
  'Test 3 failed: [] should reverse to []'
);

console.assert(
  JSON.stringify(listToArray(reverseList(arrayToList([42])))) === JSON.stringify([42]),
  'Test 4 failed: [42] should reverse to [42]'
);

console.log('All tests passed!');
