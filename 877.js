var stoneGame = function (arr) {

    let start = 0
    let end = arr.length - 1

    let turn = 0
    let score = new Array(2).fill(0)
    while (start < end) {
        if (arr[start] > arr[end]) {
            console.log(arr[start])
            score[turn % 2] += arr[start]
            start++
        } else {
            console.log(arr[end])
            score[turn % 2] += arr[end]
            end--
        }
        turn++
    }

    if (score[0] > score[1]) return true
    else return false
};


stoneGame([3, 2, 10, 4])