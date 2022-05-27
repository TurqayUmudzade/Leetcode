var subtractProductAndSum = function (n) {
    let s = "" + n
    let arr = [...s].map((e) => parseInt(e))
    let sum = 0, prod = 1
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        prod *= arr[i]
    }
    return prod - sum
}
console.log(subtractProductAndSum(234))
