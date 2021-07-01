const peakIndexInMountainArray = (arr) => {
    let left = 0
    let right = arr.length - 1


    let mid = ((left + right) / 2) | 0
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid
    else if (arr[mid - 1] > arr[mid]) left = mid - 1
    else if (arr[mid + 1] > arr[mid]) left = mid + 1

    return -1
};


console.log(peakIndexInMountainArray([0, 1, 0]));

