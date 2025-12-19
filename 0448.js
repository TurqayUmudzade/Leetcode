var findDisappearedNumbers = function (arr) {

    let numbers = []
    for (let i = 0; i < arr.length; i++) {
        numbers[arr[i]] = arr[i]
    }

    let missing = []
    for (let i = 1; i < arr.length + 1; i++) {
        if (!numbers[i]) missing.push(i)
    }
    return missing
};