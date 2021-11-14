function isPalindrome(head) {
    let n = getSize(head)

    let p = head
    for (let i = 1; i < n / 2; i++) {
        p = p.next
    }

    let p = head
    for (let i = 1; i <= n / 2; i++) {
        let j = i
        let temp = head;
        while (j < n - 2) {
            temp = temp.next
        }
        if (temp != head) return false
        head = head.next
    }

    return true
}


function getSize(head) {
    let n = 0
    while (head) {
        head = head.next
        n++
    }
    return n
}