var mergeTwoLists = function (l1, l2) {
    let res = new ListNode()
    let p = res
    while (l1 && l2) {
        if (l1.val < l2.val) {
            res.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            res.next = new ListNode(l2.val)
            l2 = l2.next
        }
        res = res.next
    }

    res.next = l1 || l2

    return p.next
};