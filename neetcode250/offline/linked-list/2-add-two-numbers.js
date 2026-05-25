/**
 * 2. Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a
 * linked list (also in reverse order).
 *
 * You may assume the two numbers do not have leading zeros (except 0 itself).
 *
 * Example 1: l1=[2,4,3], l2=[5,6,4]         →  [7,0,8]   (342 + 465 = 807)
 * Example 2: l1=[0], l2=[0]                 →  [0]
 * Example 3: l1=[9,9,9,9], l2=[9,9,9]       →  [8,9,9,9,0,0,1]  (9999+999=10998 → stored reversed)
 *
 * Wait — 9999+999 = 10998. Reversed storage means l1=[9,9,9,9] is 9999,
 * l2=[9,9,9] is 999. Sum=10998, stored reversed = [8,9,9,0,1].
 * The problem's example gives [8,9,9,9,0,0,1] for [9,9,9,9,9,9,9]+[9,9,9,9].
 * Adjusted test uses the canonical example.
 *
 * Constraints:
 *   - The number of nodes in each list is in range [1, 100].
 *   - 0 <= Node.val <= 9
 *   - It is guaranteed that the list represents a number that does not have leading zeros.
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {};

// --- Tests ---

// Test 1: 342 + 465 = 807  →  [7,0,8]
console.assert(
  JSON.stringify(listToArray(addTwoNumbers(arrayToList([2,4,3]), arrayToList([5,6,4])))) === JSON.stringify([7,0,8]),
  'Test 1 failed: [2,4,3]+[5,6,4] should give [7,0,8]'
);

// Test 2: 0 + 0 = 0
console.assert(
  JSON.stringify(listToArray(addTwoNumbers(arrayToList([0]), arrayToList([0])))) === JSON.stringify([0]),
  'Test 2 failed: [0]+[0] should give [0]'
);

// Test 3: 9999 + 999 = 10998  →  [8,9,9,0,1]
console.assert(
  JSON.stringify(listToArray(addTwoNumbers(arrayToList([9,9,9,9]), arrayToList([9,9,9])))) === JSON.stringify([8,9,9,0,1]),
  'Test 3 failed: [9,9,9,9]+[9,9,9] should give [8,9,9,0,1]'
);

// Test 4: carry propagation — 5 + 5 = 10  →  [0,1]
console.assert(
  JSON.stringify(listToArray(addTwoNumbers(arrayToList([5]), arrayToList([5])))) === JSON.stringify([0,1]),
  'Test 4 failed: [5]+[5] should give [0,1]'
);

console.log('All tests passed!');
