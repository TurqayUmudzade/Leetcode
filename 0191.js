var hammingWeight = function (n) {
  let sum = 0

  while (n != 0) {
    sum += n & 1
    n = n >>> 1
    console.log(n)
  }

  return sum
}

// console.log(hammingWeight(11))
console.log(11 >>> 1)
