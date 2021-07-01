const twoSumLessThanK = (a, k) => {
    a.sort((a, b) => a - b)

    let max = -1
    let p1 = 0
    let p2 = a.length - 1
    while (p1 < p2) {
        let sum = a[p1] + a[p2]
        if (sum < k) {
            max = Math.max(max, sum)
            p1++
        } else {
            p2--
        }
    }

    return max
}

let A = [34, 23, 1, 24, 75, 33, 54, 8], K = 60

console.log(twoSumLessThanK(A, K));