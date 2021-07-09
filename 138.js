

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

var copyRandomList = function (head) {
    let list = new Node()
    let p = list

    let copy = head
    while (head) {
        list.next = new Node(head.val)
        head = head.next
        list = list.next
    }

    head = copy
    list = p
    while (head) {
        list.random
        head = head.next
        list = list.next
    }

    return p

};