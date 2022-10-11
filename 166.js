var fractionToDecimal = function (numerator, denominator) {
    let str = '' + numerator / denominator

    const [left, right] = str.split('.')

    console.log(right);
    return left + "." + right
};

let numerator = 4, denominator = 333
console.log(fractionToDecimal(numerator, denominator));