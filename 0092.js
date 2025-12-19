var reverseBetween = function (head, left, right) {
    const p = new ListNode(0, head);
    let start = p;
    for (let i = 1; i < left; i++)   start = start.next;
    let current = start.next;

    for (let i = 0; i < right - left; i++) {
        let temp = current.next;
        current.next = temp.next;
        temp.next = start.next;
        start.next = temp;
    }

    return p.next;
};