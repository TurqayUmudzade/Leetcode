var reverseBetween = function (head, left, right) {

    let start = head, cur = head;
    let i = 1;
    while (i < m) {
        start = cur;
        cur = cur.next;
        i++;
    }


    let end = start

    while (right > c) {
        c++
        end = end.next
    }

    let temp = end.next
    end.next = null
    end = temp


    start.next = reverseList(start.next)

    // while (start.next) {
    //     start = start.next
    // }

    // start.next = end

    return head

};

var reverseList = function (head) {
    let prev = null
    while (head) {
        let temp = head.next
        head.next = prev
        prev = head
        head = temp
    }
    return prev
};