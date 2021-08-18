let search = (arr, target) => {


    function findPivot(arr) {
        let left = 0, right = arr.length - 1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid + 1] < arr[mid]) return mid
            if (arr[left] > arr[mid]) right = mid - 1;
            else left = mid + 1;

        }
        return 0
    }
    let pivot = findPivot(arr)

    let binarySearch = (left, right) => {
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) return mid
            else if (arr[mid] > target) right = mid - 1
            else left = mid + 1

        }
        return -1
    }

    let a = binarySearch(0, pivot)
    let b = binarySearch(pivot + 1, arr.length - 1)
    return a === -1 ? b : a
}


