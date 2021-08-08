var flatten = function (head) {
    const arr = [];

    const helper = (node) => {
        if (!node) return;
        arr.push(node);
        helper(node.child);
        helper(node.next);
    };
    helper(head);

    for (let i = 0; i < arr.length; i++) {
        arr[i].prev = arr[i - 1] || null;
        arr[i].next = arr[i + 1] || null;
        arr[i].child = null;
    }
    return arr[0] || null;
};