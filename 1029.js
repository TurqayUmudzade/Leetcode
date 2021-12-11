var twoCitySchedCost = function (costs) {
    costs = costs.sort((a, b) => (b[0] - b[1]) - (a[0] - a[1]));

    let ans = 0;
    for (let i = 0; i < costs.length / 2; i++)
        ans += costs[i][1];

    for (leti = costs.length / 2; i < costs.length; i++)
        ans += costs[i][0];

    return ans;
};