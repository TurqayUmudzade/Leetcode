const generateParenthesis = (n) => {
    const res = [];

    function helper(left, right, s) {
        if (left > right) return;

        if (left === 0 && right === 0) {

            res.push(s);
            return;
        }

        if (left > 0) helper(left - 1, right, s + '(');
        if (right > 0) helper(left, right - 1, s + ')');
    }

    helper(n, n, '');
    return res;
}


var generateParenthesis = function (n) {
    let ans = []

    let dfs = (left, right, s) => {
        if (left < right) return

        if (left === 0 && right === 0) {
            ans.push(s)
            return
        }

        if (left > 0) helper(left - 1, right, s + '(');
        if (right > 0) helper(left, right - 1, s + ')');

    }

    dfs(n, n, "")

    return ans
};