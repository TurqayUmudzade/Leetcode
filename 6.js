var convert = function (s, numRows) {
    if (numRows < 2 || s.length < numRows) return s;

    let count = 0;
    let reverse = false;
    let rows = new Array(numRows).fill('');

    for (let i = 0; i < s.length; i++) {
        rows[count] += s[i];
        reverse ? count-- : count++;
        if (count === numRows - 1 || count === 0) reverse = !reverse
    }

    return rows.join('');
};