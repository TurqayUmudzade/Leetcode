var searchMatrix = function (matrix, target) {
    const row = matrix.length;
    if (row === 0) return false;
    const col = matrix[0].length;

    let current = [0, col - 1];

    while (current[0] >= 0 && current[0] < row && current[1] >= 0 && current[1] < col) {
        const currentValue = matrix[current[0]][current[1]];
        if (currentValue === target) return true;
        else if (currentValue > target) {
            current = [current[0], current[1] - 1];
        }
        else if (currentValue < target) {
            current = [current[0] + 1, current[1]];
        }
    }
    return false;
};
