
var searchMatrix = function (matrix, target) {

    let h = matrix.length
    let w = matrix[0].length

    let l = 0
    let r = (h * w) - 1

    function helper(mid) {
        let i = mid / w | 0
        let j = mid % w | 0
        return matrix[i][j]
    }

    while (l <= r) {
        let mid = (l + r) / 2 | 0
        if (helper(mid) === target) return true
        else if (helper(mid) > target) r = mid - 1
        else l = mid + 1
    }
    return false
};


var searchMatrix = function (matrix, target) {
    let l = 0, w = matrix[0].length, r = (matrix.length * w) - 1
    const convert = (mid) => matrix[mid / w | 0][mid % w | 0]
    while (l <= r) {
        let mid = (l + r) / 2 | 0
        if (convert(mid) === target) return true
        else if (convert(mid) > target) r = mid - 1
        else l = mid + 1
    }
    return false
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));