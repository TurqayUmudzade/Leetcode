function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var pairSum = function (head) {
    let start = head
    
    let n = 0
    while (head) {
        head = head.next
        n++
    }




};


const reverse = (head) => {
    let prev = null

    while (head) {
        let temp = head.next
        head.next = prev
        prev = head
        head = temp
    }
    return prev
}
