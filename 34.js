var searchRange = function (arr, target) {

    let l = 0
    let r = arr.length - 1
    let out = [-1, -1]

    while (l < r) {
        let mid = (l + r) / 2 | 0;
        if (arr[mid] < target) l = mid + 1;
        else r = mid;
    }
    if (arr[l] != target) return out;
    else out[0] = l;

    r = arr.length - 1;
    while (l < r) {
        let mid = (l + r) / 2 + 1;
        if (arr[mid] > target) r = mid - 1;
        else l = mid;
    }
    out[1] = r;
    return out;
};

console.log(searchRange([1], 1));