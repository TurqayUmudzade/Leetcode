const merge = (arr) => {

    if (!arr.length) return arr

    arr.sort((a, b) => a[0] - b[0])
    let prev = arr[0]
    let ans = [prev]
    for (let cur of arr) {
        if (prev[1] >= cur[0]) {
            prev[1] = Math.max(cur[1], prev[1])
        }
        else {
            ans.push(cur)
            prev = cur

        }
    }
    return ans
};