var findJudge = function (n, trust) {
    let arr = Array.from({ length: n }, () => 0)
    for (const [edge1, edge2] of trust) {
        arr[edge1 - 1]--
        arr[edge2 - 1]++
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n - 1) return i + 1
    }
    return -1
};

let n = 3, trust = [[1, 3], [2, 3]]

console.log(findJudge(n, trust));