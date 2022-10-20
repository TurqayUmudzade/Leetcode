var flatten = function (head) {
    if (!head) return head;
    let p = head;
    while (p) {
        if (!p.child) {
            p = p.next;
            continue;
        }
        let temp = p.child;
        while (temp.next)
            temp = temp.next;
        temp.next = p.next;
        if (p.next) p.next.prev = temp;
        p.next = p.child;
        p.child.prev = p;
        p.child = null;
    }
    return head;
};


/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
