//!
const twoCitySchedCost = function (costs) {
    let cost = 0;
    costs = costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));

    for (let i = 0; i < costs.length / 2; i++)
        cost += costs[i][0] + costs[halfway + i][1];

    return cost;
};