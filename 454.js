var kClosest = function (points, k) {

    const distance = (x, y) => {
        return x ** 2 + y ** 2
    }

    let arr = []
    for (let i = 0; i < points.length; i++) {
        arr.push({
            distance: distance(points[i][0], points[i][1]),
            index: i
        })
    }

    arr.sort((a, b) => a.distance - b.distance)

    let ans = []
    for (let i = 0; i < k; i++) {
        ans.push(points[arr[i].index])
    }
    return ans
};

kClosest([[1, 3], [-2, 2]], 1)