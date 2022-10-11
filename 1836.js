function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var deleteDuplicatesUnsorted = function (head) {
    let p = head

    let map = new Map()
    let toRemove = new Set()
    while (head) {
        if (map.has(head.val)) toRemove.add(head.val)
        else map.set(head.val, 1)
        head = head.next
    }

    head = p
    let temp = new ListNode(-1, head)
    p = temp
    while (head) {
        if (!toRemove.has(head.val)) {
            temp.next = new ListNode(head.val)
        }
    }
    return p.next
};

var deleteDuplicatesUnsorted = function (head) {
    let cur = head

    let map = new Map()
    let toRemove = new Set()
    while (cur) {
        if (map.has(cur.val)) toRemove.add(cur.val)
        else map.set(cur.val, 1)
        cur = cur.next
    }

    let dummyHead = new ListNode(-1, head)
    cur = dummyHead
    while (cur) {
        while (cur.next && toRemove.has(cur.next.val)) {
            cur.next = cur.next.next

        }
        cur = cur.next
    }
    return dummyHead.next
};