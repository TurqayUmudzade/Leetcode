var rotateRight = function (head, k) {

    if (!head) return null
    if (!head.next) return head

    let len = 0
    let cur = head
    while (cur) {
        len++
        cur = cur.next
    }

    k = k % len
    if (!k) return head //if k is 0

    cur = head
    for (let i = 0; i < len - k - 1; i++)   cur = cur.next

    let start = cur.next
    cur.next = null

    let ans = start

    while (start.next) start = start.next

    start.next = head

    return ans
};