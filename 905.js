var sortArrayByParity = function (arr) {
    let ans = new Array(arr.length)
    let start = 0
    let end = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) ans[start++] = arr[i]
        else ans[end--] = arr[i]
    }
    return ans
};