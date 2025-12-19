var fizzBuzz = function (n) {
    let arr = new Array(n)

    let helper = (n) => {
        if (n % 3 == 0 && n % 5 == 0) return "FizzBuzz"
        if (n % 3 == 0) return "Fizz"
        if (n % 5 == 0) return "Buzz"
        return "" + n
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = helper(i + 1)
    }
    return arr
};