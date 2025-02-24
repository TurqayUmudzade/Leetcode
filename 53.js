var maxSubArray = function (arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(0, arr[i - 1]) + arr[i]
    max = Math.max(max, arr[i])
  }
  return max
}
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(arr))

