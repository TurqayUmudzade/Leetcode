var minSubArrayLen = function (target, arr) {
  arr.sort((a, b) => b - a);
  console.log(arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum);
    if (sum >= target) return i + 1;
  }
  return 0;
};

let arr = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12];
console.log(minSubArrayLen(213, arr));
