var missingNumber = function (arr) {
    let max = arr.length
    let sum = (max * (max + 1)) / 2
    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];
    }
    return sum
};
