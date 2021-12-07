var minCostToMoveChips = function (arr) {
    for (var i = 0, even = 0; i < arr.length; i++)
        if (arr[i] % 2 == 0) even++
    if (arr.length - even < even) return arr.length - even
    else return even
};