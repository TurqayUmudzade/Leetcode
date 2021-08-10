var productExceptSelf = function (arr) {
    let left = new Array(arr.length)
    let right = new Array(arr.length)
    left[0] = 1
    right[arr.length - 1] = 1

    for (let i = 1; i < arr.length; i++)
        left[i] = left[i - 1] * arr[i - 1]

    for (let i = arr.length - 2; i >= 0; i--)
        right[i] = right[i + 1] * arr[i + 1]

    for (let i = 0; i < arr.length; i++)
        arr[i] = left[i] * right[i]

    return arr
};