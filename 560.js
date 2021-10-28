var subarraySum = function (arr, k) {

    let map = new Map()
    map.set(0, 1)
    let sum = 0
    let c = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (map.has(sum - k)) c += map.get(sum - k)
        map.set(sum, (map.has(sum) ? map.get(sum) : 0) + 1)
    }
    return c
};