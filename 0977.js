const sortedSquares = (arr) => {
    let l = 0
    let r = arr.length - 1
    let ans = []
    while (l <= r) {
        if (Math.abs(arr[l]) < Math.abs(arr[r])) {
            ans.unshift(arr[r] ** 2)
            r--
        } else {
            ans.unshift(arr[l] ** 2)
            l++
        }
    }
    return ans
}