var canCompleteCircuit = function (gas, cost) {

    //determine if we have a solution
    let total = 0;
    for (let i = 0; i < gas.length; i++)
        total += gas[i] - cost[i];

    if (total < 0)
        return -1;


    // find out where to start
    let tank = 0;
    let start = 0;
    for (let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i];
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    return start;
};