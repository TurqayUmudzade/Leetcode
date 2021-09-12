var maximumUnits = function (arr, truckSize) {

    let max = 0
    arr.sort((a, b) => b[1] - a[1])

    for (const array of arr) {
        if (array[0] < truckSize) {
            truckSize -= array[0]
            max += array[0] * array[1]
        } else {
            max += truckSize * array[1]
            break
        }
    }
    return max
};


let boxTypes = [[1, 3], [2, 2], [3, 1]]
let truckSize = 4


console.log(maximumUnits(boxTypes, truckSize));