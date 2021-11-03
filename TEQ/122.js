var maxProfit = function (arr) {
    let profit = 0

    for (let i = 0; i < arr.length - 1; i++)
        if (arr[i] < arr[i + 1]) profit += arr[i + 1] - arr[i]

    return profit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))