var containsNearbyDuplicate = function (arr, k) {

    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            if (Math.abs(map.get(arr[i]) - i) <= k) return true
            map.set(arr[i], i)
        }
        else map.set(arr[i], i)

    }
    return false
};