var minCost1 = function (arr) {

    const dfs = (i, prevColor) => {
        if (i === arr.length) return 0
        let localMin = Number.MAX_SAFE_INTEGER
        for (let k = 0; k < 3; k++) {
            if (prevColor !== k) {
                localMin = Math.min(localMin, dfs(i + 1, k))
            }
        }
        return localMin + arr[i][prevColor]

    }

    return Math.min(dfs(0, 0), dfs(0, 1), dfs(0, 2))
};


var minCost2 = function (arr) {
    let memo = new Map()
    const format = (i, color) => i + "," + color
    const dfs = (i, prevColor) => {

        if (i === arr.length) return 0
        if (memo.has(format(i, prevColor))) return memo.get(format(i, prevColor))
        let localMin = Number.MAX_SAFE_INTEGER
        for (let k = 0; k < 3; k++) {
            if (prevColor !== k) {
                localMin = Math.min(localMin, dfs(i + 1, k))
            }
        }
        let total = localMin + arr[i][prevColor]
        memo.set(format(i, prevColor), total)
        return total

    }

    return Math.min(dfs(0, 0), dfs(0, 1), dfs(0, 2))
};


//didnt undestand
var minCost = function (costs) {
    let n = costs.length;

    for (let i = 1; i < n; i++) {
        costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
        costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
        costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
    }

    return Math.min(costs[n - 1][0], costs[n - 1][1], costs[n - 1][2]);
};


let costs = [[17, 2, 17], [16, 16, 5], [14, 3, 19]]
console.log(minCost(costs));