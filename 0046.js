// var permute = function (arr) {

//     let ans = []
//     let n = arr.length
//     let dfs = (comb) => {
//         if (comb.length == n) {
//             ans.push(comb)
//             return
//         }

//         for (let i = 0; i < arr.length; i++) {
//             dfs([...comb, arr[i]])
//         }
//     }

//     dfs([])

//     return ans.map(arr => [...new Set(arr)]).filter(arr => arr.length == n)
// };



var permute = function (arr) {
    let ans = []

    const dfs = (set, temp) => {
        if (temp.length === arr.length) {
            ans.push(temp)
            return
        }

        for (let i = 0; i < arr.length; i++) {
            if (!set.has(i)) {

                dfs(new Set([...set, i]), [...temp, arr[i]])
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        dfs(new Set([i]), [arr[i]])
    }

    return ans
};

let arr = [1, 2, 3]
console.log(permute(arr));