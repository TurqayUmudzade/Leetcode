var arraySign = function (arr) {
    let sign = 1
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === 0) return 0
        else sign *= Math.sign(arr)
    return sign
};