
var searchInsert = function (arr, target) {

    let l = 0
    let r = arr.length - 1

    while (l <= r) {
        let mid = ((l + r) / 2) | 0
        console.log(l, r, mid);
        if (arr[mid] === target) return mid
        else if (arr[mid] < target) l = mid + 1
        else r = mid - 1
    }

    return r
};


console.log(searchInsert([1, 3, 5, 6], 7));