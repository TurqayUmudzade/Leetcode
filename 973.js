const kClosest = (points, k) => {

    const dist = (x, y) => x ** 2 + y ** 2

    let ans = []
    for (const [x, y] of points)
        ans.push({ dist: dist(x, y), points: [x, y] })

    ans.sort((a, b) => a.dist - b.dist)

    return ans.slice(0, k).map(e => e.points)
}

const kClosest = (points, K) =>
    points.sort((a, b) => (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1])).slice(0, K)


console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));