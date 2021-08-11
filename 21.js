var mergeTwoLists = function (l1, l2) {

    if (!l1 && !l2) return null
    if (!l1) return l2
    if (!l2) return l1
    let p = new ListNode();
    let ans = p
    while (l1 && l2) {
        if (l1.val > l2.val) {
            ans.next = new ListNode(l2.val)
            l2 = l2.next
        } else {
            ans.next = new ListNode(l1.val)
            l1 = l1.next
        }
        ans = ans.next
    }

    ans.next = l1 || l2

    return p.next
};