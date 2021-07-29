var removeDuplicates = function (arr) {
    let p = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            arr[p++] = arr[i]
        }
    }
    return p
};