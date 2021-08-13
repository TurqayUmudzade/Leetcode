const merge = (arr) => {

    if (!arr.length) return arr
    if (arr.length === 1) return arr

    arr.sort((a, b) => a[0] - b[0])

    let ans = []
    let temp = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (temp[1] >= arr[i][0]) temp = [temp[0], Math.max(arr[i][1], temp[1])]
        else {
            ans.push(temp)
            temp = arr[i]
        }
    }
    ans.push(temp)
    return ans
};