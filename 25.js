var reverseKGroup = function (head, k) {
    if (!head) {
        return null;
    }
    let dummyHead = new ListNode();
    let newList = dummyHead;
    let cur = head;
    while (cur !== null) {
        // start is at head and cur is at tail of k-group
        let start = cur;
        for (let i = 1; i < k; i++) {
            cur = cur.next;
            if (!cur) {
                return dummyHead.next;
            }
        }
        let next = cur.next; // store next node

        // cur is at head and start is at tail of k-group now
        newList.next = reverseList(start, k);

        // connect tail with next node
        start.next = next;

        // advance new list pointer
        newList = start;

        // advance current list pointer
        cur = next;
    }
    return dummyHead.next;
};

const reverseList = (head, k) => {
    let prev = null, cur = head;
    for (let i = 0; i < k; i++) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}