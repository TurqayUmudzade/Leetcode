/**
 * 141. Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle/
 *
 * Given head, the head of a linked list, determine if the linked list has a
 * cycle in it. There is a cycle if some node in the list can be reached again
 * by continuously following the next pointer.
 *
 * Return true if there is a cycle in the linked list, otherwise false.
 *
 * Example 1: head=[3,2,0,-4], tail connects to index 1  →  true
 * Example 2: head=[1,2], tail connects to index 0       →  true
 * Example 3: head=[1]                                   →  false
 *
 * Constraints:
 *   - The number of nodes in the list is in range [0, 10^4].
 *   - -10^5 <= Node.val <= 10^5
 *   - pos is -1 or a valid index in the list (-1 means no cycle).
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {};

// --- Tests ---

// Test 1: no cycle — [1,2,3,4]
const noCycle = arrayToList([1,2,3,4]);
console.assert(hasCycle(noCycle) === false, 'Test 1 failed: list without cycle should return false');

// Test 2: null head — no cycle
console.assert(hasCycle(null) === false, 'Test 2 failed: null head should return false');

// Test 3: cycle — tail.next → second node (index 1)
const n1 = new ListNode(3);
const n2 = new ListNode(2);
const n3 = new ListNode(0);
const n4 = new ListNode(-4);
n1.next = n2; n2.next = n3; n3.next = n4; n4.next = n2; // cycle to index 1
console.assert(hasCycle(n1) === true, 'Test 3 failed: list with cycle should return true');

// Test 4: single node with self-loop
const lone = new ListNode(1);
lone.next = lone;
console.assert(hasCycle(lone) === true, 'Test 4 failed: single-node self-loop should return true');

console.log('All tests passed!');
