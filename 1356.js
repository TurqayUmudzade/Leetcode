var sortByBits = function (arr) {
    function countBits(num) {
        let sum = 0;
        while (num) {
            sum += num & 1;
            num = num >> 1;
        }
        return sum;
    }
    return arr.sort((a, b) => countBits(a) - countBits(b) || a - b)
};

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]



console.log(sortByBits(arr));



