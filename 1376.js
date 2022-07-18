var numOfMinutes = function (n, headID, manager, informTime) {
    let graph = Array.from({ length: n }, () => [])

    for (let i = 0; i < graph.length; i++) {
        if (i !== headID) {
            graph[manager[i]].push(i)
        }
    }

    let time = 0
    const dfs = (node, t) => {
        time = Math.max(time, t)
        for (const sub of graph[node]) {
            dfs(sub, t + informTime[sub])
        }
    }

    dfs(headID, informTime[headID])
    return time
}


let n = 15, headID = 0, manager = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], informTime = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]

console.log(numOfMinutes(n, headID, manager, informTime));

