var largestPerimeter = function (arr) {
    arr.sort((a, b) => b - a)

    for (let i = 0; i < arr.length; i++) {
        let a = arr[i]
        let b = arr[i + 1]
        let c = arr[i + 2]
        if (a < b + c) return a + b + c
    }


    return 0
};
let nums = [1, 2, 1]
console.log('====================================');
console.log(largestPerimeter(nums));
console.log('====================================');