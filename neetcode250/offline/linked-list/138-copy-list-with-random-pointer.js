/**
 * 138. Copy List with Random Pointer
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 *
 * A linked list of length n is given such that each node contains an
 * additional random pointer, which could point to any node in the list,
 * or null. Construct a deep copy of the list.
 *
 * The deep copy must consist of exactly n brand new nodes where each new
 * node has its value set to the value of its corresponding original node.
 * Both the next and random pointer of the new nodes should point to new
 * nodes in the copied list such that the pointers in the original and
 * copied list represent the same state. None of the pointers in the new
 * list should point to nodes in the original list.
 *
 * Example 1: [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * Example 2: [[1,1],[2,1]]
 *
 * Constraints:
 *   - 0 <= n <= 1000
 *   - -10^4 <= Node.val <= 10^4
 *   - Node.random is null or points to some node in the linked list.
 */

function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function listToArray(head) { const r=[]; while(head){r.push(head.val);head=head.next;} return r; }
function arrayToList(arr) { let d=new ListNode(0),c=d; for(const v of arr){c.next=new ListNode(v);c=c.next;} return d.next; }

function Node(val, next, random) {
  this.val = val;
  this.next = next ?? null;
  this.random = random ?? null;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {};

// --- Tests ---

// Test 1: null input → null output
console.assert(copyRandomList(null) === null, 'Test 1 failed: null input should return null');

// Test 2: single node with random pointing to itself
const single = new Node(42);
single.random = single;
const copySingle = copyRandomList(single);
console.assert(
  copySingle !== single && copySingle.val === 42 && copySingle.random === copySingle,
  'Test 2 failed: deep copy of single node should be a new object with random pointing to itself'
);

// Test 3: two-node list — verify values and that copy nodes are different objects
const a = new Node(1);
const b = new Node(2);
a.next = b;
a.random = b;  // node1's random → node2
b.random = a;  // node2's random → node1
const copyHead = copyRandomList(a);
console.assert(
  copyHead !== a && copyHead.next !== b,
  'Test 3 failed: copied nodes must be different objects from originals'
);
console.assert(
  copyHead.val === 1 && copyHead.next.val === 2,
  'Test 3 failed: copied values must match originals'
);

// Test 4: random pointer structure is preserved in the copy
console.assert(
  copyHead.random === copyHead.next && copyHead.next.random === copyHead,
  'Test 4 failed: random pointer structure must be replicated in the deep copy'
);

console.log('All tests passed!');
