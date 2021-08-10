

var threeSum = function (arr) {
    arr.sort((a, b) => a - b)
    let ans = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) break

        if (arr[i] !== arr[i - 1] || i == 0) {
            let cur = twoSum(arr, i + 1, -arr[i])

            if (cur.length > 0) {
                for (const a of cur) ans.push([arr[i], ...a])

            }
        }
    }
    return ans
};


function twoSum(arr, l, sum) {
    let set = new Set()
    let r = arr.length - 1
    let ans = []
    while (l < r) {
        if (arr[l] + arr[r] === sum) {
            if (set.has(arr[l] + "|" + arr[r])) {
                l++
                continue
            }
            set.add(arr[l] + "|" + arr[r])
            ans.push([arr[l], arr[r]])
        }
        else if (arr[l] + arr[r] > sum) { r--; continue }
        l++
    }

    return ans
};

let nums = [-1, 0, 1, 2, -1, -4]

