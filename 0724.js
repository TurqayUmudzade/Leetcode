var pivotIndex = function (nums) {
  let sum = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];

  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];
    if (sum - temp === (sum - nums[i]) / 2) return i;
  }
  return -1;
};

let arr = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(arr));
