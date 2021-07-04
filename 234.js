var isPalindrome = function (head) {

    if (!head) return false
    let arr = []

    while (head) {
        arr.push(head.val)
        head = head.next
    }

    let len = arr.length % 2 === 0 ? arr.length / 2 : arr.length / 2 - 1
    for (let i = 0; i < len; i++)
        if (arr[i] !== arr[arr.length - 1 - i]) return false;

    return true
};


let str = "12345678"

let arr = [...str]

for (let i = 0; i < arr.length / 2; i++) {
    const element = arr[i];
    console.log(element)

}