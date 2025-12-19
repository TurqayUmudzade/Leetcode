// Plus One
var plusOne = function (digits) {
  let digit = "";
  digits.forEach((n) => (digit += n));

  let arr = [];
  digit = String(BigInt(digit) + 1n);

  [...digit].forEach((c) => arr.push(parseInt(c)));
  return arr;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
