var permute = function (arr) {

    let ans = []
    let n = arr.length
    let dfs = (comb) => {
        if (comb.length == n) {
            ans.push(comb)
            return
        }

        for (let i = 0; i < arr.length; i++) {
            dfs([...comb, arr[i]])
        }
    }

    dfs([])

    return ans.map(arr => [...new Set(arr)]).filter(arr => arr.length == n)
};