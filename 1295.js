function findNumbers(arr) {
    let c = 0
    for (let i = 0; i < arr.length; i++)
        if (arr[i].toString().length % 2 == 0) c++

    return c
}