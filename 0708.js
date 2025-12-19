var insert = function (head, val) {
    let newNode = new Node(val)
    if (!head) {
        newNode.next = newNode
        return newNode
    }

    isInserted = false
    let p = head
    while (!isInserted) {
        let cur = head.val
        let next = head.next.val
        if ((cur < val && val <= next) || (next < cur && val > cur) || (next < cur && val <= next)) {
            newNode.next = head.next
            head.next = newNode
            isInserted = true
        }

        head = head.next
        if (!isInserted && head == p) {
            newNode.next = head.next
            head.next = newNode
            isInserted = true
        }

    }

    return p;
};