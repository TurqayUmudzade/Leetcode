var sortedSquares = function (a) {
    let result = [];
    let l = 0;
    let r = a.length - 1;
    let p = r;

    while (l <= r)
        if (a[l] ** 2 > a[r] ** 2) result[p--] = a[l++] ** 2;
        else result[p--] = a[r--] ** 2;

    return result;
};
