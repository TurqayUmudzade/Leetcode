var triangleNumber = function (nums) {

};

const isValid = (a, b, c) => {
    if (a > b + c) return false
    if (b > a + c) return false
    if (c > b + a) return false
    return true
}

let nums = [2, 2, 3, 4]