const merge = (arr) => {
    if (arr.length === 1) return arr
    arr.sort((a, b) => a[0] - b[0])

    let ans = [arr[0]]
    for (let i = 0; i < arr.length - 1; i++) {
        let temp = ans[ans.length - 1]
        if (temp[1] >= arr[i + 1][0]) {
            ans.pop()
            let max = Math.max(temp[1], arr[i + 1][1])
            ans.push([temp[0], max])
        } else {
            ans.push(arr[i + 1])
        }
    }
    return ans
};


let intervals = [[1, 4], [0, 2], [3, 5]]
console.log(merge(intervals));