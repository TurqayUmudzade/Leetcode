var sortArray = function (nums) {
    return mergeSort(nums)
};


const mergeSort = (arr) => {
    if (arr.length < 2) return arr
    let half = arr.length / 2
    let left = arr.splice(0, half)
    return merge(mergeSort(left), mergeSort(arr))
}

let merge = (left, right) => {
    let arr = []
    while (left.length && right.length)
        if (left[0] < right[0]) arr.push(left.shift())
        else arr.push(right.shift())

    return [...arr, ...left, ...right]
}