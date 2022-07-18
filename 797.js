// var allPathsSourceTarget = function (graph) {
//     let ans = []
//     let dfs = (i, path) => {
//         if (i === graph.length - 1) {
//             ans.push([...path, i])
//             return
//         }

//         for (const node of graph[i]) {
//             dfs(node, [...path, i])
//         }

//     }

//     dfs(0, [])

//     return ans
// };



var allPathsSourceTarget = function (graph) {

    let ans = []

    const dfs = (g, arr) => {
        if (g === graph.length - 1) {
            ans.push(arr)
            return
        }

        for (const node of graph[g]) {
            dfs(node, [...arr, node])
        }
    }

    dfs(0, [0])
    return ans
};


let graph = [[4, 3, 1], [3, 2, 4], [3], [4], []]

console.log(allPathsSourceTarget(graph));