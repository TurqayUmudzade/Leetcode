const search = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right) return -1

    let mid = ((left + right) / 2) | 0
    if (arr[mid] === target) return mid
    else if (arr[mid] > target) return search(arr, target, left, mid - 1)
    else return search(arr, target, mid + 1, right)
}


const search = (arr, target) => {
    let left = 0, right = arr.length - 1

    while (left <= right) {
        let mid = ((left + right) / 2) | 0
        if (arr[mid] === target) return mid
        else if (arr[mid] > target) right = mid - 1
        else left = mid + 1
    }

    return -1
}