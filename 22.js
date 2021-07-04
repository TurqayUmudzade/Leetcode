function generateParenthesis(n) {
    const res = [];

    function go(left, right, s) {
        if (left > right) return;

        if (left === 0 && right === 0) {
            res.push(s);
            return;
        }

        if (left > 0) go(left - 1, right, s + '(');
        if (right > 0) go(left, right - 1, s + ')');
    }

    go(n, n, '');
    return res;
}