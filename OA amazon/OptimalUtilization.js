//First way
const fun = (a, b, target) => {
    let arr = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            arr.push({ indexes: [i + 1, j + 1], val: a[i][1] + b[j][1] })
        }
    }

    arr.sort((a, b) => a.val - b.val)
    let ans = []
    let closest = arr[0]
    for (const a of arr) {
        if (a.val === target) ans.push(a.indexes)
        else if (a.val < target && a.val > closest.val) closest = a
        else if (a.val > target && !ans[0]) return closest.indexes
    }

    if (ans[0]) return ans
    else return []
}


//Max Heap
c

let a = [[1, 8], [2, 15], [3, 9]]

let b = [[1, 8], [2, 11], [3, 12]]

console.log(fun(a, b, 20));