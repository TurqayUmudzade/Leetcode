var plusOne = function (arr) {
    let carry = 1

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] + carry <= 9) {
            arr[i] = arr[i] + carry
            carry = 0
            break
        } else {
            arr[i] = 0
        }
    }

    if (carry !== 0) return [1, ...arr]

    return arr
};