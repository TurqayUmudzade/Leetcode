var setZeroes = function (matrix) {

    let rows = new Set()
    let cols = new Set()
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i)
                cols.add(j)
            }
        }
    }


    for (const val of rows.values()) {
        matrix[val].fill(0)
    }

    for (const val of cols.values()) {
        for (const arr of matrix) {
            arr[val] = 0
        }
    }

    return matrix
};

let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
console.log(setZeroes(matrix))
//[[1,0,1],[0,0,0],[1,0,1]]