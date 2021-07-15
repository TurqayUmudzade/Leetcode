var minCostClimbingStairs = function (cost) {

    let sum = 0
    let cur = 0
    for (let i = 1; i < cost.length; i++) {
        if (cost[i + 1] < cost[i]) sum += cost[i - 1]
        else { sum += cost[++i] }
    }

    return sum
};