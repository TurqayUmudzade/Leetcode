/**
 * 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by
 * splicing together the nodes of the first two lists. Return the head of
 * the merged linked list.
 *
 * Example 1: list1=[1,2,4], list2=[1,3,4]  →  [1,1,2,3,4,4]
 * Example 2: list1=[], list2=[]            →  []
 * Example 3: list1=[], list2=[0]           →  [0]
 *
 * Constraints:
 *   - The number of nodes in both lists is in range [0, 50].
 *   - -100 <= Node.val <= 100
 *   - Both list1 and list2 are sorted in non-decreasing order.
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {};

// --- Tests ---
console.assert(
  JSON.stringify(listToArray(mergeTwoLists(arrayToList([1,2,4]), arrayToList([1,3,4])))) === JSON.stringify([1,1,2,3,4,4]),
  'Test 1 failed: [1,2,4]+[1,3,4] should merge to [1,1,2,3,4,4]'
);

console.assert(
  JSON.stringify(listToArray(mergeTwoLists(arrayToList([]), arrayToList([])))) === JSON.stringify([]),
  'Test 2 failed: []+[] should merge to []'
);

console.assert(
  JSON.stringify(listToArray(mergeTwoLists(arrayToList([]), arrayToList([0])))) === JSON.stringify([0]),
  'Test 3 failed: []+[0] should merge to [0]'
);

console.assert(
  JSON.stringify(listToArray(mergeTwoLists(arrayToList([1,3,5]), arrayToList([2,4,6])))) === JSON.stringify([1,2,3,4,5,6]),
  'Test 4 failed: [1,3,5]+[2,4,6] should merge to [1,2,3,4,5,6]'
);

console.log('All tests passed!');
