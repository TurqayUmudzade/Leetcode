var findPeakElement = function (arr) {

    let l = 0
    let r = arr.length - 1

    while (l < r) {
        let mid = (l + r) / 2 | 0
        if (arr[mid] < arr[mid + 1]) l = mid + 1
        else r = mid
    }


    return l
}

findPeakElement([1, 2, 3, 1])