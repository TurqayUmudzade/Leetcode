
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


const mergeTwoLists = (l1, l2) => {
    if (!l1 && !l2) return null
    if (!l1) return l2
    if (!l2) return l1

    let head = new ListNode()
    let p = head

    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = l1
            l1 = l1.next
        } else {
            head.next = l2
            l2 = l2.next
        }
        head = head.next
    }

    head.next = l1 || l2
    return p.next

}