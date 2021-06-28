var myPow1 = function (x, n) {
    return x ** n
};

var myPow = function (x, n) {

    if (n == 0) return 1

    let pow = Math.abs(n)

    let result =

};


var myPow = function (a, b) {

    if (b == 0) return 1            // base case  
    else if (b == 1) return a           // base case 
    else if (b == -1) return 1 / a
    else if (b % 2 == 0) {
        let t = myPow(a, b / 2);
        return t * t
    }
    else if (b % 2 != 0) {
        return a * myPow(a, b - 1)
    }

};


console.log(myPow(4, -2));