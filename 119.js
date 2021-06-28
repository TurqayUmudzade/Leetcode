var getRow = function (rowIndex) {
    let triangle = []
    for (let i = 0; i <= rowIndex; i++) {
        let arr = []
        for (let j = 0; j <= i; j++) {
            let left = 0
            let right = 0
            if (i == 0) {
                arr.push(1)
                continue
            }
            if (j - 1 >= 0) left = triangle[i - 1][j - 1]
            if (j < triangle[i - 1].length) right = triangle[i - 1][j]
            arr.push(left + right)

        }
        triangle.push(arr)
    }

    return triangle.pop()
};




console.log(getRow(3));