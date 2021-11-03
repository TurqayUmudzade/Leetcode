var removeDuplicates = function (arr) {
    let p = 1
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            arr[p++] = arr[i + 1]
        }
    }
    return p
};

console.log(removeDuplicates([1, 1, 2]));