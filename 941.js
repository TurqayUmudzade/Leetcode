var validMountainArray = function (arr) {
    if (arr.length < 3) return false

    var isDecreasing = false
    var isIncreasing = false

    for (var i = 1, j = 0; i < arr.length; i++, j++) {

        if (arr[j] < arr[i] && !isDecreasing) {
            isIncreasing = true
            continue
        }

        isDecreasing = true

        if (arr[j] <= arr[i]) return false

    }

    return isDecreasing && isIncreasing
};