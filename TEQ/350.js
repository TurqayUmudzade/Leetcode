var intersect = function (nums1, nums2) {
    let map = {}, result = []

    for (let idx of nums1) {
        if (!map[idx]) map[idx] = 1
        else map[idx]++

    }

    for (let idx of nums2) {
        if (map[idx] > 0) result.push(idx)
        map[idx]--
    }

    return result
};