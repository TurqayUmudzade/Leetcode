var deleteDuplicates = function (head) {

    let map = new Map()
    while (head) {
        if (map.has(head.val)) map.set(head.val, map.get(head.val) + 1)
        else map.set(head.val, 1)
        head = head.next
    }

    head = new ListNode()
    let ans = head
    for (const [key, val] of map.entries()) {
        if (val == 1) {

            head.next = new ListNode(key)
            head = head.next
        }
    }
    return ans.next
};


var deleteDuplicates = function (head) {
    let ans = head
    let map = new Map()
    while (head) {
        if (map.has(head.val)) map.set(head.val, map.get(head.val) + 1)
        else map.set(head.val, 1)
        head = head.next
    }


    while (head) {
        if (map.get(head.val) == 1)
            head = nex
    }
    return ans.next
};