var twoCitySchedCost = function (costs) {
    costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
    let sum = 0
    for (let i = 0; i < costs.length; i++) {
        if (i >= costs.length / 2) sum += costs[i][1]
        else sum += costs[i][0]
    }
    return sum
};

