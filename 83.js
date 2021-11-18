var deleteDuplicates = function (head) {
    let ans = head

    while (head)
        if (head.next && head.val == head.next.val) head.next = head.next.next
        else head = head.next

    return ans
};