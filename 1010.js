var numPairsDivisibleBy60 = function (time) {
    let c = 0
    let map = new Map()
    for (let n of time) {
        n = n % 60
        if (map.has(60 - n)) c++
        else map.set(n, 0)
    }
    return c
};

let time = [30, 20, 150, 100, 40]
time = [60, 60, 60]
console.log(numPairsDivisibleBy60(time));