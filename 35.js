
var searchInsert = function (arr, target) {

    let l = 0
    let r = arr.length - 1

    while (l <= r) {
        let mid = ((l + r) / 2) | 0
        if (arr[mid] === target) return mid
        else if (arr[mid] < target) l = mid + 1
        else r = mid - 1
    }

    return r + 1
};

