var swapPairs = function (head) {
    if (!head || !head.next) return head;

    let temp = head.next
    head.next = swapPairs(head.next.next)
    temp.next = head
    head = temp
    return temp
};