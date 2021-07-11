const copyRandomList = (head) => {
    if (!head) return null

    let map = new Map()
    let cur = head
    while (cur) {
        map.set(cur, new Node(cur.val))
        cur = cur.next
    }

    cur = head
    while (cur) {
        map.get(cur).next = map.get(cur.next) || null
        map.get(cur).random = map.get(cur.random) || null
        cur = cur.next
    }

    return map.get(head)
}