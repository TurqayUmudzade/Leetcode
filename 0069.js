var mySqrt = function (x) {
    let left = 0
    let right = 1000

    while (left <= right) {
        let mid = ((left + right) / 2) | 0
        if (mid * mid === x) return mid
    }

};