var checkPossibility = function (arr) {
    let c = 0
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            c++
        }
    }
    return c > 2 ? false : true
};  