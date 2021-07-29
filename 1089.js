var duplicateZeros = function (arr) {
    let temp = null
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === 0) {
            temp = arr[i + 1]
            arr[i + 1] = 0
            i++
        } else if (temp) {
            arr[i] = temp
            temp = arr[i + 1]
        }
    }
    return arr
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));