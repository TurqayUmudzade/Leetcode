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

var mergeTwoLists = function (l1, l2) {
    if (l1 == null) {
        return l2;
    }
    else if (l2 == null) {
        return l1;
    }
    else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}