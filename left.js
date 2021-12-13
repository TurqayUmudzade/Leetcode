process.stdin.on('data', function (data) {
    let n = parseInt(data, 10)
    let arr = Array.from({ length: n }, (_, i) => i + 1)
    let order = 1
    while (arr.length !== 1) {
        if (order === 1)
            arr = arr.filter((e, i) => i % 2 === 0)
        else if (order === 2) {
            arr = arr.filter((e, i) => i % 2 !== 0)
        } else if (order === 3) {
            arr = arr.filter((e, i) => (i + 1) % 3 !== 0)
        }
        order = o(rder + 1) % 3
    }
    console.log(arr[0])
});