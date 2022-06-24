/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {

    let p = head
    let len = 0
    while (p) {
        p = p.next
        len++
    }

    for (let i = 1; i < len / 2; i++) {
        head = head.next
    }
    return len % 2 == 0 ? head.next : head
};  