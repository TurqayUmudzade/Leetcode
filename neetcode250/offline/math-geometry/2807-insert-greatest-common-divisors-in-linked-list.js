/**
 * 2807. Insert Greatest Common Divisors in Linked List
 *
 * Given the head of a linked list, between every pair of adjacent nodes insert
 * a new node whose value is the GCD of those two nodes' values. Return the
 * modified list head.
 *
 * Examples:
 *   [18,6,10,3] → [18,6,6,2,10,1,3]
 *   [7]         → [7]
 *
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val ?? 0;
    this.next = next ?? null;
}

function arrayToList(arr) {
    let dummy = new ListNode(0);
    let cur = dummy;
    for (const v of arr) { cur.next = new ListNode(v); cur = cur.next; }
    return dummy.next;
}

function listToArray(head) {
    const result = [];
    while (head) { result.push(head.val); head = head.next; }
    return result;
}

var insertGreatestCommonDivisors = function(head) {

};

// Tests
console.assert(
    JSON.stringify(listToArray(insertGreatestCommonDivisors(arrayToList([18,6,10,3])))) === JSON.stringify([18,6,6,2,10,1,3]),
    "Test 1 failed"
);
console.assert(
    JSON.stringify(listToArray(insertGreatestCommonDivisors(arrayToList([7])))) === JSON.stringify([7]),
    "Test 2 failed"
);
console.assert(
    JSON.stringify(listToArray(insertGreatestCommonDivisors(arrayToList([4,8])))) === JSON.stringify([4,4,8]),
    "Test 3 failed"
);
console.assert(
    JSON.stringify(listToArray(insertGreatestCommonDivisors(arrayToList([3,9,3])))) === JSON.stringify([3,3,9,3,3]),
    "Test 4 failed"
);
