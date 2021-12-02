var isSameTree = function (p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

var myPow = function (x, n) {
    return x ** n
};

var largestRectangleArea = function (heights) {

};