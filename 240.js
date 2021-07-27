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

var searchMatrix = function (matrix, target) {
    if (!matrix.length) return false;

    function callSearch(top, bottom, left, right) {
        if (top === bottom && left === right) {
            if (matrix[top][left] === target) return true;
            else return false;
        }

        const midRow = Math.floor((top + bottom) / 2);
        const midCol = Math.floor((left + right) / 2);

        if (matrix[midRow][midCol] === target) return true;

        // top left box
        if (target < matrix[midRow][midCol]) {
            const val = callSearch(top, midRow, left, midCol);
            if (val) return val;
        }

        // top right box
        if (midCol + 1 <= right &&
            matrix[top][midCol + 1] <= target &&
            matrix[midRow][right] >= target) {
            const val = callSearch(top, midRow, midCol + 1, right);
            if (val) return val;
        }

        // bottom left box
        if (midRow + 1 <= bottom &&
            matrix[midRow + 1][left] <= target &&
            matrix[bottom][midCol] >= target) {
            const val = callSearch(midRow + 1, bottom, left, midCol);
            if (val) return val;
        }

        // bottom right box
        if (midRow + 1 <= bottom &&
            midCol + 1 <= right &&
            matrix[midRow + 1][midCol + 1] <= target &&
            matrix[bottom][right] >= target) {
            const val = callSearch(midRow + 1, bottom, midCol + 1, right);
            if (val) return val;
        }
        return false;
    }
    return callSearch(0, matrix.length - 1, 0, matrix[0].length - 1);
};