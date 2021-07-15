const maxSubArray = arr => {
    let max = arr[0]
    let cur = 0
    for (let i = 0; i < arr.length; i++) {
        cur += arr[i]
        max = Math.max(max, cur)
        cur = Math.max(cur, 0)
    }

    return max
};