const kClosest = (points, k) => {

    const distance = (x, y) => x ** 2 + y ** 2
    const arr = []
    for (const [x, y] of points) {
        arr.push(distance(x, y))
    }


    const swap = (i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    const partition = (pivotIndex, l, r) => {
        let i = l
        let j = l
        swap(pivotIndex, r)
        while (j < r) {
            if (arr[j] < arr[r]) {
                swap(i, j)
                i++
            }
            j++
        }

        swap(r, i)
        return i

    }

    let l = 0
    let r = arr.length - 1
    let kBoundry = arr.length - k
    const out = new Set()
    while (true) {
        if (out.size === k) break
        let pivot = Math.floor(Math.random() * (r - l + 1) + l)
        let partionIndex = partition(pivot, l, r)
        if (partionIndex < kBoundry) l = partionIndex + 1
        else out.add(partionIndex)
    }

    let ans = []
    for (const val of out) {
        ans.push(points[val])
    }

    return ans
}

console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));