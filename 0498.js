var findDiagonalOrder = function (matrix) {
    if (matrix.length === 0 || matrix[0].length == 0) return [];
    let rows = matrix.length;
    let columns = matrix[0].length;
    let results = new Array(rows + columns - 1);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (!results[i + j]) results[i + j] = [];
            results[i + j].push(matrix[i][j]);
        }
    }
    for (i = 0; i < (rows + columns - 1); i = i + 2) {
        if (i % 2 === 0) results[i] = results[i].reverse();
    }
    return results.flat()
};