var matrixReshape = function (mat, r, c) {


    if (r * c !== mat.length * mat[0]?.length) return mat

    let flatten = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            flatten.push(mat[i][j])

        }
    }

    let ind = 0
    let arr = Array.from({ length: r }, _ => new Array(c));
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            arr[i][j] = flatten[ind++]
        }
    }
    return arr
};