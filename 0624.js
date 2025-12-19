var maxDistance = function (arrays) {

    let min = Number.MAX_VALUE
    let max = Number.MIN_VALUE
    for (const arr of arrays) {
        min = Math.min(min, arr[0])
        max = Math.max(max, arr[arr.length - 1])
    }

    return max - min
};