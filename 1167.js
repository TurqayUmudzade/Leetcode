var connectSticks = function (arr) {
    arr = arr.sort((a, b) => a - b)
    let sum = 0
    while (arr[1]) {
        let sumLevel = 0
        for (let j = 0; j < arr.length; j++) {
            sumLevel += arr[j]
        }
        sum += sumLevel
        arr.pop()
    }
    return sum
};