var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return l1

    let p1 = l1
    let p2 = l2
    while (p1 && p2) {
        if (p1.val >= p2.val) {
            let temp = p2.next
            p2.next = p1
            p1 = p2
            p2 = temp
        } else
            p1 = p1.next
    }

    return l1
};