var heightChecker = function (arr) {
    let copy = []
    arr.forEach(e => copy.push(e));
    copy.sort((a, b) => a - b)
    let n = 0
    for (let i = 0; i < arr.length; i++) {
        if (copy[i] !== arr[i]) n++
    }
    return n
};