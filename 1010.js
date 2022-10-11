var numPairsDivisibleBy60 = function (time) {

    for (let i = 0; i < time.length; i++) {
        time[i] = time[i] % 60
    }
    let count = 0;
    let remainders = Array.from({ length: 60 }, () => 0);
    for (let t of time) {
        if (t == 0) count += remainders[0];
        else count += remainders[60 - t];

        remainders[t]++;
    }
    return count;
};



let time = [30, 20, 150, 100, 40]
time = [60, 60, 60]
console.log(numPairsDivisibleBy60(time));