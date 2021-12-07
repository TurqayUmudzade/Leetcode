var getDecimalValue = function (head) {

    let n = ""
    while (head) {
        n += head.val
        head = head.next
    }

    return parseInt(n, 2)
};