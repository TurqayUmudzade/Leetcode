var numTeams = function (arr) {
    let n = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] < arr[j] && arr[j] < arr[k]) n++
                else if (arr[i] > arr[j] && arr[j] > arr[k]) n++
            }
        }
    }

    return n
};