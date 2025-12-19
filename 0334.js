var increasingTriplet = function (arr) {
    let min = Number.MAX_SAFE_INTEGER
    let min2 = min

    for (const n of arr) {
        if (n <= min) min = n
        else if (n <= min2) min2 = n
        else return true
    }
    return false
};