function sortedSquares(arr) {
    let l = 0
    let r = arr.length - 1
    let p = r
    let ans = []
    while (l <= r) {
        if (arr[r] < Math.abs(arr[l])) ans[p--] = arr[l++] ** 2
        else ans[p--] = arr[r--] ** 2
    }
    return ans
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));