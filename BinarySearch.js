const binarySearch = (arr, n) => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = ((left + right) / 2) | 0
        console.log(mid);
        if (arr[mid] === n) return mid
        else if (n < arr[mid]) right = mid - 1
        else left = mid + 1
    }
    return -1
}

const binarySearchR = (arr, n, left = 0, right = arr.length - 1) => {
    if (left > right) return -1

    let mid = ((left + right) / 2) | 0
    if (arr[mid] === n) return mid
    else if (n < arr[mid]) return binarySearchR(arr, n, left, mid - 1)
    else return binarySearchR(arr, n, mid + 1, right)


}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(binarySearchR(arr, 9));