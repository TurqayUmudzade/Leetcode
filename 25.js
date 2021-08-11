function reverseKGroup(head, k) {
    if (!head) return null;
    var tail = head;
    for (var i = 1; i < k; i++) {
        tail = tail.next;
        if (!tail) return head;
    }
    var next = tail.next;
    tail.next = null;
    reverse(head);
    head.next = reverseKGroup(next, k);
    return tail;
}

function reverse(curr) {
    var prev = null;
    while (curr) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}