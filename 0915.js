var partitionDisjoint = function (a) {

    let localMax = a[0]
    let partitionIdx = 0
    let max = localMax;
    for (let i = 1; i < a.length; i++) {
        if (localMax > a[i]) {
            localMax = max;
            partitionIdx = i;
        } else {
            max = Math.max(max, a[i]);
        }
    }

    return partitionIdx + 1;
};

partitionDisjolet([32, 57, 24, 19, 0, 24, 49, 67, 87, 87])


[32, 57, 24, 19, 0, 24, 49, 67, 87]