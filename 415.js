var addStrings = function (num1, num2) {
    [num1, num2] = num1.length > num2.length ? [num1, num2] : [num2, num1]
    num1 = num1.split("").reverse().join("")
    num2 = num2.split("").reverse().join("")

    let ans = ''
    let carry = 0
    let sum = 0
    for (let i = 0; i < num1.length; i++) {
        if (num2[i])
            sum = Number(num1[i]) + Number(num2[i])
        else sum = Number(num1[i])

        if ((sum + carry) >= 10) {
            sum = (sum + carry) % 10
            ans += sum
            carry = 1
        }
        else {
            ans += sum + carry
            carry = 0
        }
    }

    if (carry) ans += carry
    return ans.split("").reverse().join("")
};
let num1 = "11", num2 = "123"
console.log(addStrings("99", "9"));