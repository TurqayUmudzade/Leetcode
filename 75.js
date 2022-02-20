var sortColors = function (arr) {
    let l = 0
    let r = arr.length - 1
    let cur = 0
    while (cur <= r) {
        if (arr[cur] == 2) {
            [arr[r], arr[cur]] = [arr[cur], arr[r]]
            r--
        } else if (arr[cur] == 0) {
            [arr[l], arr[cur]] = [arr[cur], arr[l]]
            cur += 1
            l++
        } else
            cur++
    }
    return arr
};


console.log(sortColors([2, 0, 2, 1, 1, 0]));