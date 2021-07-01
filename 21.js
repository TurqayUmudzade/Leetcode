
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


const mergeTwoLists = (l1, l2) => {
    if (!l1 && !l2) return null
    if (!l1) return l2
    if (!l2) return l1

    let head = new ListNode()
    cur = head
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }

    cur.next = l1 || l2

    return head.next
}