/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let out = new ListNode(0)
    const head = out
    let carry = 0

    while (l1 || l2) {
        const l1Val = l1 ? l1.val : 0
        const l2Val = l2 ? l2.val : 0
        const sum = l1Val +l2Val + carry
        if (sum >= 10) carry = 1
        else carry = 0 
        out.next = new ListNode(sum%10)

        out = out.next
        l1 = l1?.next
        l2 = l2?.next
    }

    if(carry){
        out.next = new ListNode(1)
    }


    return head.next
    
};
