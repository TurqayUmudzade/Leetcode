var insert = function (head, insertVal) {
    let newNode = new Node(insertVal, null);
    if (!head) {
        newNode.next = newNode;
        return newNode;
    }
    let inserted = false;
    let cur = head;
    while (!inserted) {
        let curVal = cur.val, nextVal = cur.next.val;
        if ((curVal > nextVal && insertVal <= nextVal) // minimum
            || (curVal > nextVal && insertVal > curVal) // maximum
            || (insertVal > curVal && insertVal <= nextVal) // general
        ) {
            newNode.next = cur.next;
            cur.next = newNode;
            inserted = true;
        }
        cur = cur.next;
        // we've made a full circle
        if (!inserted && cur === head) {
            newNode.next = cur.next;
            cur.next = newNode;
            inserted = true;
        }
    }
    return head;
    // T.C: O(N)
    // S.C: O(1)
};